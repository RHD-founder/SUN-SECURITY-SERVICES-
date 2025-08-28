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
  { href: "/clients", label: "Clients" },
  { href: "/gallery", label: "Gallery" },
  { href: "/certificates", label: "Certificates" },
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
          <span className="inline-flex items-center gap-2 nav-system-font">
            <FaPhone aria-hidden className="text-[#F5F5DC]" />
            {BRAND.phoneNumbers[0]} | {BRAND.phoneNumbers[1]}
          </span>
          <span className="hidden lg:inline-flex items-center gap-2 nav-system-font">
            <FaEnvelope aria-hidden className="text-[#F5F5DC]" />
            {BRAND.email}
          </span>
          <span className="hidden xl:inline-flex items-center gap-2 nav-system-font">
            <FaLocationDot aria-hidden className="text-[#F5F5DC]" />
            {BRAND.address}
          </span>
        </div>
        {/* Integrated Get Estimate Button - Right Side */}
        <Link
          href="/contact"
          className="bg-[#EDE2A8]  text-[#141412] font-semibold px-6 py-2.5 transition-colors duration-200 h-full flex items-center text-sm tracking-wide nav-system-font"
        >
          Get Estimate
        </Link>
      </div>
      <div
        className={`flex items-center h-20 px-4 lg:px-8 transition-colors ${scrolled ? "bg-white/95 backdrop-blur border-b shadow-sm" : "bg-white"}`}
      >
        <Link href="/" className="flex items-center gap-3 lg:gap-4" aria-label="SUN SECURITY SERVICES Home">
          <Image
            src="/sun-security-logo.png"
            alt="SUN SECURITY SERVICES Logo"
            width={40}
            height={40}
            className="rounded lg:w-12 lg:h-12"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-[var(--font-bebas)] text-lg lg:text-xl xl:text-2xl font-medium tracking-wider text-[#8B0000] leading-tight truncate">
              SUN SECURITY SERVICES™
            </span>
            <span className="text-xs lg:text-sm font-[var(--font-inter)] font-medium tracking-wide text-[#556B2F] truncate">
              ISO 9001:2015 Certified Ex-Servicemen Enterprise
            </span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-base font-medium tracking-wide transition-all duration-300 py-3 px-4 group nav-system-font ${pathname === item.href ? "text-[#8B0000]" : "text-[#556B2F] hover:text-[#8B0000]"
                }`}
            >
              {item.label}
              {/* Hover underline effect */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#c0a1a1] transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
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
            className="font-light nav-system-font"
          >
            Contact Us
          </SecurityButton>
        </nav>
        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open Menu" className="p-2 rounded-md border border-[#8B0000]/20 hover:border-[#8B0000]/40 transition-colors">
              <FaBars className="text-[#8B0000] text-lg" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <SheetHeader className="border-b border-[#8B0000]/10 pb-4">
                <SheetTitle className="font-[var(--font-bebas)] text-2xl font-medium tracking-wider text-[#8B0000] leading-tight">
                  SUN SECURITY SERVICES™
                </SheetTitle>
                <p className="text-sm font-[var(--font-inter)] font-medium tracking-wide text-[#556B2F] mt-2">
                  ISO 9001:2015 Certified Ex-Servicemen Enterprise
                </p>
              </SheetHeader>

              <div className="mt-6 space-y-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-4 py-4 font-medium transition-all duration-300 nav-system-font text-base ${pathname === item.href
                      ? "bg-[#8B0000] text-[#F5F5DC] shadow-lg"
                      : "text-[#556B2F] hover:bg-[#8B0000]/5 hover:text-[#8B0000] border border-transparent hover:border-[#8B0000]/20"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-4 border-t border-[#8B0000]/10">
                  <SecurityButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    showLogo={false}
                    className="w-full font-medium nav-system-font text-base py-4"
                  >
                    Contact Us
                  </SecurityButton>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#EDE2A8] text-[#141412] font-semibold px-6 py-4 rounded-lg transition-all duration-200 hover:bg-[#EDE2A8]/80 hover:shadow-lg mt-3 nav-system-font"
                  >
                    Get Estimate
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
