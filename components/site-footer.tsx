import Link from "next/link"

export default function SiteFooter({ visitorCount = 0 }: { visitorCount?: number }) {
  return (
    <footer className="border-t bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-[var(--font-montserrat)] text-2xl font-bold text-[#0A192F]">
              SUN SECURITY SERVICES™
            </div>
            <p className="text-gray-600 mt-3 font-[var(--font-poppins)] leading-relaxed">
              ISO 9001:2015 Certified Ex-Servicemen Enterprise. North East India's pioneer security organization with
              almost two decades of excellence.
            </p>
            <p className="text-sm text-gray-500 mt-3 font-[var(--font-poppins)]">Govt. Approved Security Consultants</p>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#0A192F] text-lg">Company</div>
            <ul className="mt-4 space-y-3 text-gray-600 font-[var(--font-poppins)]">
              <li>
                <Link href="/about" className="hover:underline hover:text-[#0A192F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#0A192F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline hover:text-[#0A192F] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-[#0A192F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#0A192F] text-lg">Legal</div>
            <ul className="mt-4 space-y-3 text-gray-600 font-[var(--font-poppins)]">
              <li>
                <Link href="#" className="hover:underline hover:text-[#0A192F] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:text-[#0A192F] transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#0A192F] text-lg">Visitors</div>
            <p className="text-gray-600 mt-4 font-[var(--font-poppins)]">
              Total visits: <span className="font-bold text-[#0A192F] text-xl">{visitorCount.toLocaleString()}</span>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-sm text-gray-500 font-[var(--font-poppins)]">
          &copy; {new Date().getFullYear()} SUN SECURITY SERVICES™. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
