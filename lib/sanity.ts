import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-08-02",
  useCdn: process.env.NODE_ENV === "production",
})

// Configuration for Sanity Studio
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-08-02",
  useCdn: process.env.NODE_ENV === "production",
}

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
      overview,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `)
}

// Fetch latest news items (for homepage)
export async function getLatestNews(count: number = 4) {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc)[0...${count}] {
      _id,
      title,
      slug,
      overview,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `)
}

// Fetch paginated news
export async function getPaginatedNews(page: number = 1, pageSize: number = 6) {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  
  const [news, total] = await Promise.all([
    client.fetch(`
      *[_type == "news"] | order(publishedAt desc)[${start}...${end}] {
        _id,
        title,
        slug,
        overview,
        mainImage,
        publishedAt,
        "categories": categories[]->title
      }
    `),
    client.fetch(`count(*[_type == "news"])`)
  ])
  
  return {
    news,
    total,
    hasMore: end < total,
    totalPages: Math.ceil(total / pageSize)
  }
}

// Fetch a single news item by slug
export async function getNewsBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      overview,
      body,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }
  `,
    { slug },
  )
}

// Fetch all gallery items
export async function getAllGallery() {
  return client.fetch(`
    *[_type == "gallery"] | order(_createdAt desc) {
      _id,
      title,
      description,
      image,
      category,
      _createdAt
    }
  `)
}

// Fetch latest gallery items (for homepage)
export async function getLatestGallery(count: number = 6) {
  return client.fetch(`
    *[_type == "gallery"] | order(_createdAt desc)[0...${count}] {
      _id,
      title,
      description,
      image,
      category,
      _createdAt
    }
  `)
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
