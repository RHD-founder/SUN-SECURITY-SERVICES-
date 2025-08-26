"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SecurityButton from "@/components/ui/security-button"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
  FaFax,
  FaClock,
  FaShieldAlt
} from "react-icons/fa"
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
              Contact Us
            </h2>
            <p className="font-[var(--font-poppins)] text-lg md:text-xl text-accent-500 max-w-2xl mx-auto">
              Get your security quote today. Our experts will contact you within 24 hours.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="flex-1 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="font-[var(--font-poppins)] text-accent-500 font-semibold text-base">Full Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500 text-lg" />
                      <Input
                        placeholder="Enter your full name"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                        className="h-12 pl-10 font-[var(--font-poppins)] border-2 border-accent-500/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-lg transition-all bg-white/20 text-white placeholder-white/70 text-base"
                      />
                    </div>
                    {errors.name && (
                      <p className="font-[var(--font-poppins)] text-error-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="font-[var(--font-poppins)] text-accent-500 font-semibold text-base">Phone Number *</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500 text-lg" />
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        aria-invalid={!!errors.phone}
                        {...register("phone")}
                        className="h-12 pl-10 font-[var(--font-poppins)] border-2 border-accent-500/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-lg transition-all bg-white/20 text-white placeholder-white/70 text-base"
                      />
                    </div>
                    {errors.phone && (
                      <p className="font-[var(--font-poppins)] text-error-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="font-[var(--font-poppins)] text-accent-500 font-semibold text-base">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500 text-lg" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                        className="h-12 pl-10 font-[var(--font-poppins)] border-2 border-accent-500/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-lg transition-all bg-white/20 text-white placeholder-white/70 text-base"
                      />
                    </div>
                    {errors.email && (
                      <p className="font-[var(--font-poppins)] text-error-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="font-[var(--font-poppins)] text-accent-500 font-semibold text-base">Subject *</label>
                    <Input
                      placeholder="Security quote request"
                      aria-invalid={!!errors.subject}
                      {...register("subject")}
                      className="h-12 font-[var(--font-poppins)] border-2 border-accent-500/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-lg transition-all bg-white/20 text-white placeholder-white/70 text-base"
                    />
                    {errors.subject && (
                      <p className="font-[var(--font-poppins)] text-error-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-[var(--font-poppins)] text-accent-500 font-semibold text-base">Message & Requirements *</label>
                  <Textarea
                    rows={4}
                    placeholder="Describe your security requirements, property type, and specific needs..."
                    aria-invalid={!!errors.message}
                    {...register("message")}
                    className="font-[var(--font-poppins)] border-2 border-accent-500/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-lg transition-all resize-none bg-white/20 text-white placeholder-white/70 text-base"
                  />
                  {errors.message && (
                    <p className="font-[var(--font-poppins)] text-error-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <SecurityButton
                    onClick={handleSubmit(onSubmit)}
                    variant="primary"
                    size="md"
                    showLogo={false}
                    className="w-full h-14 font-[var(--font-montserrat)] font-semibold flex items-center justify-center bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-400 hover:to-primary-600 focus:ring-4 focus:ring-primary-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2 w-full">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Request...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 w-full">
                        <FaPaperPlane />
                        Send Quote Request
                      </div>
                    )}
                  </SecurityButton>
                </div>

                {sent && (
                  <div className="p-4 bg-success-500/20 border border-success-500/30 rounded-lg">
                    <p className="font-[var(--font-poppins)] text-success-500 font-semibold text-center">
                      ✅ Quote request sent successfully! We'll contact you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}

          </div>

          {/* Map Section - Full Width */}
          <div className="mt-16 lg:mt-20 -mx-4 md:-mx-6">
            <div className="w-full">
              <iframe
                title="SUN SECURITY SERVICES - R.G. Baruah Road, Guwahati Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8234567890123!2d91.7785148!3d26.1689646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59097bfac91d%3A0x3bdfbbefa2eee16b!2sSun%20Security%20Services%20-%20Best%20Security%20Services%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-[300px] md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



