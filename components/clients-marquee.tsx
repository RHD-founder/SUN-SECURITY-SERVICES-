"use client"

import { clients } from "@/lib/content"
import Link from "next/link"

export default function ClientsMarquee() {
  const items = [...clients, ...clients] // Duplicate for seamless infinite loop

  return (
    <section className="py-20 bg-[#381016] text-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-roboto-slab)] font-normal tracking-wide">
            Trusted by 30+ Clients
          </h2>
          <p className="text-white/80 mt-4 text-lg font-[var(--font-poppins)]">
            Partners across finance, retail, technology, and public sector throughout Northeast India.
          </p>
          <div className="mt-8">
            <Link
              href="/clients"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 border border-white/20"
            >
              View All Client Logos →
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-smooth min-w-max">
            {items.map((c, i) => (
              <div
                key={i}
                className="shrink-0 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 mx-4"
              >
                <h3 className="text-white client-name text-sm">
                  {c.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#381016] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#381016] to-transparent" />
        </div>
      </div>
    </section>
  )
}
