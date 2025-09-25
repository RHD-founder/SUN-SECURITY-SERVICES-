// app/api/ga/realtime/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs"; // GA client requires Node runtime

function getCreds() {
  const json = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (!json) throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS_JSON");
  return JSON.parse(json);
}

export async function GET() {
  try {
    const { BetaAnalyticsDataClient } = await import("@google-analytics/data");
    const creds = getCreds();
    const client = new BetaAnalyticsDataClient({
      credentials: {
        client_email: creds.client_email,
        private_key: creds.private_key,
      },
    });
    const propertyId = process.env.GA4_PROPERTY_ID;
    if (!propertyId) throw new Error("Missing GA4_PROPERTY_ID");
    const [resp] = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: "activeUsers" }],
    });
    const value = Number(resp?.rows?.[0]?.metricValues?.[0]?.value ?? 0);
    return NextResponse.json(
      { activeUsers: Number.isFinite(value) ? value : 0 },
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch {
    return NextResponse.json(
      { activeUsers: 0 },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }
}
