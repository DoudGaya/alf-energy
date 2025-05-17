"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Gallery item type
interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  width: number
  height: number
}

// Sample gallery data - in a real app, this would come from Sanity
const galleryItems: GalleryItem[] = [
  // Petroleum Operations
  {
    id: "p1",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Oil refinery at sunset",
    category: "petroleum",
    width: 800,
    height: 600,
  },
  {
    id: "p2",
    src: "/placeholder.svg?height=500&width=800",
    alt: "Petroleum distribution facility",
    category: "petroleum",
    width: 800,
    height: 500,
  },
  {
    id: "p3",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Oil drilling platform",
    category: "petroleum",
    width: 600,
    height: 800,
  },
  {
    id: "p4",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Petroleum laboratory testing",
    category: "petroleum",
    width: 600,
    height: 600,
  },

  // Renewable Energy
  {
    id: "r1",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Solar panel installation",
    category: "renewable",
    width: 800,
    height: 600,
  },
  {
    id: "r2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Wind turbines at sunset",
    category: "renewable",
    width: 600,
    height: 800,
  },
  {
    id: "r3",
    src: "/placeholder.svg?height=500&width=800",
    alt: "Solar mini grid in rural community",
    category: "renewable",
    width: 800,
    height: 500,
  },
  {
    id: "r4",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Biomass energy facility",
    category: "renewable",
    width: 600,
    height: 600,
  },
  {
    id: "r5",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Energy storage systems",
    category: "renewable",
    width: 800,
    height: 600,
  },

  // Consulting
  {
    id: "c1",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team consulting session",
    category: "consulting",
    width: 800,
    height: 600,
  },
  {
    id: "c2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Energy audit in progress",
    category: "consulting",
    width: 600,
    height: 800,
  },
  {
    id: "c3",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Strategic planning meeting",
    category: "consulting",
    width: 600,
    height: 600,
  },

  // Community Projects
  {
    id: "cp1",
    src: "/placeholder.svg?height=600&width=800",
    alt: "Community solar installation ceremony",
    category: "community",
    width: 800,
    height: 600,
  },
  {
    id: "cp2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Rural electrification project",
    category: "community",
    width: 600,
    height: 800,
  },
  {
    id: "cp3",
    src: "/placeholder.svg?height=500&width=800",
    alt: "Community training workshop",
    category: "community",
    width: 800,
    height: 500,
  },
  {
    id: "cp4",
    src: "/placeholder.svg?height=600&width=600",
    alt: "School energy education program",
    category: "community",
    width: 600,
    height: 600,
  },
]

interface GallerySectionProps {
  variant?: "default" | "projects"
  className?: string
}

export default function GallerySection({ variant = "default", className }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Filter gallery items based on active category
  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  // Categories for filter buttons
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "petroleum", label: "Petroleum Operations" },
    { id: "renewable", label: "Renewable Energy" },
    { id: "consulting", label: "Consulting Services" },
    { id: "community", label: "Community Projects" },
  ]

  // Animation variants for the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="mb-2"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
          variant === "projects" && "lg:grid-cols-4",
        )}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={activeCategory} // Re-render animation when category changes
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <Badge className="mb-2">{categories.find((c) => c.id === item.category)?.label}</Badge>
                  <p className="text-white font-medium">{item.alt}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
