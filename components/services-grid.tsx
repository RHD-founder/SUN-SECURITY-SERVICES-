"use client"

import { services } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import SecurityButton from "@/components/ui/security-button"

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
    <section ref={root} className="py-20 bg-[#819918]/20">
      <div className="container px-6 mx-auto">
        <div className="flex items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-bebas)] font-bold tracking-wider text-[#171212]">
              Our Services
            </h2>
            <p className="text-[#556B2F] mt-4 text-lg font-[var(--font-montserrat)] leading-relaxed">
              Complete range of security solutions including core security services and allied support services across
              Northeast India.
            </p>
          </div>
          <SecurityButton
            href="/services"
            variant="outline"
            size="lg"
            showLogo={false}
            className="hidden md:inline-flex font-[var(--font-montserrat)] font-semibold min-w-[200px]"
          >
            View All Services
          </SecurityButton>
        </div>

        {/* Services Grid - 4 columns for better display of 15 services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-8xl mx-auto">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="svc group relative rounded-2xl overflow-hidden border border-[#556B2F]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-40">
                <Image src={svc.image || "/placeholder.svg"} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-[var(--font-roboto-slab)] font-bold text-[#171212] mb-2 line-clamp-2">
                  {svc.title}
                </h3>
                <p className="text-[#556B2F] line-clamp-3 font-[var(--font-inter)] leading-relaxed text-sm mb-3">
                  {svc.description}
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {svc.features?.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#556B2F]/10 text-[#556B2F] px-2 py-1 rounded-full font-[var(--font-poppins)] font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-[#171212[var(--font-montserrat)] font-semibold group-hover:underline">
                  Learn more →
                </div>
              </div>
              <div
                className="absolute inset-0 ring-0 group-hover:ring-2 ring-[#8B0000] transition rounded-2xl"
                aria-hidden
              />
            </Link>
          ))}
        </div>

        {/* Service Categories Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#8B0000]/10 rounded-full border border-[#8B0000]/20">
            <span className="font-[var(--font-montserrat)] font-semibold text-[#261616] text-lg">
              {services.length} Comprehensive Security Services Available
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
