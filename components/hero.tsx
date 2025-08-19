"use client"

import { useEffect, useRef, useState, Suspense } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import SecurityButton from "@/components/ui/security-button"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// Lazy load heavy components
const LazyImage = dynamic(() => import('./lazy-image'), {
  loading: () => <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />,
  ssr: false
})

const heroSlides = [
  {
    image: "/4.jpeg",
    title: "Highest Level of Protection",
    subtitle: "Our officers are perfectly adapted to circumstances with military discipline and professional excellence ensuring maximum security coverage.",
    alt: "Large formation of SUN SECURITY SERVICES officers in ceremonial formation",
  },
  {
    image: "/5.jpeg",
    title: "Elite Corporate Security",
    subtitle: "Disciplined ex-servicemen personnel providing comprehensive security solutions with military precision and unwavering commitment to safety.",
    alt: "SUN SECURITY SERVICES team marching in professional formation",
  },
  {
    image: "/3.jpeg",
    title: "Professional Excellence",
    subtitle: "Two decades of trusted security services with trained professionals delivering superior protection across Northeast India.",
    alt: "Security personnel marching in formation in front of modern building",
  },
  {
    image: "/23.jpeg",
    title: "Advanced Security Solutions",
    subtitle: "State-of-the-art security infrastructure combined with highly trained personnel ensuring comprehensive protection for your assets.",
    alt: "Modern security operations center with professional staff",
  },
]

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [count, setCount] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})
  const [nextImageLoaded, setNextImageLoaded] = useState<{ [key: number]: boolean }>({})
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Next.js App Router: Prefetch next page for instant navigation
  useEffect(() => {
    router.prefetch('/services')
    router.prefetch('/about')
    router.prefetch('/contact')
  }, [router])

  // Professional image preloading with Next.js
  useEffect(() => {
    const preloadNextImage = (currentIndex: number) => {
      const nextIndex = (currentIndex + 1) % heroSlides.length
      const nextSlide = heroSlides[nextIndex]

      if (nextSlide && !nextImageLoaded[nextIndex]) {
        const img = new window.Image()
        img.onload = () => {
          setNextImageLoaded(prev => ({ ...prev, [nextIndex]: true }))
        }
        img.src = nextSlide.image
      }
    }

    preloadNextImage(currentSlide)
  }, [currentSlide, nextImageLoaded])

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

  // Professional GSAP animations with Next.js optimizations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(".hero-title",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8"
        )
        .fromTo(".hero-button",
          { y: 20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .fromTo(".hero-stats",
          { y: 15, opacity: 0, stagger: 0.1 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
    }, root)

    return () => ctx.revert()
  }, [currentSlide])

  // Professional visitor counter with Next.js optimizations
  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/visitors", {
          cache: "no-store",
          next: { revalidate: 60 } // Next.js 13+ revalidation
        })
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
          duration: 2.5,
          ease: "power3.out",
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
        {/* Professional Background Images with Next.js optimizations */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            >
              <Suspense fallback={
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
              }>
                <LazyImage
                  src={imageError[index] ? "/placeholder.svg" : slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  quality={90}
                />
              </Suspense>
            </div>
          ))}
        </div>

        {/* Professional Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* Professional Navigation Arrows with Client's Theme */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 border-2 border-[#F5F5DC]/40 text-[#F5F5DC] hover:bg-[#8B0000]/20 hover:border-[#F5F5DC]/60 transition-all duration-300 flex items-center justify-center backdrop-blur-sm rounded-full group"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 border-2 border-[#F5F5DC]/40 text-[#F5F5DC] hover:bg-[#8B0000]/20 hover:border-[#F5F5DC]/60 transition-all duration-300 flex items-center justify-center backdrop-blur-sm rounded-full group"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Enhanced Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-5xl">
            <h1 className="hero-title font-[var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wider mb-8 drop-shadow-2xl">
              {currentSlideData.title}
            </h1>

            <p className="hero-subtitle text-white/95 text-lg sm:text-xl md:text-2xl font-[var(--font-montserrat)] font-light leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-lg">
              {currentSlideData.subtitle}
            </p>

            <SecurityButton
              href="/services"
              variant="primary"
              size="lg"
              showLogo={false}
              className="font-[var(--font-montserrat)] font-bold tracking-wider min-w-[220px]"
            >
              MORE DETAILS
            </SecurityButton>

            {/* Enhanced Stats Section with Different Fonts */}
            <div className="hero-stats mt-16 flex flex-col sm:flex-row justify-center gap-8 text-white/90">
              <div className="flex items-center justify-center gap-3 group">
                <div className="w-3 h-3 bg-[#F5F5DC] rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-[var(--font-inter)] text-base">
                  Live Visitors: <span className="font-[var(--font-roboto-slab)] font-bold text-[#F5F5DC] text-lg">{count.toLocaleString()}</span>
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 group">
                <div className="w-3 h-3 bg-[#556B2F] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-[var(--font-inter)] text-base">
                  <span className="font-[var(--font-roboto-slab)] font-bold text-[#556B2F] text-lg">24/7</span> Operations
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 group">
                <div className="w-3 h-3 bg-[#8B0000] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-[var(--font-inter)] text-base">
                  <span className="font-[var(--font-roboto-slab)] font-bold text-[#8B0000] text-lg">ISO 9001:2015</span> Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Slide Indicators with Client's Theme */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-[#F5F5DC] scale-150 shadow-lg"
                : "bg-[#F5F5DC]/40 hover:bg-[#F5F5DC]/70 hover:scale-125"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
