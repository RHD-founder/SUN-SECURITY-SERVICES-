import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

// Fallback font variables using system fonts instead of Google Fonts
const fontVariables = {
  "--font-bebas": "Bebas Neue, Impact, 'Arial Black', sans-serif",
  "--font-inter": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  "--font-poppins": "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  "--font-playfair": "'Playfair Display', Georgia, 'Times New Roman', serif",
  "--font-roboto-slab": "'Roboto Slab', Georgia, 'Times New Roman', serif",
  "--font-montserrat": "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  "--font-system-ui": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
}

export const metadata: Metadata = {
  title: "SUN SECURITY SERVICES™ | ISO 9001:2015 Certified Security Company in Guwahati",
  description:
    "North East India's Pioneer Security Organization with almost two decades of excellence. ISO 9001:2015 certified ex-servicemen enterprise providing comprehensive security solutions in Guwahati and across Northeast India.",
  keywords: [
    "Security Services Guwahati",
    "Security Guards Assam",
    "Northeast India Security",
    "Ex-Servicemen Security",
    "ISO 9001:2015 Security",
    "SUN SECURITY SERVICES",
    "Government Approved Security",
  ],
  openGraph: {
    title: "SUN SECURITY SERVICES™",
    description:
      "North East India's Pioneer Security Organization. ISO 9001:2015 certified ex-servicemen enterprise with almost two decades of excellence.",
    url: "https://www.sunsecurityservices.org",
    siteName: "SUN SECURITY SERVICES™",
    images: [
      {
        url: "/sun-security-logo.png",
        width: 400,
        height: 400,
        alt: "SUN SECURITY SERVICES™ Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUN SECURITY SERVICES™",
    description: "North East India's Pioneer Security Organization with almost two decades of excellence.",
    images: ["/sun-security-logo.png"],
  },
  metadataBase: new URL("https://www.sunsecurityservices.org"),
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SUN SECURITY SERVICES™",
    alternateName: "SUN SECURITY SERVICES™ (An ISO 9001:2015 Certified Ex-Servicemen Enterprise)",
    url: "https://www.sunsecurityservices.org",
    logo: "/sun-security-logo.png",
    description:
      "North East India's Pioneer Security Organization with almost two decades of excellence. Govt. Approved security consultants with comprehensive range of services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House No. 211, 1st Floor, R. G. Baruah Road",
      addressLocality: "Guwahati",
      addressRegion: "Assam",
      postalCode: "781024",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-361-2528676",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Assamese"],
      },
    ],
    foundingDate: "2005",
    sameAs: ["https://www.sunsecurityservices.org"],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-bebas: ${fontVariables["--font-bebas"]};
  --font-inter: ${fontVariables["--font-inter"]};
  --font-poppins: ${fontVariables["--font-poppins"]};
  --font-playfair: ${fontVariables["--font-playfair"]};
  --font-roboto-slab: ${fontVariables["--font-roboto-slab"]};
  --font-montserrat: ${fontVariables["--font-montserrat"]};
  --font-system-ui: ${fontVariables["--font-system-ui"]};
}
        `}</style>
      </head>
      <body
        className="font-['system-ui'] antialiased bg-[#F5F5DC]/20"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
