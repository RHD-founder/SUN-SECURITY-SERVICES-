"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { FaShield, FaUserShield, FaClock, FaAward, FaUsers, FaEye, FaGraduationCap, FaHandshake, FaChartLine, FaWrench } from "react-icons/fa6"

const advantages = [
  {
    icon: <FaUsers />,
    title: "Diverse Management Team",
    text: "Management and administration by a team with a blend of diverse experiences.",
  },
  {
    icon: <FaUserShield />,
    title: "Ex-Servicemen Leadership",
    text: "Service managed and rendered through highly experienced Ex-servicemen and trained personnel.",
  },
  {
    icon: <FaClock />,
    title: "25+ Years Experience",
    text: "Over twenty-five years of experience across oil sector, hospitals, telecom, airports, railways, educational institutions, banks, universities and more.",
  },
  {
    icon: <FaEye />,
    title: "Threat Appreciation",
    text: "Deep understanding and appreciation of security threats and vulnerabilities.",
  },
  {
    icon: <FaShield />,
    title: "Anti-Subversion",
    text: "Specialized capabilities in preventing and countering subversive activities.",
  },
  {
    icon: <FaHandshake />,
    title: "Industry Expert Access",
    text: "Direct access to senior industry experts for consultation and guidance.",
  },
  {
    icon: <FaWrench />,
    title: "Hi-Tech Equipment",
    text: "Employment of advanced technology and equipment for enhanced security.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Experience & Training",
    text: "Synthesis of experience, motivation and comprehensive training programs.",
  },
  {
    icon: <FaChartLine />,
    title: "Vigilance Cell",
    text: "SSS vigilance cell for obtaining periodic feedbacks and continuous improvement.",
  },
  {
    icon: <FaAward />,
    title: "Proven Track Record",
    text: "Excellent track record of man management and service delivery excellence.",
  },
]

const objectives = [
  "To provide effective solutions in line with the actual and specific requirements of the clients.",
  "To create a sense of security awareness.",
  "To identify the specific needs of our customers and workout feasible and effective solutions.",
  "To develop mechanisms so that value added services can be provided to the customers.",
  "To develop security protocols to create the security force that can provide rehabilitation and re-employment opportunities to the Ex-Servicemen and unemployed youth of the region.",
]

export default function WhyChoose() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".why-card", { y: 16, opacity: 0 })
      gsap.set(".objective-item", { x: -20, opacity: 0 })

      // Animate advantages cards
      gsap.to(".why-card", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      })

      // Animate objectives list
      gsap.to(".objective-item", {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="py-20 bg-[#EDE2A8]/20">
      <div className="container px-6 mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-[#0A192F] font-[var(--font-system-ui)]">
            Why Sun Security Services
          </h2>
          <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed font-[var(--font-inter)]">
            With the chief aim of providing quality and value added services to its customers, Sun
            Security Services has established itself as the leader in the field of providing security and allied
            services in the region. We are trusted by most of the leading business houses in the region and our
            long and diversified clientele is a testimony to that.
          </p>
        </div>

        {/* Advantages Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#0A192F] text-center mb-12 font-[var(--font-inter)]">
            We have our advantages over others in the field with our:
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="why-card group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="text-[#FFD700] text-2xl mb-3 flex-shrink-0">{item.icon}</div>
                <div className="text-lg font-[var(--font-inter)] font-medium text-[#0A192F] mb-2 flex-shrink-0">{item.title}</div>
                <div className="text-gray-600 leading-relaxed font-[var(--font-inter)] text-sm flex-grow">{item.text}</div>
                <div className="mt-4 h-1 w-12 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Objectives Section */}
        <div className="text-left">
          <h3 className="text-3xl font-semibold text-[#0A192F] text-left mb-10 font-[var(--font-inter)]">
            OBJECTIVES
          </h3>
          <div className="max-w-4xl">
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="objective-item flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#FFD700] rounded-full mt-3"></div>
                  <p className="text-gray-700 leading-relaxed font-[var(--font-inter)] text-lg">
                    {objective}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
