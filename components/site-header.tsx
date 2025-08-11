"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBars, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BRAND } from "@/lib/content"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 h-10 bg-[#0A192F] text-white text-xs">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <FaPhone aria-hidden className="text-[#FFD700]" />
            {BRAND.phoneNumbers[0]} | {BRAND.phoneNumbers[1]}
          </span>
          <span className="hidden lg:inline-flex items-center gap-2">
            <FaEnvelope aria-hidden className="text-[#FFD700]" />
            {BRAND.email}
          </span>
          <span className="hidden xl:inline-flex items-center gap-2">
            <FaLocationDot aria-hidden className="text-[#FFD700]" />
            {BRAND.address}
          </span>
        </div>
        {/* Integrated Get Estimate Button - Right Side */}
        <Link
          href="/contact"
          className="bg-[#FFD700] hover:bg-[#ffd700]/90 text-[#0A192F] font-semibold px-6 py-2.5 transition-colors duration-200 h-full flex items-center text-sm tracking-wide"
        >
          Get Estimate
        </Link>
      </div>
      <div
        className={`flex items-center h-20 px-4 lg:px-8 transition-colors ${scrolled ? "bg-white/95 backdrop-blur border-b shadow-sm" : "bg-white"}`}
      >
        <Link href="/" className="flex items-center gap-4" aria-label="SUN SECURITY SERVICES Home">
          <Image
            src="/sun-security-logo.png"
            alt="SUN SECURITY SERVICES Logo"
            width={48}
            height={48}
            className="rounded"
          />
          <div className="flex flex-col">
            <span className="font-[var(--font-montserrat)] text-xl lg:text-2xl font-bold tracking-wide text-[#0A192F] leading-tight">
              SUN SECURITY SERVICES™
            </span>
            <span className="text-xs text-gray-600 font-medium tracking-wide">
              ISO 9001:2015 Certified Ex-Servicemen Enterprise
            </span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-bold font-[var(--font-poppins)] transition-all duration-300 py-2 px-1 group ${
                pathname === item.href ? "text-[#0A192F]" : "text-gray-600 hover:text-[#0A192F]"
              }`}
            >
              {item.label}
              {/* Hover underline effect */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#FFD700] transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
              {/* Hover background effect */}
              <span className="absolute inset-0 bg-[#FFD700]/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10" />
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#0A192F] hover:bg-[#1a2332] font-[var(--font-poppins)] font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open Menu" className="p-2 rounded-md border">
              <FaBars />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-[var(--font-montserrat)] text-2xl font-bold text-[#0A192F]">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-4 py-3 font-[var(--font-poppins)] font-bold transition-all duration-300 ${
                      pathname === item.href ? "bg-[#0A192F] text-white" : "hover:bg-[#FFD700]/10 hover:text-[#0A192F]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full bg-[#FFD700] text-[#0A192F] hover:bg-[#ffd700]/90 font-[var(--font-poppins)] font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link href="/contact">Get Estimate</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
