import { clients } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata = {
    title: "Our Clients | SUN SECURITY SERVICES",
    description: "Trusted by leading organizations across finance, healthcare, energy, telecommunications, and public sector throughout Northeast India.",
}

export default async function ClientsPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/visitors`, { cache: "no-store" }).catch(() => null)
    const data = await res?.json().catch(() => null)
    const count = data?.count ?? 0

    return (
        <main className="bg-[#F5F5DC]/10">
            <SiteHeader />

            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-[var(--font-bebas)] text-[#8B0000] mb-6">
                            Our Valued Clients
                        </h1>
                        <p className="text-lg text-[#556B2F] max-w-3xl mx-auto">
                            Trusted by leading organizations across finance, healthcare, energy, telecommunications,
                            and public sector throughout Northeast India.
                        </p>
                    </div>

                    {/* Back to Home */}
                    

                    {/* Clients Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#8B0000] transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Logo Container */}
                                <div className="h-32 mb-4 flex items-center justify-center">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        width={200}
                                        height={120}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                {/* Client Name */}
                                <h3 className="text-[#8B0000] font-[var(--font-poppins)] font-semibold text-center text-sm leading-tight">
                                    {client.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-16 text-[#556B2F]">
                        <p className="font-[var(--font-poppins)]">
                            Proud to serve these esteemed organizations with our security expertise
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter visitorCount={count} />
        </main>
    )
}
