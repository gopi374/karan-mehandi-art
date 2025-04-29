"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const designs = [
  {
    id: 1,
    image: "/m16.jpg?height=600&width=800",
    title: "Bridal Full Hand",
    category: "Bridal",
  },
  {
    id: 2,
    image: "/m17.jpg?height=600&width=800",
    title: "Arabic Floral",
    category: "Arabic",
  },
  {
    id: 3,
    image: "/m8.jpg?height=600&width=800",
    title: "Traditional Rajasthani",
    category: "Traditional",
  },
  {
    id: 4,
    image: "/36.jpg?height=600&width=800",
    title: "Modern Minimalist",
    category: "Modern",
  },
  {
    id: 5,
    image: "/42.jpg?height=600&width=800",
    title: "Indo-Arabic Fusion",
    category: "Fusion",
  },
  {
    id: 6,
    image: "/49.jpg?height=600&width=800",
    title: "Festive Special",
    category: "Festive",
  },
  {
    id: 7,
    image: "/38.jpg?height=600&width=800",
    title: "Occassional Special",
    category: "Occasion",
  },
  {
    id: 8,
    image: "/50.jpg?height=600&width=800",
    title: "floral Special",
    category: "Floral",
  },
  {
    id: 9,
    image: "/34.jpg?height=600&width=800",
    title: "Wedding Special",
    category: "Wedding",
  },
]

const FeaturedDesignsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = designs.length - visibleItems + 1

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {designs.map((design) => (
            <div
              key={design.id}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 p-4"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className="image-hover-zoom h-full bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image src={design.image || "/placeholder.svg"} alt={design.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{design.title}</h3>
                  <p className="text-sm text-muted-foreground">{design.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
        onClick={prevSlide}
        aria-label="Previous design"
      >
        <ChevronLeft className="h-9 w-9" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
        onClick={nextSlide}
        aria-label="Next design"
      >
        <ChevronRight className="h-9 w-9" />
      </Button>
    </div>
  )
}

export default FeaturedDesignsCarousel

