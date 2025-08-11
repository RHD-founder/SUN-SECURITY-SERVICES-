"use client"

import { awards } from "@/lib/content"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { FaCertificate, FaUsers, FaFileContract } from "react-icons/fa6"

const categoryIcons = {
  certification: <FaCertificate className="text-[#FFD700]" />,
  membership: <FaUsers className="text-[#FFD700]" />,
  license: <FaFileContract className="text-[#FFD700]" />,
}

export default function Awards() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".award-card", { y: 20, opacity: 0 })
      // Animate to visible state
      gsap.to(".award-card", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-roboto-slab)] font-bold tracking-wide text-[#0A192F]">
            Certifications & Professional Memberships
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg font-[var(--font-poppins)] leading-relaxed">
            Our commitment to excellence is validated by prestigious certifications and active participation in leading
            industry associations.
          </p>
        </div>

        {/* Four Card Layout - 2x2 Grid on larger screens */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {awards.map((award, i) => (
            <div key={i} className="award-card group relative">
              <div className="rounded-2xl border bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full min-h-[420px] flex flex-col">
                {/* Certificate Image */}
                <div className="relative h-28 mb-6 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={`${award.title} certificate`}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    {categoryIcons[award.category as keyof typeof categoryIcons]}
                    <span className="text-sm font-bold px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#0A192F] font-[var(--font-poppins)]">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="font-[var(--font-montserrat)] font-bold text-[#0A192F] text-xl leading-tight">
                    {award.title}
                  </h3>

                  {award.organization && (
                    <p className="font-[var(--font-poppins)] font-semibold text-gray-700 text-base">
                      {award.organization}
                    </p>
                  )}

                  {award.accreditation && (
                    <p className="text-sm text-[#FFD700] font-[var(--font-poppins)] font-semibold">
                      {award.accreditation}
                    </p>
                  )}

                  <p className="text-gray-600 font-[var(--font-poppins)] leading-relaxed flex-1 text-sm">
                    {award.description}
                  </p>

                  <Link
                    href={award.proof}
                    className="inline-flex items-center text-sm text-[#0A192F] font-[var(--font-poppins)] font-semibold hover:underline mt-auto"
                  >
                    View Certificate →
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-[#FFD700] rounded-2xl transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#FFD700]/10 rounded-full">
            <FaCertificate className="text-[#FFD700] text-2xl" />
            <span className="font-[var(--font-poppins)] font-semibold text-[#0A192F] text-lg">
              Verified & Accredited Security Service Provider
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
