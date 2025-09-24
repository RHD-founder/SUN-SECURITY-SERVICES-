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

      {/* About + Founder (text left, image right; stacks on mobile) */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-[#8B0000] mb-8 text-center">About Us</h1>

          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Left: About text */}
            <div className="space-y-6">
              <p className="text-[#556B2F] text-lg leading-relaxed text-justify">
                Sun Security Services was founded in 1999 by Maj Surajit Barman (Retd), an ex-Indian Army
                officer under the aegis of Directorate General of Resettlement, Ministry of Defence, Government of
                India. We commenced operations on 16th February 2000 in Manipur and Tripura.
              </p>

              <p className="text-[#556B2F] text-lg leading-relaxed text-justify">
                Since then, we have established ourselves as a trusted and professional security
                solutions provider serving the northeast region with a wide range of clients.
              </p>

              <p className="text-[#556B2F] text-lg leading-relaxed text-justify">
                With our mission to provide quality and reliable services, coupled with relentless focus on
                innovation and tech-based approaches, we have become a pioneer and leading security services
                provider in the Northeast Region.
              </p>
            </div>

            {/* Right: Founder image */}
            <div className="relative w-full md:max-w-md md:ml-auto aspect-[4/5]">
              <Image
                src="/founder.jpg"
                alt="Founder, Maj Surajit Barman (Retd)"
                fill
                sizes="(min-width: 768px) 28rem, 100vw"
                className="object-cover rounded-xl shadow-lg ring-1 ring-black/5"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Existing sections below remain unchanged */}
      <section className="py-16 bg-[#F5F5DC]/20">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[var(--font-bebas)] text-[#8B0000]">Our Story</h2>
            <div className="w-24 h-1 bg-[#8B0000] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6 text-[#556B2F] leading-relaxed">
            <p className="text-justify">
              Maj Surajit Barman (Retd) is a distinguished retired officer of the Indian Army who has made a
              notable impact in the field of private security industry in the north east. After his military career, he
              channelled his leadership and operational expertise into the private security sector by starting Sun
              Security Services in the year 1999 under the aegis of Directorate General of Resettlement (DGR),
              Ministry of Defence, Govt. of India, with the aim of generating employment for the unemployed
              youth of the region as well as reemployment opportunities for the local ex-servicemen.
            </p>

            <p className="text-justify">
              His experience in the Indian Army brings discipline, strategic insight and operational excellence to Sun
              Security Services. Under his visionary leadership and guidance, Sun Security Services has grown to be
              one of the leading service providers of the region. His vision is to elevate the standards of private
              security industry in the region, focussing on professionalism, reliability and customer satisfaction
              through high-quality and cost-effective security solutions.
            </p>

            <div className="bg-white/50 p-6 rounded-lg border-l-4 border-[#8B0000] mt-8">
              <p className="text-[#8B0000] font-semibold text-center">
                We are PSARA compliant, driven by quality conscious approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter visitorCount={count} />
    </main>
  )
}
