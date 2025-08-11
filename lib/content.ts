export type Service = {
  slug: string
  title: string
  description: string
  image: string
  icon?: string
  features?: string[]
}

export const BRAND = {
  name: "SUN SECURITY SERVICES™",
  fullName: "SUN SECURITY SERVICES™ (An ISO 9001:2015 Certified Ex-Servicemen Enterprise)",
  tagline: "North East India's Pioneer Security Organization with almost two Decades of Excellence",
  description: "Govt. Approved security consultants with comprehensive range of services",
  phone: "8486026829",
  phoneNumbers: ["8486026829", "95088119134", "9954705329", "03613195254", "03614522309"],
  email: "admin@sunsecuritymail.com",
  fax: "0361 2528676",
  address: "House No. 211, 1st Floor, R. G. Baruah Road, Guwahati – 24",
  addressShort: "Guwahati, Assam",
  whatsapp: "+9195088119134",
}

export const services: Service[] = [
  // Core Security Services
  {
    slug: "security-service",
    title: "Security Service",
    description:
      "Comprehensive security solutions with trained ex-servicemen personnel providing professional protection across all sectors.",
    image: "/sun-security-team-1.png",
    features: [
      "24x7 Operations",
      "Trained Personnel",
      "Professional Uniforms",
      "Emergency Response",
      "Incident Reporting",
      "Quality Assurance",
    ],
    icon: "shield",
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    description:
      "Specialized protection for housing societies, apartments, and private residences with comprehensive safety protocols.",
    image: "/sun-security-building-march.png",
    features: [
      "Perimeter Patrol",
      "Gate Control",
      "CCTV Monitoring",
      "Visitor Management",
      "Emergency Response",
      "Community Safety",
    ],
    icon: "home",
  },
  {
    slug: "on-site-guard-service",
    title: "On-Site Guard Service",
    description:
      "Dedicated security personnel stationed at your premises providing continuous protection and professional security management.",
    image: "/sun-security-team-5.jpeg",
    features: [
      "Dedicated Guards",
      "Access Control",
      "Regular Patrols",
      "Incident Management",
      "Professional Training",
      "Uniform Standards",
    ],
    icon: "user-shield",
  },
  {
    slug: "event-security",
    title: "Event Security",
    description:
      "Specialized crowd management, VIP protection, and comprehensive security solutions for events of any scale.",
    image: "/event-security-crowd.png",
    features: [
      "Crowd Control",
      "VIP Protection",
      "Entry Management",
      "Emergency Protocols",
      "Coordination",
      "Risk Assessment",
    ],
    icon: "star",
  },
  {
    slug: "warehouse-security",
    title: "Warehouse Security",
    description:
      "Industrial-grade security solutions for warehouses, storage facilities, and distribution centers with asset protection.",
    image: "/armored-cash-logistics.png",
    features: [
      "Asset Protection",
      "Inventory Security",
      "Loading Bay Control",
      "CCTV Surveillance",
      "Fire Safety",
      "Access Management",
    ],
    icon: "truck",
  },
  {
    slug: "private-security-guard",
    title: "Private Security Guard",
    description:
      "Personal protection services with highly trained ex-servicemen guards providing discrete and professional security.",
    image: "/sun-security-team-3.png",
    features: [
      "Personal Protection",
      "Discrete Service",
      "Background Verified",
      "Professional Training",
      "Emergency Response",
      "Flexible Scheduling",
    ],
    icon: "user-check",
  },
  {
    slug: "commercial-security",
    title: "Commercial Security",
    description:
      "End-to-end security solutions for offices, retail spaces, and commercial establishments with integrated technology.",
    image: "/corporate-security-lobby.png",
    features: [
      "Office Security",
      "Retail Protection",
      "Access Control",
      "Surveillance Integration",
      "Business Continuity",
      "Compliance Management",
    ],
    icon: "building",
  },

  // Allied Services
  {
    slug: "allied-services",
    title: "Allied Services",
    description:
      "Comprehensive support services including facility management, maintenance, and auxiliary security solutions.",
    image: "/sun-security-team-2.png",
    features: [
      "Facility Management",
      "Maintenance Support",
      "Auxiliary Services",
      "Integrated Solutions",
      "Support Operations",
      "Service Coordination",
    ],
    icon: "settings",
  },
  {
    slug: "commercial-security-enhanced",
    title: "Commercial Security",
    description:
      "Advanced commercial security solutions with technology integration and comprehensive risk management protocols.",
    image: "/sun-security-formation-1.png",
    features: [
      "Advanced Technology",
      "Risk Management",
      "Business Protection",
      "Integrated Systems",
      "Professional Staff",
      "Compliance Support",
    ],
    icon: "briefcase",
  },
  {
    slug: "emergency-relief",
    title: "Emergency Relief",
    description:
      "Rapid response emergency services and disaster management support with trained personnel and coordinated operations.",
    image: "/sun-security-march-2.png",
    features: [
      "Rapid Response",
      "Disaster Management",
      "Evacuation Support",
      "Emergency Coordination",
      "Relief Operations",
      "Crisis Management",
    ],
    icon: "heart-pulse",
  },
  {
    slug: "malls-security",
    title: "Malls Security",
    description:
      "Specialized security management for shopping malls and retail complexes with crowd control and customer safety focus.",
    image: "/sun-security-building-march.png",
    features: [
      "Crowd Management",
      "Retail Security",
      "Customer Safety",
      "Parking Security",
      "Loss Prevention",
      "Emergency Protocols",
    ],
    icon: "store",
  },
  {
    slug: "malls-security-service",
    title: "Malls Security Service",
    description:
      "Comprehensive mall security services including surveillance, access control, and specialized retail protection protocols.",
    image: "/sun-security-march-3.png",
    features: [
      "Surveillance Systems",
      "Access Control",
      "Retail Protection",
      "Customer Service",
      "Loss Prevention",
      "Emergency Management",
    ],
    icon: "shopping-cart",
  },
  {
    slug: "residence-security",
    title: "Residence Security",
    description:
      "Premium residential security services for individual homes and private properties with personalized protection plans.",
    image: "/sun-security-team-4.png",
    features: [
      "Personal Protection",
      "Property Security",
      "Privacy Maintenance",
      "Family Safety",
      "Discrete Service",
      "24x7 Monitoring",
    ],
    icon: "house",
  },
  {
    slug: "safe-and-secure",
    title: "Safe And Secure",
    description:
      "Holistic security solutions combining physical security, technology integration, and comprehensive risk management.",
    image: "/sun-security-building-march.png",
    features: [
      "Risk Assessment",
      "Technology Integration",
      "Physical Security",
      "Monitoring Systems",
      "Threat Analysis",
      "Security Consulting",
    ],
    icon: "shield-check",
  },
  {
    slug: "security-guard",
    title: "Security Guard",
    description:
      "Professional security guard services with trained, uniformed personnel providing reliable protection and peace of mind.",
    image: "/sun-security-team-1.png",
    features: [
      "Trained Guards",
      "Professional Uniforms",
      "Reliable Service",
      "Background Checks",
      "Regular Training",
      "Quality Standards",
    ],
    icon: "user-shield",
  },
]

