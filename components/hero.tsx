'use client'

import { useEffect, useRef, useState, Suspense } from "react"
import Image from "next/image"
import gsap from "gsap"
import SecurityButton from "@/components/ui/security-button"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// Optional: Keep the skeleton for first render only
const LazyImage = dynamic(() => import('./lazy-image'), {
  loading: () => <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-2xl" />,
  ssr: false
})

const heroSlides = [
  {
    image: "/IMG-20201029-WA0002.jpg",
    title: "Highest Level of Protection",
    subtitle: "Our officers are perfectly adapted to circumstances with your trusted shield and professional excellence ensuring maximum security coverage.",
    alt: "Large formation of SUN SECURITY SERVICES officers in ceremonial formation",
    features: ["Your Trusted Shield", "Professional Excellence", "Maximum Security Coverage"]
  },
  {
    image: "/DSC_7389.JPG",
    title: "Elite Corporate Security",
    subtitle: "Disciplined ex-servicemen personnel providing comprehensive security solutions with protection without pause and unwavering commitment to safety.",
    alt: "SUN SECURITY SERVICES team marching in professional formation",
    features: ["Ex-Servicemen Personnel", "Comprehensive Solutions"]
  },
  {
    image: "/DSC00973.JPG",
    title: "Professional Excellence",
    subtitle: "25⁺ Years of Experience trusted security services with trained professionals delivering superior protection across Northeast India.",
    alt: "Security personnel marching in formation in front of modern building",
    features: ["Two Decades Experience", "Trained Professionals", "Northeast Coverage"]
  },
  {
    image: "/IMG-20201127-WA0009.jpg",
    title: "Advanced Security Solutions",
    subtitle: "State-of-the-art security infrastructure combined with highly trained personnel ensuring comprehensive protection for your assets.",
    alt: "Modern security operations center with professional staff",
    features: ["Modern Infrastructure", "Highly Trained Staff", "Secure & Vigilant"]
  },
]

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [count, setCount] = useState<number>(0)

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState<number | null>(null)
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})
  const [loadedMap, setLoadedMap] = useState<{ [key: number]: boolean }>({})
  const [isImageTransitioning, setIsImageTransitioning] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Prefetch routes
  useEffect(() => {
    router.prefetch('/services')
    router.prefetch('/about')
    router.prefetch('/contact')
  }, [router])

  // Preload helper
  const preload = (idx: number) => {
    if (loadedMap[idx]) return
    const img = new window.Image()
    img.onload = () => setLoadedMap(prev => ({ ...prev, [idx]: true }))
    img.src = heroSlides[idx].image
  }

  // Preload upcoming slide
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroSlides.length
    preload(nextIndex)
  }, [currentSlide, loadedMap])

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      smoothChangeSlide((currentSlide + 1) % heroSlides.length)
    }, 8000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentSlide])

  const changeSlide = (index: number) => {
    smoothChangeSlide(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      smoothChangeSlide((index + 1) % heroSlides.length)
    }, 8000)
  }

  const nextSlide = () => smoothChangeSlide((currentSlide + 1) % heroSlides.length)
  const prevSlideFn = () => smoothChangeSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)

  // Initial entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo(".hero-content", { x: 30, opacity: 0, y: 20 }, { x: 0, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" })
        .fromTo(".hero-features span", { y: 25, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1 }, "-=0.8")
        .fromTo(".hero-button", { y: 25, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.7)" }, "-=0.6")
        .fromTo(".hero-stats > div", { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out", stagger: 0.08 }, "-=0.4")
    }, root)
    return () => ctx.revert()
  }, [])

  // Two-layer crossfade between images (no maroon flash)
  const doCrossfade = () => {
    // Ensure current is invisible before the fade-in, then crossfade both layers
    gsap.set(".hero-image-current", { opacity: 0 })
    const tl = gsap.timeline({
      onComplete: () => {
        setPrevSlide(null)
        setIsTransitioning(false)
        setIsImageTransitioning(false)
      }
    })
    tl.to(".hero-image-prev", { opacity: 0, duration: 0.5, ease: "power2.in" })
      .to(".hero-image-current", { opacity: 1, duration: 0.5, ease: "power2.out" }, "<")
  }

  const smoothChangeSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setIsImageTransitioning(true)

    // Prepare layers
    setPrevSlide(currentSlide)
    setCurrentSlide(index)

    // Start crossfade once the next image is loaded to avoid any blank frame
    const proceed = () => doCrossfade()
    if (loadedMap[index]) {
      proceed()
    } else {
      preload(index)
      // Poll briefly for load completion; keeps code simple without extra refs
      const poll = setInterval(() => {
        if (loadedMap[index]) {
          clearInterval(poll)
          proceed()
        }
      }, 50)
      // Safety timeout
      setTimeout(() => {
        clearInterval(poll)
        proceed()
      }, 800)
    }

    // Animate dynamic text content out
    gsap.to(".hero-title", { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" })
    gsap.to(".hero-subtitle", { opacity: 0, y: -20, duration: 0.3, ease: "power2.in", delay: 0.1 })
    gsap.to(".hero-features span", { opacity: 0, y: -15, duration: 0.3, ease: "power2.in", delay: 0.2, stagger: 0.05 })

    // Then animate new text in
    setTimeout(() => {
      gsap.fromTo(".hero-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      gsap.fromTo(".hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      gsap.fromTo(".hero-features span", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 })
    }, 400)
  }

  // Visitor counter
  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/visitors", {
          cache: "no-store",
          next: { revalidate: 60 }
        })
        const data = await res.json()
        let base = data.count as number
        const key = "sun_vis_seen"
        if (!localStorage.getItem(key)) {
          base += Math.floor(Math.random() * 5) + 1
          localStorage.setItem(key, "1")
        }
        if (!base || isNaN(base)) base = 1337
        setCount(0)
        const obj = { n: 0 }
        gsap.to(obj, {
          n: base,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => setCount(Math.floor(obj.n)),
          onComplete: () => setCount(base)
        })
      } catch {
        const fallbackCount = 1337
        setCount(0)
        const obj = { n: 0 }
        gsap.to(obj, {
          n: fallbackCount,
          duration: 2.5,
          ease: "power3.out",
          onUpdate: () => setCount(Math.floor(obj.n)),
          onComplete: () => setCount(fallbackCount)
        })
      }
    }
    const timer = setTimeout(() => fetchCount(), 200)
    return () => clearTimeout(timer)
  }, [])

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section ref={root} className="relative py-20 hero-section">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">

          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative hero-image-container">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">

                {/* Previous layer (fading out) */}
                {prevSlide !== null && (
                  <Image
                    key={`prev-${prevSlide}`}
                    src={imageError[prevSlide] ? "/placeholder.svg" : heroSlides[prevSlide].image}
                    alt={heroSlides[prevSlide].alt}
                    fill
                    priority={prevSlide === 0}
                    className="hero-image-prev object-cover object-center absolute inset-0"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    onError={() => setImageError(prev => ({ ...prev, [prevSlide]: true }))}
                    fetchPriority={prevSlide === 0 ? "high" : "auto"}
                  />
                )}

                {/* Current layer (fading in) */}
                <Image
                  key={`cur-${currentSlide}`}
                  src={imageError[currentSlide] ? "/placeholder.svg" : currentSlideData.image}
                  alt={currentSlideData.alt}
                  fill
                  priority={currentSlide === 0}
                  className="hero-image-current object-cover object-center absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  onError={() => setImageError(prev => ({ ...prev, [currentSlide]: true }))}
                  fetchPriority={currentSlide === 0 ? "high" : "auto"}
                />

                {/* Removed maroon-tinted transition overlay and spinner to prevent color flash */}
              </div>

              {/* Navigation */}
              <button
                onClick={prevSlideFn}
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

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => smoothChangeSlide(index)}
                    className={`w-3 h-3 rounded-full hero-slide-indicator ${index === currentSlide ? "active" : "inactive"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="hero-content space-y-8">
              <h1 className="hero-title text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-wider">
                {currentSlideData.title}
              </h1>

              <p className="hero-subtitle text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto lg:mx-0">
                {currentSlideData.subtitle}
              </p>

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
