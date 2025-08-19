"use client"

import { testimonials } from "@/lib/content"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FaStar } from "react-icons/fa6"
import gsap from "gsap"

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".card", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    }, root)
    return () => ctx.revert()
  }, [index])

  const t = testimonials[index]

  return (
    <section ref={root} className="py-16 bg-[#ebf3d5]">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-[var(--font-bebas)] tracking-wide text-[#0A192F]">Testimonials</h2>
        <div className="mt-8 max-w-3xl">
          <div className="card rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image src={t.image || "/placeholder.svg"} alt={`${t.name} avatar`} width={56} height={56} className="rounded-full" />
              <div>
                <div className="font-semibold text-[#0A192F]">{t.name}</div>
                <div className="text-xs text-gray-600">{t.role}</div>
              </div>
            </div>
            <div className="mt-4 text-gray-700">{t.text}</div>
            <div className="mt-3 flex">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} className="text-[#FFD700]" aria-hidden />
              ))}
              <span className="sr-only">{`${t.rating} stars`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
