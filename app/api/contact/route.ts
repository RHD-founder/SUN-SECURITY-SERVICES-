import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  // In production, integrate with your email provider or CRM here
  console.log("Contact submission:", body)
  return NextResponse.json({ ok: true })
}
