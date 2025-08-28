"use client"

import { useEffect, useRef, useState, Suspense } from "react"
import Image from "next/image"
import gsap from "gsap"
import SecurityButton from "@/components/ui/security-button"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// Lazy load heavy components
const LazyImage = dynamic(() => import('./lazy-image'), {
  loading: () => <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-2xl" />,
  ssr: false
})

const heroSlides = [
  {
    image: "/4.jpeg",
    title: "Highest Level of Protection",
    subtitle: "Our officers are perfectly adapted to circumstances with Strict Discipline and professional excellence ensuring maximum security coverage.",
    alt: "Large formation of SUN SECURITY SERVICES officers in ceremonial formation",
    features: ["Strict Discipline", "Professional Excellence", "Maximum Security Coverage"]
  },
  {
    image: "/5.jpeg",
    title: "Elite Corporate Security",
    subtitle: "Disciplined ex-servicemen personnel providing comprehensive security solutions with military precision and unwavering commitment to safety.",
    alt: "SUN SECURITY SERVICES team marching in professional formation",
    features: ["Ex-Servicemen Personnel", "Military Precision", "Comprehensive Solutions"]
  },
  {
    image: "/3.jpeg",
    title: "Professional Excellence",
    subtitle: "Two decades of trusted security services with trained professionals delivering superior protection across Northeast India.",
    alt: "Security personnel marching in formation in front of modern building",
    features: ["Two Decades Experience", "Trained Professionals", "Northeast Coverage"]
  },
  {
    image: "/23.jpeg",
    title: "Advanced Security Solutions",
    subtitle: "State-of-the-art security infrastructure combined with highly trained personnel ensuring comprehensive protection for your assets.",
    alt: "Modern security operations center with professional staff",
    features: ["Modern Infrastructure", "Highly Trained Staff", "Asset Protection"]
  },
]

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [count, setCount] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})
  const [nextImageLoaded, setNextImageLoaded] = useState<{ [key: number]: boolean }>({})
  const [isImageTransitioning, setIsImageTransitioning] = useState(false)
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
      smoothChangeSlide((currentSlide + 1) % heroSlides.length)
    }, 8000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentSlide])

  // Reset interval when manually changing slides
  const changeSlide = (index: number) => {
    smoothChangeSlide(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      smoothChangeSlide((currentSlide + 1) % heroSlides.length)
    }, 8000)
  }

  const nextSlide = () => {
    smoothChangeSlide((currentSlide + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    smoothChangeSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)
  }

  // Initial page load animations only (not on slide change)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      // Smooth content entrance (only on initial load)
      tl.fromTo(".hero-content",
        { x: 30, opacity: 0, y: 20 },
        { x: 0, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      )
        // Staggered features animation (only on initial load)
        .fromTo(".hero-features span",
          { y: 25, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1 },
          "-=0.8"
        )
        // Smooth button entrance (only on initial load)
        .fromTo(".hero-button",
          { y: 25, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.7)" },
          "-=0.6"
        )
        // Stats animation (only on initial load)
        .fromTo(".hero-stats > div",
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out", stagger: 0.08 },
          "-=0.4"
        )
    }, root)

    return () => ctx.revert()
  }, []) // Empty dependency array - only runs once on mount

  // Smooth slide transition effect
  const [isTransitioning, setIsTransitioning] = useState(false)

  const smoothChangeSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setIsImageTransitioning(true)

    // Smooth image crossfade only (frame stays static)
    gsap.to(".hero-image", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrentSlide(index)

        // Fade in new image
        gsap.to(".hero-image", {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsImageTransitioning(false)
        })
      }
    })

    // Only animate the dynamic content (title, subtitle, features)
    // Button and stats remain static
    gsap.to(".hero-title", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in"
    })

    gsap.to(".hero-subtitle", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.1
    })

    gsap.to(".hero-features span", {
      opacity: 0,
      y: -15,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.2,
      stagger: 0.05
    })

    // After dynamic content fades out, update slide and fade in new content
    setTimeout(() => {
      // Fade in only the dynamic content elements
      gsap.fromTo(".hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )

      gsap.fromTo(".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )

      gsap.fromTo(".hero-features span",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
      )

      setIsTransitioning(false)
    }, 400) // Wait for fade out to complete
  }

  // Professional visitor counter with Next.js optimizations
  useEffect(() => {
    async function fetchCount() {
      try {
        console.log("🔄 Starting visitor count fetch...")
        const res = await fetch("/api/visitors", {
          cache: "no-store",
          next: { revalidate: 60 } // Next.js 13+ revalidation
        })
        const data = await res.json()
        let base = data.count as number
        console.log("📊 API returned count:", base)

        const key = "sun_vis_seen"
        if (!localStorage.getItem(key)) {
          base += Math.floor(Math.random() * 5) + 1
          localStorage.setItem(key, "1")
          console.log("🎲 Added random increment, new base:", base)
        }

        // Ensure we have a valid number
        if (!base || isNaN(base)) {
          base = 1337
          console.log("⚠️ Invalid count, using fallback:", base)
        }

        console.log("🚀 Starting count animation from 0 to:", base)

        // Always start from 0 for fresh animation
        setCount(0)

        // Start counting from 0 to the target number
        const obj = { n: 0 }
        gsap.to(obj, {
          n: base,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => {
            const currentValue = Math.floor(obj.n)
            setCount(currentValue)
            console.log("📈 Counting:", currentValue)
          },
          onComplete: () => {
            setCount(base) // Ensure final number is exact
            console.log("✅ Count animation completed:", base)
          }
        })
      } catch (error) {
        console.log("❌ Visitor count fetch failed, using fallback:", error)
        // Fallback counting animation
        const fallbackCount = 1337
        console.log("🔄 Starting fallback count animation to:", fallbackCount)

        // Always start from 0 for fresh animation
        setCount(0)

        const obj = { n: 0 }
        gsap.to(obj, {
          n: fallbackCount,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => {
            const currentValue = Math.floor(obj.n)
            setCount(currentValue)
            console.log("📈 Fallback counting:", currentValue)
          },
          onComplete: () => {
            setCount(fallbackCount)
            console.log("✅ Fallback count animation completed:", fallbackCount)
          }
        })
      }
    }

    // Add a small delay to ensure GSAP is ready and DOM is mounted
    const timer = setTimeout(() => {
      console.log("⏰ Timer fired, calling fetchCount...")
      fetchCount()
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section ref={root} className="relative py-20 hero-section">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">

          {/* Left Side - Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative hero-image-container">
              {/* Main Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Suspense fallback={
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-2xl" />
                }>
                  <LazyImage
                    src={imageError[currentSlide] ? "/placeholder.svg" : currentSlideData.image}
                    alt={currentSlideData.alt}
                    fill
                    priority={currentSlide === 0}
                    className="hero-image object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                </Suspense>

                {/* Image Overlay */}
                <div className="absolute inset-0 hero-image-overlay" />

                {/* Loading Indicator for Image Transitions */}
                {isImageTransitioning && (
                  <div className="absolute inset-0 bg-[#8B0000]/20 flex items-center justify-center">
                    <div className="w-8 h-8 hero-loading-spinner rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 hero-navigation-arrow backdrop-blur-md flex items-center justify-center rounded-full group shadow-lg"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-lg group-hover:scale-110 transition-transform duration-300" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 hero-navigation-arrow backdrop-blur-md flex items-center justify-center rounded-full group shadow-lg"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-lg group-hover:scale-110 transition-transform duration-300" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => smoothChangeSlide(index)}
                    className={`w-3 h-3 rounded-full hero-slide-indicator ${index === currentSlide ? "active" : "inactive"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="hero-content space-y-8">
              {/* Main Title */}
              <h1 className="hero-title text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-wider">
                {currentSlideData.title}
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto lg:mx-0">
                {currentSlideData.subtitle}
              </p>

              {/* Features List */}
              <div className="hero-features flex flex-wrap gap-3 justify-center lg:justify-start">
                {currentSlideData.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-[var(--font-inter)] font-medium backdrop-blur-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hero-button">
                <SecurityButton
                  href="/services"
                  variant="primary"
                  size="lg"
                  showLogo={false}
                  className="font-[var(--font-montserrat)] font-bold tracking-wider min-w-[220px]"
                >
                  EXPLORE SERVICES
                </SecurityButton>
              </div>

              {/* Stats Section */}
              <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-[var(--font-roboto-slab)] font-bold text-[#8b0000] mb-2">
                    {count.toLocaleString()}
                  </div>
                  <div className="text-sm text-[#2f2f2f] font-[var(--font-inter)]">
                    Live Visitors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-[var(--font-roboto-slab)] font-bold text-[#556B2F] mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-[#2f2f2f] font-[var(--font-inter)]">
                    Operations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-[var(--font-roboto-slab)] font-bold text-[#8b0000] mb-2">
                    ISO 9001:2015
                  </div>
                  <div className="text-sm text-[#2f2f2f] font-[var(--font-inter)]">
                    Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
