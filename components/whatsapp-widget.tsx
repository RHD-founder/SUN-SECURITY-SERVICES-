"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"

export default function WhatsAppWidget({ phone = "+919954705329" }: { phone?: string }) {
  const href = `https://wa.me/${phone.replace(/\D/g, "")}`
  return (
    <Link
      href={href}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition"
      target="_blank"
    >
      <FaWhatsapp className="text-2xl" />
    </Link>
  )
}
