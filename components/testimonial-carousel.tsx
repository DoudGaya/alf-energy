"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, orangeTech Solutions",
    content:
      "Alfuttaim Energy's expertise in renewable energy solutions has been instrumental in our transition to sustainable operations. Their team's professionalism and knowledge are unmatched in the industry.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director, Urban Development Authority",
    content:
      "The solar mini grid project implemented by Alfuttaim Energy has transformed our community's access to reliable electricity. Their commitment to quality and sustainability is evident in every aspect of their work.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Amina Okafor",
    role: "Sustainability Manager, Global Manufacturing",
    content:
      "Working with Alfuttaim Energy on our energy efficiency initiatives has resulted in significant cost savings and reduced environmental impact. Their innovative approach and attention to detail exceeded our expectations.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary opacity-20">
        <Quote className="h-24 w-24" />
      </div>

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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-8 text-center">
                <p className="text-lg md:text-xl mb-8 italic text-muted-foreground">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
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
