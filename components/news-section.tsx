"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { getLatestNews, urlFor } from "@/lib/sanity"

interface NewsItem {
  _id: string
  title: string
  slug: { current: string }
  overview: string
  mainImage: any
  publishedAt: string
  categories?: string[]
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsData = await getLatestNews(4)
        setNews(newsData)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Latest News</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the latest updates on our energy projects and industry insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse mb-2" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 animate-pulse mb-4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Latest News</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get the latest updates on our energy projects and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {news.map((item) => (
            <Card key={item._id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={item.mainImage ? urlFor(item.mainImage).width(400).height(300).url() : "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.categories && item.categories.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{item.categories[0]}</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.publishedAt).toLocaleDateString()}
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.overview}</p>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <Link href={`/news/${item.slug.current}`} className="flex items-center text-primary">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
