import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"

export const metadata = {
  title: "About | SUN SECURITY SERVICES",
  description:
    "Our history, values, and commitment to delivering uncompromising security across Assam.",
}

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
  const data = await res?.json().catch(() => null)
  const count = data?.count ?? 0

  return (
    <main>
      <SiteHeader />
      <section className="relative h-[320px]">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Security control room"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A192F]/70 flex items-center">
          <div className="container px-6 mx-auto">
            <h1 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-white">About Us</h1>
            <p className="text-white/85 max-w-2xl mt-2">
              Built on discipline and trust, we deliver corporate-grade protection with zero compromise.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-[var(--font-bebas)] text-[#0A192F]">Our Story</h2>
            <p className="mt-3 text-gray-700">
              SUN SECURITY SERVICES was founded with a mission to raise the bar for private security in Assam.
              From corporate offices to high footfall events, our trained teams operate with clear SOPs, technology
              integration, and a relentless focus on safety.
            </p>
            <p className="mt-3 text-gray-700">
              We are PSARA-compliant, ISO-conscious, and committed to continual training and improvement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image src="/placeholder.svg?height=360&width=560" alt="Guard training" width={560} height={360} className="rounded-xl border" />
            <Image src="/placeholder.svg?height=360&width=560" alt="Surveillance monitoring" width={560} height={360} className="rounded-xl border" />
          </div>
        </div>
      </section>
      <SiteFooter visitorCount={count} />
    </main>
  )
}
