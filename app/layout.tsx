import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alfuttaim Energy - Powering a Sustainable Future",
    template: "%s | Alfuttaim Energy",
  },
  description:
    "Leading integrated energy solutions provider in Nigeria, delivering sustainable development through innovative petroleum operations, renewable energy projects, and strategic energy consulting services.",
  keywords: [
    "energy solutions",
    "renewable energy",
    "petroleum operations",
    "solar energy",
    "Nigeria energy",
    "sustainable energy",
    "energy consulting",
    "mini grid",
    "Alfuttaim"
  ],
  authors: [{ name: "Alfuttaim Energy" }],
  creator: "Alfuttaim Energy",
  publisher: "Alfuttaim Energy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alfuttaim-energy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://alfuttaim-energy.com",
    title: "Alfuttaim Energy - Powering a Sustainable Future",
    description: "Leading integrated energy solutions provider in Nigeria, delivering sustainable development through innovative energy solutions.",
    siteName: "Alfuttaim Energy",
    images: [
      {
        url: "/public-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfuttaim Energy - Powering a Sustainable Future",
    description: "Leading integrated energy solutions provider in Nigeria.",
    images: ["/public-banner.jpg"],
    creator: "@alfuttaim_energy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
