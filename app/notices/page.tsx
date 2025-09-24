// app/notices/page.tsx

import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import { getAllNotices } from "@/lib/notices"

export const metadata = {
    title: "Notices",
    description: "All announcements and updates",
}

export default async function NoticesPage() {
    const notices = getAllNotices()

    return (
        <>
        <SiteHeader />
        <main className="container mx-auto px-6 py-10">
            <h1 className="text-3xl font-semibold">Notices</h1>
            <p className="mt-2 text-muted-foreground">Browse announcements and updates.</p>

            <div className="mt-6 space-y-4">
                {notices.map((n) => (
                    <article key={n.id} id={n.id} className="rounded-md border p-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-wide text-gray-500">{n.severity}</span>
                            <h2 className="text-lg font-semibold">{n.title}</h2>
                        </div>
                        {n.body ? <p className="mt-2 text-sm text-muted-foreground">{n.body}</p> : null}
                        <div className="mt-2 text-xs text-gray-500">
                            Active from {new Date(n.startAt).toLocaleString()}
                            {n.endAt ? ` to ${new Date(n.endAt).toLocaleString()}` : ""}
                        </div>
                        {n.href ? (
                            <a href={n.href} className="mt-2 inline-block text-sm underline underline-offset-2">
                                Open
                            </a>
                        ) : null}
                    </article>
                ))}
            </div>
            
        </main>
        <SiteFooter/>
        </>
    )
}