export const awards = [
  {
    year: "2024",
    title: "ISO 9001:2015 Certified",
    organization: "Bureau Veritas",
    accreditation: "UKAS Accredited",
    description:
      "Quality Management Systems certification ensuring consistent service delivery and operational excellence across all security operations with international recognition.",
    image: "/iso-9001-bureau-veritas-official.png",
    proof: "#",
    category: "certification",
  },
  {
    year: "2023",
    title: "CAPSI Member",
    organization: "Central Association of Private Security Industry",
    description:
      "Active membership in India's premier private security industry association, ensuring adherence to industry best practices and continuous professional development.",
    image: "/capsi-certification.png",
    proof: "#",
    category: "membership",
  },
  {
    year: "2022",
    title: "APSA India Chapter Member",
    organization: "Asian Professional Security Association",
    description:
      "Member of the leading Asian security professionals network, promoting excellence in security services across Asia and fostering international best practices.",
    image: "/apsa-india-chapter.png",
    proof: "#",
    category: "membership",
  },
  {
    year: "2021",
    title: "ISO 9001:2015 Certified",
    organization: "Bureau Veritas",
    accreditation: "NABCB Accredited",
    description:
      "National Accreditation Board for Certification Bodies accredited ISO 9001:2015 certification, demonstrating compliance with Indian national quality standards and regulations.",
    image: "/iso-9001-nabcb-certification.png",
    proof: "#",
    category: "certification",
  },
]

export const clients = [
  { name: "NorthEast Bank", logo: "/finance-bank-logo.png" },
  { name: "Assam Mall", logo: "/generic-mall-logo.png" },
  { name: "TechHub", logo: "/generic-tech-logo.png" },
  { name: "Oil & Gas Co", logo: "/placeholder.svg?height=60&width=180" },
  { name: "EduCare", logo: "/placeholder.svg?height=60&width=180" },
  { name: "HealthPlus", logo: "/placeholder.svg?height=60&width=180" },
]

export const testimonials = [
  {
    name: "Anil Sharma",
    role: "Facility Manager, NorthEast Bank",
    rating: 5,
    text: "Professional, punctual, and proactive. SUN SECURITY delivers consistently excellent protection for our branches.",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Priya Das",
    role: "Operations Head, Assam Mall",
    rating: 5,
    text: "Their event security team handled a festival rush flawlessly. Exceptional crowd management and safety.",
    image: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Rakesh Singh",
    role: "Society President",
    rating: 4,
    text: "Reliable guards and swift response. Our residents feel safe and supported around the clock.",
    image: "/placeholder.svg?height=96&width=96",
  },
]
