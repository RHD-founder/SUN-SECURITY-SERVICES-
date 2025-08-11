import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactSection from "@/components/contact-section"
import WhatsAppWidget from "@/components/whatsapp-widget"

export const metadata = {
  title: "Contact | SUN SECURITY SERVICES",
  description: "Get a tailored estimate for your security needs.",
}

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
  const data = await res?.json().catch(() => null)
  const count = data?.count ?? 0

  return (
    <main>
      <SiteHeader />
      <ContactSection />
      <WhatsAppWidget />
      <SiteFooter visitorCount={count} />
    </main>
  )
}
