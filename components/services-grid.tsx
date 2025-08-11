"use client"

import { services } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"

export default function ServicesGrid() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".svc", { y: 24, opacity: 0 })
      // Animate to visible state
      gsap.to(".svc", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.05,
        ease: "power2.out",
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={root} className="py-20 bg-[#F8FAFC]">
      <div className="container px-6 mx-auto">
        <div className="flex items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-roboto-slab)] font-bold tracking-wide text-[#0A192F]">
              Our Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg font-[var(--font-poppins)] leading-relaxed">
              Complete range of security solutions including core security services and allied support services across
              Northeast India.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex font-[var(--font-poppins)] font-semibold bg-transparent"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>

        {/* Services Grid - 4 columns for better display of 15 services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-8xl mx-auto">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="svc group relative rounded-2xl overflow-hidden border bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-40">
                <Image src={svc.image || "/placeholder.svg"} alt={svc.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-[var(--font-montserrat)] font-bold text-[#0A192F] mb-2 line-clamp-2">
                  {svc.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 font-[var(--font-poppins)] leading-relaxed text-sm mb-3">
                  {svc.description}
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {svc.features?.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#FFD700]/10 text-[#0A192F] px-2 py-1 rounded-full font-[var(--font-poppins)] font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-[#0A192F] font-[var(--font-poppins)] font-semibold group-hover:underline">
                  Learn more →
                </div>
              </div>
              <div
                className="absolute inset-0 ring-0 group-hover:ring-2 ring-[#FFD700] transition rounded-2xl"
                aria-hidden
              />
            </Link>
          ))}
        </div>

        {/* Service Categories Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#0A192F]/5 rounded-full">
            <span className="font-[var(--font-poppins)] font-semibold text-[#0A192F] text-lg">
              {services.length} Comprehensive Security Services Available
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
