import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ServicesGrid from "@/components/services-grid"

export const metadata = {
  title: "Services | SUN SECURITY SERVICES",
  description: "Corporate, event, residential security, and cash logistics.",
}

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
  const data = await res?.json().catch(() => null)
  const count = data?.count ?? 0

  return (
    <main>
      <SiteHeader />
      <div className="pt-6">
        <ServicesGrid />
      </div>
      <SiteFooter visitorCount={count} />
    </main>
  )
}
