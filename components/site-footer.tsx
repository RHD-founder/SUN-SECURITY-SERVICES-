import Link from "next/link"
import { BRAND } from "@/lib/content"
import { FaPhoneAlt, FaEnvelope, FaFax, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"

export default function SiteFooter({ visitorCount = 0 }: { visitorCount?: number }) {
  return (
    <footer className="border-t border-[#556B2F]/20 bg-[#F5F5DC]/30">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-[var(--font-bebas)] text-2xl font-bold text-[#8B0000] tracking-wider">
              SUN SECURITY SERVICES™
            </div>
            <p className="text-[#556B2F] mt-3 font-system-ui leading-relaxed">
              ISO 9001:2015 Certified Ex-Servicemen Enterprise. North East India's pioneer security organization with
              almost 25⁺ Years of Experience.
            </p>
            <p className="text-sm text-[#556B2F]/80 mt-3 font-system-ui">Govt. Approved Security Consultants</p>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Company</div>
            <ul className="mt-4 space-y-3 text-[#556B2F] font-system-ui">
              <li>
                <Link href="/about" className="hover:underline hover:text-[#8B0000] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Contact Info</div>
            <ul className="mt-4 space-y-3 text-[#556B2F] font-system-ui">
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="text-[#8B0000] text-sm mt-1" />
                <div className="text-xs space-y-1">
                  {BRAND.phoneNumbers.map((phone, i) => (
                    <div key={i}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#8B0000] text-sm" />
                <a href={`mailto:${BRAND.email}`} className="text-xs hover:text-[#8B0000] transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFax className="text-[#8B0000] text-sm" />
                <span className="text-xs">Fax: {BRAND.fax}</span>
              </li>
              <li>
                <div className="text-xs text-[#556B2F] mb-2">Follow Us:</div>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/sunsecurityservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B0000] hover:text-[#556B2F] transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                  <a
                    href="https://www.facebook.com/sunsecutiryservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B0000] hover:text-[#556B2F] transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <FaFacebook className="text-lg" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B0000] hover:text-[#556B2F] transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Legal</div>
            <ul className="mt-4 space-y-3 text-[#556B2F] font-system-ui">
              <li>
                <Link href="#" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:text-[#8B0000] transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Visitors</div>
            <p className="text-[#556B2F] mt-4 font-system-ui">
              Total visits: <span className="font-bold text-[#8B0000] text-xl">{visitorCount.toLocaleString()}</span>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#556B2F]/20 text-sm text-[#556B2F]/80 font-system-ui">
          &copy; {new Date().getFullYear()} SUN SECURITY SERVICES™. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
