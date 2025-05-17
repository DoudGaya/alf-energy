import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

// Helper function for generating image URLs with the Sanity Image pipeline
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch all blog posts
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->{name, image}
    }
  `)
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->{name, image}
    }
  `,
    { slug },
  )
}

// Fetch all news items
export async function getAllNews() {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `)
}

// Fetch a single news item by slug
export async function getNewsBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `,
    { slug },
  )
}

// Fetch all projects
export async function getAllProjects() {
  return client.fetch(`
    *[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `)
}

// Fetch a single project by slug
export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `,
    { slug },
  )
}
