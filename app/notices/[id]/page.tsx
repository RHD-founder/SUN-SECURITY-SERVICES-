// app/notices/[id]/page.tsx

import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import { getAllNotices } from "@/lib/notices"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return getAllNotices().map((n) => ({ id: n.id }))
}

export default async function NoticeDetail({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const notice = getAllNotices().find((n) => n.id === id)
    if (!notice) return notFound()

    return (
        <>
       <SiteHeader/>
        <main className="container mx-auto px-6 py-10">
            <h1 className="text-2xl font-semibold">{notice.title}</h1>
            {notice.body ? <p className="mt-2 text-sm text-muted-foreground">{notice.body}</p> : null}
            <div className="mt-4 text-xs text-gray-500">
                Active from {new Date(notice.startAt).toLocaleString()}
                {notice.endAt ? ` to ${new Date(notice.endAt).toLocaleString()}` : ""}
            </div>
        </main>
        <SiteFooter/>
        </>
    )
}
