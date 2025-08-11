"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { usePathname } from "next/navigation"

export default function PageTransition() {
  const path = usePathname()
  useEffect(() => {
    const el = document.getElementById("page-transition-overlay")
    if (!el) return
    const tl = gsap.timeline()
    tl.fromTo(el, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.25, ease: "power2.in" })
      .to(el, { scaleX: 0, transformOrigin: "right", duration: 0.35, ease: "power2.out", delay: 0.05 })
  }, [path])
  return (
    <div
      id="page-transition-overlay"
      aria-hidden
      className="fixed inset-0 pointer-events-none bg-[#0A192F] z-40"
      style={{ transform: "scaleX(0)" }}
    />
  )
}
