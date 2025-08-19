"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SecurityButton from "@/components/ui/security-button"
import { FaPhone, FaEnvelope, FaLocationDot, FaUser, FaPaperPlane, FaFax } from "react-icons/fa6"
import { BRAND } from "@/lib/content"
import { useState } from "react"

const Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  })

  async function onSubmit(values: z.infer<typeof Schema>) {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      setSent(true)
      reset()
      setTimeout(() => setSent(false), 5000)
    } catch { }
  }

  return (
    <section className="py-24 bg-[#F5F5DC]/10">
      <div className="container px-6 mx-auto">
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl border border-[#556B2F]/20 shadow-lg p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-[var(--font-bebas)] font-bold text-[#8B0000] mb-4">
                Get Your Security Quote
              </h2>
              <p className="text-[#556B2F] font-[var(--font-montserrat)] text-lg">
                Fill out the form below and our security experts will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-sm font-[var(--font-montserrat)] font-semibold text-[#556B2F]">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F]/60" />
                    <Input
                      placeholder="Enter your full name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                      className="h-14 pl-12 font-[var(--font-poppins)] text-base border-2 border-[#556B2F]/30 focus:border-[#8B0000] focus:ring-0 rounded-lg transition-colors"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-600 font-[var(--font-poppins)]">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-[var(--font-montserrat)] font-semibold text-[#556B2F]">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F]/60" />
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                      className="h-14 pl-12 font-[var(--font-poppins)] text-base border-2 border-[#556B2F]/30 focus:border-[#8B0000] focus:ring-0 rounded-lg transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-600 font-[var(--font-poppins)]">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-sm font-[var(--font-montserrat)] font-semibold text-[#556B2F]">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F]/60" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                      className="h-14 pl-12 font-[var(--font-poppins)] text-base border-2 border-[#556B2F]/30 focus:border-[#8B0000] focus:ring-0 rounded-lg transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600 font-[var(--font-poppins)]">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-[var(--font-montserrat)] font-semibold text-[#556B2F]">
                    Subject *
                  </label>
                  <Input
                    placeholder="Security quote request"
                    aria-invalid={!!errors.subject}
                    {...register("subject")}
                    className="h-14 font-[var(--font-poppins)] text-base border-2 border-[#556B2F]/30 focus:border-[#8B0000] focus:ring-0 rounded-lg transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-600 font-[var(--font-poppins)]">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-[var(--font-montserrat)] font-semibold text-[#556B2F]">
                  Message & Requirements *
                </label>
                <Textarea
                  rows={5}
                  placeholder="Please describe your security requirements, property type, and any specific needs..."
                  aria-invalid={!!errors.message}
                  {...register("message")}
                  className="font-[var(--font-poppins)] text-base border-2 border-[#556B2F]/30 focus:border-[#8B0000] focus:ring-0 rounded-lg transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-600 font-[var(--font-poppins)]">{errors.message.message}</p>
                )}
              </div>

              <div className="pt-4">
                <SecurityButton
                  onClick={handleSubmit(onSubmit)}
                  variant="primary"
                  size="lg"
                  showLogo={false}
                  className="w-full h-14 font-[var(--font-montserrat)] font-semibold text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <FaPaperPlane />
                      Send Security Quote Request
                    </div>
                  )}
                </SecurityButton>
              </div>

              {sent && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-[var(--font-poppins)] font-semibold text-center">
                    ✅ Quote request sent successfully! We'll contact you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Contact Information - Horizontal Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl md:text-6xl font-[var(--font-bebas)] font-bold text-[#8B0000] mb-4">
              Contact Us
            </h3>
            <p className="text-[#556B2F] font-[var(--font-montserrat)] text-lg">We typically respond within 24 hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Numbers */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-8 bg-[#556B2F] rounded-lg flex items-center justify-center shrink-0">
                  <FaPhone className="text-[#F5F5DC] text-lg" />
                </div>
                <h4 className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Phone Numbers:</h4>
              </div>
              <div className="space-y-2">
                {BRAND.phoneNumbers.map((phone, i) => (
                  <div key={i}>
                    <a
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="block text-[#556B2F] font-[var(--font-poppins)] text-base hover:text-[#8B0000] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-8 bg-[#556B2F] rounded-lg flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[#F5F5DC] text-lg" />
                </div>
                <h4 className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Email:</h4>
              </div>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-[#556B2F] font-[var(--font-poppins)] text-base hover:text-[#8B0000] transition-colors"
              >
                {BRAND.email}
              </a>
            </div>

            {/* Address */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-8 bg-[#556B2F] rounded-lg flex items-center justify-center shrink-0">
                  <FaLocationDot className="text-[#F5F5DC] text-lg" />
                </div>
                <h4 className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Address:</h4>
              </div>
              <div className="text-[#556B2F] font-[var(--font-poppins)] text-base leading-relaxed">{BRAND.address}</div>
            </div>

            {/* Fax */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-8 bg-[#556B2F] rounded-lg flex items-center justify-center shrink-0">
                  <FaFax className="text-[#F5F5DC] text-lg" />
                </div>
                <h4 className="font-[var(--font-montserrat)] font-bold text-[#8B0000] text-lg">Fax:</h4>
              </div>
              <div className="text-[#556B2F] font-[var(--font-poppins)] text-base">{BRAND.fax}</div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 -mx-6">
          <div className="rounded-none sm:rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-white">
            <iframe
              title="SUN SECURITY SERVICES - R.G. Baruah Road, Guwahati Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8234567890123!2d91.7785148!3d26.1689646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59097bfac91d%3A0x3bdfbbefa2eee16b!2sSun%20Security%20Services%20-%20Best%20Security%20Services%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
