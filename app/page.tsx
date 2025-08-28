'use client'

import SiteHeader from "@/components/site-header"
import SplashScreen from "@/components/splash-screen"
import Hero from "@/components/hero"
import WhyChoose from "@/components/why-choose"
import ServicesGrid from "@/components/services-grid"
import Awards from "@/components/awards"
import ClientsMarquee from "@/components/clients-marquee"
import Testimonials from "@/components/testimonials"
import GalleryGrid from "@/components/gallery-grid"
import CertificatesShowcase from "@/components/certificates-showcase"
import ContactSection from "@/components/contact-section"
import SiteFooter from "@/components/site-footer"
import { useEffect, useState } from "react"

export default function Page() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Fetch visitor count on client side
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`)
      .then(res => res.json())
      .then(data => setCount(data?.count ?? 0))
      .catch(() => setCount(0))
  }, [])

  return (
    <main className="bg-[#F5F5DC]/10">
      <SplashScreen enabled />
      <SiteHeader />
      <Hero />
      <WhyChoose />
      <ServicesGrid />
      <Awards />
      <ClientsMarquee />
      <Testimonials />
      <GalleryGrid />
      <ContactSection />
      <SiteFooter visitorCount={count} />
    </main>
  )
}
