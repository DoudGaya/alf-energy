import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { client } from "@/lib/sanity"

// Define the shape of the user object
interface User {
  _id: string
  name: string
  email: string
  role: string
  image?: string
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required")
        }

        // Fetch the user from Sanity
        const user = await client.fetch<User & { password: string }>(`*[_type == "user" && email == $email][0]`, {
          email: credentials.email,
        })

        if (!user || !user.password || typeof user.password !== 'string') {
          throw new Error("User not found")
        }

        // Compare the provided password with the stored hash
        // @ts-ignore
        const isValid = await compare(credentials.password, user.password)

        if (!isValid) {
          throw new Error("Invalid password")
        }

        // Return the user without the password
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add role to the token if it exists in the user object
      if (user) {
        token.role = (user as any).role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Add role to the session from the token
      if (token && session.user) {
        // @ts-ignore
        session.user.role = token.role as string
        // @ts-ignore
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
