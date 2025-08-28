'use client'

import Image from 'next/image'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useState } from 'react'

const certificates = [
    {
        name: 'CAPSI Certification',
        file: 'CAPSI_page-0001.jpg'
    },
    {
        name: 'ISO 9001:2015 Certification',
        file: 'iso_page-0001.jpg'
    },
    {
        name: 'Professional Security Certificate',
        file: 'img20250807_17440880.jpg'
    },
    {
        name: 'Security Qualification Certificate',
        file: 'img20250807_17451047.jpg'
    },
    {
        name: 'Security Training Certificate',
        file: 'img20250807_17415246.jpg'
    },
    {
        name: 'Official Security Documentation',
        file: 'New_Doc_08-23-2025_13.02_page-0001.jpg'
    }
]

export default function CertificatesPage() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

    return (
        <main className="bg-[#F5F5DC]/10">
            <SiteHeader />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#8B0000] via-[#8B0000] to-[#556B2F] text-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-[var(--font-bebas)] mb-4">
                            Our Certificates & Accreditations
                        </h1>
                        <p className="text-xl text-[#F5F5DC] max-w-3xl mx-auto">
                            Professional certifications that demonstrate our commitment to excellence
                        </p>
                    </div>
                </div>
            </div>

            {/* Simple Certificates Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <Image
                                src={`/cert/${cert.file}`}
                                alt={cert.name}
                                width={400}
                                height={600}
                                className="w-full h-auto object-contain rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Clean White Modal - No Dark Overlay */}
            {selectedCert && (
                <div
                    className="fixed inset-0 bg-white z-50"
                    onClick={() => setSelectedCert(null)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-6 right-6 z-10 bg-gray-800 hover:bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-200"
                    >
                        ×
                    </button>

                    {/* Certificate - Full Screen */}
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <Image
                            src={`/cert/${selectedCert.file}`}
                            alt={selectedCert.name}
                            width={1200}
                            height={1800}
                            className="max-w-full max-h-full object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            <SiteFooter visitorCount={0} />
        </main>
    )
}
