import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Image as ImageIcon, ArrowRight, Award } from 'lucide-react'

const featuredCertificates = [
    {
        name: 'ISO 9001:2015',
        description: 'Quality Management System Certification',
        file: 'iso.pdf',
        type: 'pdf',
        category: 'Quality Management',
        featured: true
    },
    {
        name: 'CAPSI Certification',
        description: 'Certified Agency for Professional Security in India',
        file: 'CAPSI.pdf',
        type: 'pdf',
        category: 'Professional Certification',
        featured: true
    },
    {
        name: 'Professional Security',
        description: 'Security service accreditation certificate',
        file: 'img20250807_17440880.jpg',
        type: 'image',
        category: 'Visual Certificate',
        featured: true
    }
]

export default function CertificatesShowcase() {
    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-blue-600 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Our Certifications & Accreditations
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our commitment to excellence is backed by internationally recognized certifications
                        that demonstrate our professional standards and quality assurance.
                    </p>
                </div>

                {/* Featured Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {featuredCertificates.map((cert, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg hover:-translate-y-1">
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-2">
                                        {cert.type === 'pdf' ? (
                                            <FileText className="h-6 w-6 text-red-500" />
                                        ) : (
                                            <ImageIcon className="h-6 w-6 text-blue-500" />
                                        )}
                                        <Badge variant="secondary" className="text-xs font-medium">
                                            {cert.type.toUpperCase()}
                                        </Badge>
                                    </div>
                                    <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                                        {cert.category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {cert.name}
                                </CardTitle>
                                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                                    {cert.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        {cert.type === 'pdf' ? 'PDF Document' : 'Certificate Image'}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                                        onClick={() => window.open(`/api/certificates?file=${encodeURIComponent(cert.file)}`, '_blank')}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            View All Our Certificates
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Explore our complete collection of professional certifications, ISO accreditations,
                            and industry recognitions that showcase our commitment to quality and excellence.
                        </p>
                        <Link href="/certificates">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                                View All Certificates
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
