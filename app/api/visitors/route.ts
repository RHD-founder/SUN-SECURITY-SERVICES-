import { NextResponse } from "next/server";

export const runtime = "edge"; // Ultra-fast Edge Runtime!

export async function GET() {
  // Use Edge Runtime for lightning-fast responses
  const start = new Date("2024-01-01T00:00:00Z").getTime();
  const now = Date.now();
  const minutes = Math.floor((now - start) / 60000);
  const base = 1250 + minutes; // grows ~1 per minute
  const day = Math.floor(now / (24 * 60 * 60 * 1000));
  const jitter = (day % 13) * 7; // small deterministic daily variation
  const count = base + jitter;

  const res = NextResponse.json({ count });
  // set a simple cookie to mark returning visitor
  res.cookies.set("sun_visitor", "1", {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 365,
  });

  // Add performance headers
  res.headers.set("Cache-Control", "public, max-age=60, s-maxage=300");
  res.headers.set("X-Edge-Runtime", "true");

  return res;
}
