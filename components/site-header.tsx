"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBars, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import SecurityButton from "@/components/ui/security-button"
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
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 h-10 bg-[#8B0000] text-[#F5F5DC] text-xs">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <FaPhone aria-hidden className="text-[#F5F5DC]" />
            {BRAND.phoneNumbers[0]} | {BRAND.phoneNumbers[1]}
          </span>
          <span className="hidden lg:inline-flex items-center gap-2">
            <FaEnvelope aria-hidden className="text-[#F5F5DC]" />
            {BRAND.email}
          </span>
          <span className="hidden xl:inline-flex items-center gap-2">
            <FaLocationDot aria-hidden className="text-[#F5F5DC]" />
            {BRAND.address}
          </span>
        </div>
        {/* Integrated Get Estimate Button - Right Side */}
        <Link
          href="/contact"
          className="bg-[#556B2F] hover:bg-[#6B8E23] text-[#F5F5DC] font-semibold px-6 py-2.5 transition-colors duration-200 h-full flex items-center text-sm tracking-wide"
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
            <span className="font-[var(--font-bebas)] text-xl lg:text-2xl font-bold tracking-wider text-[#8B0000] leading-tight">
              SUN SECURITY SERVICES™
            </span>
            <span className="text-xs font-system-ui font-medium tracking-wide text-[#556B2F]">
              ISO 9001:2015 Certified Ex-Servicemen Enterprise
            </span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-base font-bold font-system-ui tracking-wide transition-all duration-300 py-3 px-4 group ${pathname === item.href ? "text-[#8B0000]" : "text-[#556B2F] hover:text-[#8B0000]"
                }`}
            >
              {item.label}
              {/* Hover underline effect */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#8B0000] transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
              {/* Hover background effect */}
              <span className="absolute inset-0 bg-[#8B0000]/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10" />
            </Link>
          ))}
          <SecurityButton
            href="/contact"
            variant="primary"
            size="md"
            showLogo={false}
            className="font-system-ui font-bold"
          >
            Contact Us
          </SecurityButton>
        </nav>
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open Menu" className="p-2 rounded-md border">
              <FaBars />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-system-ui text-2xl font-bold text-[#8B0000]">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-4 py-3 font-system-ui font-bold transition-all duration-300 ${pathname === item.href ? "bg-[#8B0000] text-[#F5F5DC]" : "hover:bg-[#556B2F]/10 hover:text-[#8B0000]"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <SecurityButton
                  href="/contact"
                  variant="secondary"
                  size="md"
                  showLogo={false}
                  className="w-full font-system-ui font-bold"
                >
                  Get Estimate
                </SecurityButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
