import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Bebas_Neue, Inter, Poppins, Playfair_Display, Roboto_Slab, Montserrat } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" })
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
})
const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
})
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

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
  --font-bebas: ${bebas.variable};
  --font-inter: ${inter.variable};
  --font-poppins: ${poppins.variable};
  --font-playfair: ${playfair.variable};
  --font-roboto-slab: ${robotoSlab.variable};
  --font-montserrat: ${montserrat.variable};
}
        `}</style>
      </head>
      <body
        className={`${bebas.variable} ${inter.variable} ${poppins.variable} ${playfair.variable} ${robotoSlab.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
