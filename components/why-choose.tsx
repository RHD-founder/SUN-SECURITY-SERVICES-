"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { FaShield, FaUserShield, FaClock, FaAward } from "react-icons/fa6"

const items = [
  {
    icon: <FaUserShield />,
    title: "Ex-Servicemen Enterprise",
    text: "Led by experienced ex-servicemen with Strict Discipline and proven leadership.",
  },
  {
    icon: <FaShield />,
    title: "ISO 9001:2015 Certified",
    text: "Bureau Veritas certified with NABCB accreditation ensuring quality management systems.",
  },
  {
    icon: <FaClock />,
    title: "Two Decades of Excellence",
    text: "Almost 20 years of trusted security services across Northeast India.",
  },
  {
    icon: <FaAward />,
    title: "Industry Recognized",
    text: "CAPSI & APSA member with government approval and industry recognition.",
  },
]

export default function WhyChoose() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".why-card", { y: 16, opacity: 0 })
      // Animate to visible state
      gsap.to(".why-card", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={root} className="py-20 bg-[#EDE2A8]/20">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#0A192F] font-[var(--font-system-ui)]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed font-[var(--font-inter)]">
            We combine elite training, disciplined processes, and technology-backed operations to deliver uncompromising
            security solutions across Northeast India.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="why-card group rounded-2xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#FFD700] text-3xl mb-4">{it.icon}</div>
              <div className="text-xl font-[var(--font-inter)] font-medium text-[#0A192F] mb-3">{it.title}</div>
              <div className="text-gray-600 leading-relaxed font-[var(--font-inter)]">{it.text}</div>
              <div className="mt-6 h-1 w-12 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
