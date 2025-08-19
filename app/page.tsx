import SiteHeader from "@/components/site-header"
import SplashScreen from "@/components/splash-screen"
import Hero from "@/components/hero"
import WhyChoose from "@/components/why-choose"
import ServicesGrid from "@/components/services-grid"
import Awards from "@/components/awards"
import ClientsMarquee from "@/components/clients-marquee"
import Testimonials from "@/components/testimonials"
import GalleryGrid from "@/components/gallery-grid"
import ContactSection from "@/components/contact-section"
import SiteFooter from "@/components/site-footer"

export const metadata = {
  title: "SUN SECURITY SERVICES | Premium Security Company in Assam",
  description: "Corporate, event, and residential security with trained professionals and 24x7 operations.",
}

export default async function Page() {
  // SSR fetch visitor counter for footer snapshot (non-blocking but in SSR for TTFB)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
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
