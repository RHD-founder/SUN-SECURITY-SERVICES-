"use client"

import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const images = [
  { src: "/sun-security-team-1.png", alt: "SUN SECURITY SERVICES team marching in formation in front of modern building" },
  { src: "/sun-security-team-2.png", alt: "Professional security personnel in ceremonial formation" },
  { src: "/sun-security-team-3.png", alt: "Large formation of SUN SECURITY SERVICES officers during ceremony" },
  { src: "/sun-security-team-4.png", alt: "Security guards marching in disciplined formation" },
  { src: "/sun-security-team-5.jpeg", alt: "Security personnel in formation under covered area" },
  { src: "/sun-security-team-group-photo.png", alt: "Professional group photograph of SUN SECURITY SERVICES team in indoor setting" },
  { src: "/sun-security-ceremonial-formation.png", alt: "Security personnel in disciplined formation during ceremonial parade" },
  { src: "/sun-security-building-march.png", alt: "Security team marching in perfect formation in front of institutional building" },
  { src: "/sun-security-disciplined-march.png", alt: "Security personnel demonstrating Strict Discipline in marching formation" },
  { src: "/sun-security-road-march.png", alt: "Security personnel marching in formation along institutional pathway" },
  { src: "/sun-security-parade-formation.png", alt: "Residential security patrol and monitoring" },
  { src: "/IMG_20201108_140444.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/IMG-20201029-WA0002.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/IMG-20201029-WA0006.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/IMG-20201127-WA0004.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/IMG-20201127-WA0009.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/WP_20170815_003.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/WP_20170815_014.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/WP_20170815_015.jpg", alt: "Residential security patrol and monitoring" },
  { src: "/DSC00973.JPG", alt: "Residential security patrol and monitoring" },
  { src: "/DSC00980.JPG", alt: "Residential security patrol and monitoring" },
  { src: "/DSLR-1601800136747.jpg", alt: "Residential security patrol and monitoring" },
]

export default function GalleryGrid() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const active = images[activeIndex]

  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    []
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    []
  )

  // Keyboard navigation inside the lightbox
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, showPrev, showNext])

  return (
    <section className="py-16 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-[var(--font-bebas)] tracking-wide text-[#0A192F]">
          Gallery
        </h2>
        <p className="text-gray-600 mt-1">
          Snapshots of our professional team, operations, and training programs.
        </p>

        {/* Masonry Grid */}
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View ${img.alt}`}
              className="mb-4 block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] hover:shadow-lg transition-all duration-300"
              onClick={() => {
                setActiveIndex(index)
                setOpen(true)
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={640}
                height={480}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-300"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            className="fixed inset-0 z-[70] m-0 w-screen h-screen max-w-none
               bg-black/95 text-white p-0
               grid place-items-center
               pt-[4svh] pb-[6svh]"
          >
            <DialogTitle className="sr-only">Gallery Image: {active?.alt}</DialogTitle>

            <AnimatePresence mode="wait">
              <motion.div
                key={active?.src}
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.6, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative w-[100vw] h-[calc(100svh-10svh)] sm:h-[calc(100dvh-10dvh)]"
              >
                {active?.src && (
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="100vw"
                    className="object-contain object-center rounded-lg"
                    priority
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Nav and Close buttons unchanged */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev() }}
              aria-label="Previous"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showNext() }}
              aria-label="Next"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
            >
              <ChevronRight size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(false) }}
              aria-label="Close"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full"
            >
              <X size={28} />
            </button>
          </DialogContent>
        </Dialog>


      </div>
    </section>
  )
}
