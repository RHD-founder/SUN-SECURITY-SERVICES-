// app/sitemap.tsx
import type { MetadataRoute } from "next"

async function getNotices() {
    try {
        const { getAllNotices } = await import("@/lib/notices")
        return getAllNotices() as Array<{ id: string; endAt?: string }>
    } catch {
        return []
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sunsecurityservices.org.in"
    const now = new Date()

    const staticEntries: MetadataRoute.Sitemap = [
        "/", "/about", "/services", "/clients", "/gallery",
        "/certificates", "/security-tips", "/contact", "/notices",
    ].map((p) => ({
        url: `${site}${p}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: p === "/" ? 1 : 0.7,
    }))

    const notices = await getNotices()
    const noticeEntries: MetadataRoute.Sitemap = notices.map((n) => ({
        url: `${site}/notices/${n.id}`,
        lastModified: now, // or new Date(n.endAt ?? Date.now())
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }))

    return [...staticEntries, ...noticeEntries]
}
