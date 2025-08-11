import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import GalleryGrid from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery | SUN SECURITY SERVICES",
  description: "Operations, training, and client projects.",
}

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
  const data = await res?.json().catch(() => null)
  const count = data?.count ?? 0

  return (
    <main>
      <SiteHeader />
      <GalleryGrid />
      <SiteFooter visitorCount={count} />
    </main>
  )
}
