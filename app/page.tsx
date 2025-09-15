import dynamic from "next/dynamic"
import SiteHeader from "@/components/site-header"
import SplashScreen from "@/components/splash-screen"
import Hero from "@/components/hero"
import WhyChoose from "@/components/why-choose"
import ServicesGrid from "@/components/services-grid"
import Awards from "@/components/awards"
import SiteFooter from "@/components/site-footer"

// Lazy load heavy components for better performance
const ClientsMarquee = dynamic(() => import("@/components/clients-marquee"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" />,
})
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />,
})
const GalleryGrid = dynamic(() => import("@/components/gallery-grid"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />,
})
const CertificatesShowcase = dynamic(() => import("@/components/certificates-showcase"), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded" />,
})
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />,
})

export default async function Page() {
  // Fetch visitor count on server side for better performance
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, {
    cache: "no-store"
  }).catch(() => null)
  const data = await res?.json().catch(() => null)
  const count = data?.count ?? 0

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
