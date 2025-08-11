"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const heroSlides = [
  {
    image: "/sun-security-formation-1.png",
    title: "Highest Level of Protection",
    subtitle:
      "Our officers are perfectly adapted to circumstances with military discipline and professional excellence ensuring maximum security coverage.",
    alt: "Large formation of SUN SECURITY SERVICES officers in ceremonial formation",
  },
  {
    image: "/sun-security-march-2.png",
    title: "Elite Corporate Security",
    subtitle:
      "Disciplined ex-servicemen personnel providing comprehensive security solutions with military precision and unwavering commitment to safety.",
    alt: "SUN SECURITY SERVICES team marching in professional formation",
  },
  {
    image: "/sun-security-march-3.png",
    title: "Professional Excellence",
    subtitle:
      "Two decades of trusted security services with trained professionals delivering superior protection across Northeast India.",
    alt: "Security personnel marching in formation in front of modern building",
  },
]

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  // Auto-advance carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Reset interval when manually changing slides
  const changeSlide = (index: number) => {
    setCurrentSlide(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
  }

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    changeSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Professional slide-in animations
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-button",
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3",
        )
        .fromTo(".hero-stats", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
    }, root)
    return () => ctx.revert()
  }, [currentSlide])

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/visitors", { cache: "no-store" })
        const data = await res.json()
        let base = data.count as number
        const key = "sun_vis_seen"
        if (!localStorage.getItem(key)) {
          base += Math.floor(Math.random() * 5) + 1
          localStorage.setItem(key, "1")
        }
        const obj = { n: 0 }
        gsap.to(obj, {
          n: base,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setCount(Math.floor(obj.n)),
        })
      } catch {
        setCount(1337)
      }
    }
    fetchCount()
  }, [])

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section ref={root} className="relative">
      <div className="relative h-[70vh] min-h-[500px] max-h-[800px] w-full overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A192F]/75" />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-lg" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-lg" />
        </button>

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="hero-title font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide mb-6">
              {currentSlideData.title}
            </h1>

            <p className="hero-subtitle text-white/90 text-base sm:text-lg md:text-xl font-[var(--font-poppins)] font-light leading-relaxed max-w-2xl mx-auto mb-8">
              {currentSlideData.subtitle}
            </p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="hero-button border-2 border-white text-white hover:bg-white hover:text-[#0A192F] bg-transparent font-[var(--font-poppins)] font-semibold text-base px-8 py-4 h-auto transition-all duration-300"
            >
              <Link href="/services">MORE DETAILS</Link>
            </Button>

            {/* Stats Section */}
            <div className="hero-stats mt-12 flex flex-col sm:flex-row justify-center gap-6 text-white/80">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
                <span className="font-[var(--font-poppins)] text-sm">
                  Live Visitors: <span className="font-bold text-[#FFD700]">{count.toLocaleString()}</span>
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                <span className="font-[var(--font-poppins)] text-sm">
                  <span className="font-bold text-[#FFD700]">24/7</span> Operations
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                <span className="font-[var(--font-poppins)] text-sm">
                  <span className="font-bold text-[#FFD700]">ISO 9001:2015</span> Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
