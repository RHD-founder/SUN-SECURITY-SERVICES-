"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
  {
    src: "/sun-security-team-1.png",
    alt: "SUN SECURITY SERVICES team marching in formation in front of modern building",
  },
  {
    src: "/sun-security-team-2.png",
    alt: "Professional security personnel in ceremonial formation",
  },
  {
    src: "/sun-security-team-3.png",
    alt: "Large formation of SUN SECURITY SERVICES officers during ceremony",
  },
  {
    src: "/sun-security-team-4.png",
    alt: "Security guards marching in disciplined formation",
  },
  {
    src: "/sun-security-team-5.jpeg",
    alt: "Security personnel in formation under covered area",
  },

  // New parade and formation images
  {
    src: "/sun-security-parade-formation.png",
    alt: "SUN SECURITY SERVICES personnel in ceremonial parade formation with Indian flag",
  },
  {
    src: "/sun-security-team-group-photo.png",
    alt: "Professional group photograph of SUN SECURITY SERVICES team in indoor setting",
  },
  {
    src: "/sun-security-ceremonial-formation.png",
    alt: "Security personnel in disciplined formation during ceremonial parade",
  },
  {
    src: "/sun-security-building-march.png",
    alt: "Security team marching in perfect formation in front of institutional building",
  },
  {
    src: "/sun-security-courtyard-formation.png",
    alt: "Professional security personnel assembled in courtyard formation",
  },
  {
    src: "/sun-security-disciplined-march.png",
    alt: "Security personnel demonstrating military discipline in marching formation",
  },
  {
    src: "/sun-security-memorial-ceremony.png",
    alt: "SUN SECURITY SERVICES participating in memorial ceremony with officials",
  },
  {
    src: "/sun-security-road-march.png",
    alt: "Security personnel marching in formation along institutional pathway",
  },

  // Operations and facilities
  {
    src: "/sun-security-parade-formation.png",
    alt: "Professional security monitoring and surveillance operations",
  },
  {
    src: "/sun-security-parade-formation.png",
    alt: "Security training and development programs",
  },
  {
    src: "/sun-security-parade-formation.png",
    alt: "Corporate security deployment and operations",
  },
  {
    src: "/sun-security-memorial-ceremony.png",
    alt: "Event security management and crowd control",
  },
  {
    src: "/sun-security-parade-formation.png",
    alt: "Residential security patrol and monitoring",
  },
]

export default function GalleryGrid() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(images[0])

  return (
    <section className="py-16 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-[var(--font-bebas)] tracking-wide text-[#0A192F]">Gallery</h2>
        <p className="text-gray-600 mt-1">Snapshots of our professional team, operations, and training programs.</p>

        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, index) => (
            <button
              key={index}
              className="mb-4 block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] hover:shadow-lg transition-all duration-300"
              onClick={() => {
                setActive(img)
                setOpen(true)
              }}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={640}
                height={480}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </button>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl">
            <Image
              src={active.src || "/placeholder.svg"}
              alt={active.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
