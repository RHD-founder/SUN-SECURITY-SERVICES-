import { clients } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"

export default function ClientsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#0F3460] to-[#16213E]">
            {/* Header */}
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-roboto-slab)] font-bold text-white mb-6">
                        Our Valued Clients
                    </h1>
                    <p className="text-xl text-white/80 font-[var(--font-poppins)] max-w-3xl mx-auto">
                        Trusted by leading organizations across finance, healthcare, energy, telecommunications,
                        and public sector throughout Northeast India.
                    </p>
                </div>

                {/* Back to Home */}
                <div className="text-center mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 border border-white/20"
                    >
                        ← Back to Home
                    </Link>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
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
                            <h3 className="text-white font-[var(--font-poppins)] font-semibold text-center text-sm leading-tight">
                                {client.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-16 text-white/60">
                    <p className="font-[var(--font-poppins)]">
                        Proud to serve these esteemed organizations with our security expertise
                    </p>
                </div>
            </div>
        </div>
    )
}
