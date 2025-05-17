"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Alfuttaim Energy Launches New Solar Mini Grid Project",
    excerpt: "Bringing sustainable energy to communities in Gabasawa with our latest solar mini grid installation.",
    date: "May 10, 2025",
    category: "Projects",
    slug: "/news/solar-mini-grid-launch",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Partnership Announcement with Global Renewable Energy Alliance",
    excerpt:
      "Alfuttaim Energy joins forces with the Global Renewable Energy Alliance to accelerate clean energy adoption.",
    date: "May 5, 2025",
    category: "Partnerships",
    slug: "/news/global-alliance-partnership",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Sustainability Report 2025 Released",
    excerpt:
      "Our annual sustainability report highlights our commitment to environmental stewardship and social responsibility.",
    date: "April 28, 2025",
    category: "Company News",
    slug: "/news/sustainability-report-2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Alfuttaim Energy Awarded for Innovation Excellence",
    excerpt: "Recognized for our innovative approach to renewable energy solutions at the Energy Innovation Awards.",
    date: "April 15, 2025",
    category: "Awards",
    slug: "/news/innovation-award",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "New Energy Trading Platform Launched",
    excerpt:
      "Our new digital platform revolutionizes energy trading with advanced analytics and real-time market insights.",
    date: "April 3, 2025",
    category: "Technology",
    slug: "/news/trading-platform-launch",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()

  const itemsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1))
  }, [totalPages])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
  }, [totalPages])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  const visibleItems = () => {
    const startIndex = currentIndex * itemsPerPage
    return newsItems.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <div className="relative">
      <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleItems().map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-md">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge>{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
                  <Link href={item.slug} className="text-primary font-medium hover:underline">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
