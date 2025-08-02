"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getLatestGallery, urlFor } from "@/lib/sanity"

interface GalleryItem {
  _id: string
  title: string
  description?: string
  image: any
  category?: string
  _createdAt: string
}

export default function GallerySection() {
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGallery() {
      try {
        const galleryData = await getLatestGallery(6)
        setGallery(galleryData)
      } catch (error) {
        console.error("Error fetching gallery:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGallery()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our energy projects through stunning visuals and behind-the-scenes moments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`} 
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Gallery</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our energy projects through stunning visuals and behind-the-scenes moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {gallery.map((item, index) => (
            <Card
              key={item._id}
              className={`overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-square" : "aspect-square"}`}>
                <Image
                  src={item.image ? urlFor(item.image).width(index === 0 ? 800 : 400).height(index === 0 ? 800 : 400).url() : "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className={`font-bold mb-2 ${index === 0 ? "text-xl" : "text-lg"}`}>{item.title}</h3>
                    {item.description && (
                      <p className={`opacity-90 ${index === 0 ? "text-base" : "text-sm"}`}>{item.description}</p>
                    )}
                  </div>
                </div>
                {item.category && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="capitalize">
                      {item.category.replace("-", " ")}
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
