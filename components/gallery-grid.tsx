"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { urlFor } from "@/lib/sanity"

interface GalleryItem {
  _id: string
  title: string
  description?: string
  image: any
  category?: string
  _createdAt: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

const categories = [
  { value: "all", label: "All" },
  { value: "solar", label: "Solar Projects" },
  { value: "wind", label: "Wind Energy" },
  { value: "oil-gas", label: "Oil & Gas" },
  { value: "training", label: "Training" },
  { value: "consulting", label: "Consulting" },
  { value: "events", label: "Events" },
]

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item)
    setCurrentIndex(filteredItems.findIndex(i => i._id === item._id))
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredItems[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.value)}
            className="mb-2"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <Card
            key={item._id}
            className="overflow-hidden cursor-pointer hover:scale-105 transition-transform group"
            onClick={() => openModal(item)}
          >
            <div className="relative aspect-square">
              <Image
                src={item.image ? urlFor(item.image).width(400).height(400).url() : "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs opacity-90 line-clamp-2">{item.description}</p>
                  )}
                </div>
              </div>
              {item.category && (
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {item.category.replace("-", " ")}
                  </Badge>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No images found for this category.</p>
        </div>
      )}

      {/* Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full p-0">
          {selectedImage && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-xl font-bold">{selectedImage.title}</DialogTitle>
                {selectedImage.description && (
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                )}
              </DialogHeader>
              
              <div className="relative">
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.image ? urlFor(selectedImage.image).width(1200).height(800).url() : "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={goToPrevious}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={goToNext}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
              
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {selectedImage.category && (
                      <Badge variant="secondary" className="capitalize">
                        {selectedImage.category.replace("-", " ")}
                      </Badge>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {new Date(selectedImage._createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {filteredItems.length}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
