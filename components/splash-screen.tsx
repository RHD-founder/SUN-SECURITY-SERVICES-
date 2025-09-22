"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"

export default function SplashScreen({ enabled = true }: { enabled?: boolean }) {
  const [done, setDone] = useState(!enabled)

  useEffect(() => {
    if (!enabled) return
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        gsap.to(".splash-root", { opacity: 0, duration: 0.6, onComplete: () => setDone(true) })
      },
    })
    tl.fromTo(
      ".splash-logo",
      { y: 40, opacity: 0, letterSpacing: "0.2em" },
      { y: 0, opacity: 1, duration: 1.1, letterSpacing: "0.05em" }
    ).fromTo(
      ".splash-sub",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    ).fromTo(
      ".bar",
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1.2 }
    )

    // Audio removed for better performance
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
        <div className="bar mx-auto mt-6 h-0.5 w-40 bg-[#FFD700]/90 rounded-full" />
      </div>
    </div>
  )
}
