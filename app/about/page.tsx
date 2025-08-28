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
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/80 to-[#556B2F]/70 flex items-center">
          <div className="container px-6 mx-auto">
            <h1 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-[#F5F5DC]">About Us</h1>
            <p className="text-[#F5F5DC]/95 max-w-2xl mt-2">
              Built on discipline and trust, we deliver corporate-grade protection with zero compromise.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#F5F5DC]/20">
        <div className="container px-6 mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-[var(--font-bebas)] text-[#8B0000]">Our Story</h2>
            <p className="mt-3 text-[#556B2F]">
              SUN SECURITY SERVICES was founded with a mission to raise the bar for private security in Assam.
              From corporate offices to high footfall events, our trained teams operate with clear SOPs, technology
              integration, and a relentless focus on safety.
            </p>
            <p className="mt-3 text-[#556B2F]">
              We are PSARA-compliant, ISO-conscious, and committed to continual training and improvement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image src="/placeholder.svg?height=360&width=560" alt="Guard training" width={560} height={360} className="rounded-xl border" />
            <Image src="/placeholder.svg?height=360&width=560" alt="Surveillance monitoring" width={560} height={360} className="rounded-xl border" />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[var(--font-bebas)] text-[#8B0000] mb-4">
              Our Certifications & Accreditations
            </h2>
            <p className="text-lg text-[#556B2F] max-w-3xl mx-auto">
              Our commitment to excellence is backed by internationally recognized certifications
              that demonstrate our professional standards and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">ISO 9001:2015</h3>
              <p className="text-[#556B2F] text-sm mb-4">
                Quality Management System Certification ensuring consistent service delivery
              </p>
              <a
                href="/api/certificates?file=iso.pdf"
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Certificate →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">CAPSI Certified</h3>
              <p className="text-[#556B2F] text-sm mb-4">
                Certified Agency for Professional Security in India
              </p>
              <a
                href="/api/certificates?file=CAPSI.pdf"
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Certificate →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">PSARA Compliant</h3>
              <p className="text-[#556B2F] text-sm mb-4">
                Private Security Agencies Regulation Act compliance
              </p>
              <span className="text-gray-400 text-sm font-medium">
                Industry Standard
              </span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/certificates"
              className="inline-flex items-center bg-[#8B0000] text-[#F5F5DC] px-8 py-3 rounded-lg hover:bg-[#8B0000]/90 transition-colors font-medium"
            >
              View All Certificates
            </a>
          </div>
        </div>
      </section>

      <SiteFooter visitorCount={count} />
    </main>
  )
}
