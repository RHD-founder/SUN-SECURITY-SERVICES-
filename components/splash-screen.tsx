"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"

export default function SplashScreen({ enabled = true }: { enabled?: boolean }) {
  const [done, setDone] = useState(!enabled)

  useEffect(() => {
    if (!enabled) return

    const ctx = gsap.context(() => {
      // Ensure images are visible from the start
      gsap.set(".splash-img", { autoAlpha: 1 })

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.1 },
      })

      tl.fromTo(
        ".splash-logo",
        { y: 40, opacity: 0, letterSpacing: "0.2em" },
        { y: 0, opacity: 1, duration: 1.6, letterSpacing: "0.05em" }
      )
        .fromTo(
          ".splash-sub",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          "-=0.6"
        )
        // Keep images visible; animate the container only
        .fromTo(
          ".splash-badges",
          { y: 8 },
          { y: 0, duration: 0.9 },
          "-=0.4"
        )
        .fromTo(
          ".bar",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 1.6 }
        )
        .to({}, { duration: 0.6 }) // brief hold
        // Fade the entire splash out
        .to(".splash-root", { autoAlpha: 0, duration: 0.9 })
        .call(() => setDone(true))
    })

    return () => ctx.revert()
  }, [enabled])

  if (done) return null

  return (
    <div
      className="splash-root fixed inset-0 z-[9999] flex items-center justify-center bg-[#8B0000]"
      role="dialog"
      aria-label="Loading"
    >
      <div className="text-center text-white px-6">
        <div className="splash-logo text-4xl sm:text-6xl font-[var(--font-bebas)] tracking-[0.05em]">
          SUN SECURITY SERVICES™
        </div>
        <div className="splash-sub mt-3 text-sm sm:text-base text-[#FFD700]/90">
          Where Vigilance meets commitment.
        </div>

        {/* Badges: column on mobile, row on larger screens */}
        <div className="splash-badges mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <img
            src="/sun-security-logo.png"
            alt="Sun Security logo"
            className="splash-img h-14 sm:h-16 w-auto object-contain shrink-0"
            loading="eager"
          />
          <img
            src="/iso-9001-bureau-veritas-official.png"
            alt="ISO 9001 Bureau Veritas certification"
            className="splash-img h-14 sm:h-16 w-auto object-contain shrink-0"
            loading="eager"
          />
        </div>

        <div className="bar mx-auto mt-6 h-0.5 w-40 bg-[#FFD700]/90 rounded-full" />
      </div>
    </div>
  )
}
