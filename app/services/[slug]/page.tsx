import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { services } from "@/lib/content"
import Image from "next/image"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const svc = services.find((s) => s.slug === slug)
  return {
    title: svc ? `${svc.title} | SUN SECURITY SERVICES` : "Service | SUN SECURITY SERVICES",
    description: svc?.description ?? "Service details",
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const svc = services.find((s) => s.slug === slug)
  if (!svc) notFound()

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
  const data = await res?.json().catch(() => null)
  const count = data?.count ?? 0

  return (
    <main>
      <SiteHeader />
      <section className="relative h-[320px]">
        <Image
          src={svc.image || "/placeholder.svg"}
          alt={svc.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A192F]/70 flex items-center">
          <div className="container px-6 mx-auto">
            <h1 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-white">{svc.title}</h1>
            <p className="text-white/85 max-w-2xl mt-2">{svc.description}</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        {/* <div className="container px-6 mx-auto">
          <h2 className="text-2xl font-semibold text-[#0A192F]">Key Features</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(svc.features ?? ["24x7 Operations", "SOP-led", "Trained Team"]).map((f) => (
              <li key={f} className="rounded-lg border p-3 text-gray-700">{f}</li>
            ))}
          </ul>
        </div> */}
      </section>
      <SiteFooter visitorCount={count} />
    </main>
  )
}
