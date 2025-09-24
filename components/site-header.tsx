"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import SecurityButton from "@/components/ui/security-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BRAND } from "@/lib/content";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/gallery", label: "Gallery" },
  { href: "/certificates", label: "Certificates" },
  { href: "/security-tips", label: "Security Tips" },
  { href: "/notices", label: "Notices" },
];

export default function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const [pathname, setPathname] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPathname(window.location.pathname);

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 h-10 bg-[#8B0000] text-[#F5F5DC] text-xs">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <FaPhone className="text-[#F5F5DC]" /> {BRAND.phoneNumbers[0]} | {BRAND.phoneNumbers[1]}
          </span>
          <span className="hidden lg:inline-flex items-center gap-2">
            <FaEnvelope className="text-[#F5F5DC]" /> {BRAND.email}
          </span>
          <span className="hidden xl:inline-flex items-center gap-2">
            <FaLocationDot className="text-[#F5F5DC]" /> {BRAND.address}
          </span>
        </div>
        <Link href="/contact" className="bg-[#EDE2A8] text-[#141412] font-semibold px-6 py-2.5 text-sm">
          Get Estimate
        </Link>
      </div>
      

      <div className={`flex items-center h-20 px-4 lg:px-8 transition-colors ${scrolled ? "bg-white/95 backdrop-blur border-b shadow-sm" : "bg-white"}`}>
        <Link href="/" className="flex items-center gap-3 lg:gap-4">
          <Image src="/sun-security-logo.png" alt="SUN SECURITY Logo" width={40} height={40} className="rounded lg:w-12 lg:h-12" />
          <div className="flex flex-col min-w-0">
            <span className="font-[var(--font-bebas)] text-lg lg:text-xl xl:text-2xl font-medium text-[#8B0000] truncate">SUN SECURITY SERVICES™</span>
            <span className="text-xs lg:text-sm font-[var(--font-inter)] font-medium text-[#556B2F] truncate">ISO 9001:2015 Certified Ex-Servicemen Enterprise</span>
          </div>
        </Link>

        {mounted && (
          <nav className="ml-auto hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base font-medium py-3 px-4 group ${pathname === item.href ? "text-[#8B0000]" : "text-[#556B2F] hover:text-[#8B0000]"}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#c0a1a1] transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                <span className="absolute inset-0 bg-[#8B0000]/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10"></span>
              </Link>
            ))}
            <SecurityButton href="/contact" size="md">Contact Us</SecurityButton>
          </nav>
        )}

        {/* Mobile Sheet */}
        {mounted && (
          <div className="ml-auto md:hidden">
            <Sheet>
              <SheetTrigger aria-label="Open Menu" className="p-2 rounded-md border border-[#8B0000]/20 hover:border-[#8B0000]/40">
                <FaBars className="text-[#8B0000] text-lg" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <SheetHeader className="border-b border-[#8B0000]/10 pb-4">
                  <SheetTitle className="font-[var(--font-bebas)] text-2xl font-medium text-[#8B0000]">SUN SECURITY SERVICES™</SheetTitle>
                  <p className="text-sm font-[var(--font-inter)] text-[#556B2F] mt-2">ISO 9001:2015 Certified Ex-Servicemen Enterprise</p>
                </SheetHeader>
                <div className="mt-6 space-y-2">
                  {nav.map((item) => (
                    <Link key={item.href} href={item.href} className={`block rounded-lg px-4 py-4 font-medium ${pathname === item.href ? "bg-[#8B0000] text-[#F5F5DC]" : "text-[#556B2F] hover:bg-[#8B0000]/5 hover:text-[#8B0000]"}`}>{item.label}</Link>
                  ))}
                  <div className="pt-4 border-t border-[#8B0000]/10">
                    <SecurityButton href="/contact" size="lg" className="w-full py-4">Contact Us</SecurityButton>
                    <Link href="/contact" className="block w-full text-center bg-[#EDE2A8] text-[#141412] font-semibold px-6 py-4 rounded-lg mt-3">Get Estimate</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
}
