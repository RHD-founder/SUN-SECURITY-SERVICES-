"use client"

import { clients } from "@/lib/content"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function ClientsMarquee() {
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const width = el.scrollWidth / 2
    const t = gsap.to(el, {
      x: -width,
      ease: "none",
      duration: 20,
      repeat: -1,
    })
    return () => {
      t.kill()
    }
  }, [])

  const items = [...clients, ...clients]
  return (
    <section className="py-20 bg-[#0A192F] text-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-roboto-slab)] font-bold tracking-wide">
            Trusted by 100+ Clients
          </h2>
          <p className="text-white/80 mt-4 text-lg font-[var(--font-poppins)]">
            Partners across finance, retail, technology, and public sector throughout Northeast India.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div ref={track} className="flex gap-12 will-change-transform">
            {items.map((c, i) => (
              <div
                key={i}
                className="shrink-0 h-20 w-[200px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-4"
              >
                <Image
                  src={c.logo || "/placeholder.svg"}
                  alt={`${c.name} logo`}
                  width={180}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent" />
        </div>
      </div>
    </section>
  )
}
