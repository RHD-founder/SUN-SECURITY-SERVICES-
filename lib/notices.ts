// lib/notices.ts

export type NoticeSeverity = "info" | "warning" | "urgent";

export interface Notice {
  id: string;
  title: string;
  body?: string;
  href?: string;
  severity: NoticeSeverity;
  startAt: string; // ISO date string
  endAt?: string; // ISO date string
  dismissible: boolean;
  priority?: number;
  audience?: "all" | "logged-in";
  requireModal?: boolean;
}

// In-memory demo data (replace with DB later)
const severityWeight: Record<NoticeSeverity, number> = {
  info: 0,
  warning: 1,
  urgent: 2,
};

const NOTICES_DATA: Notice[] = [
  {
    id: "n-now",
    title: "Welcome! This is a live test notice.",
    body: "This appears in the /notices archive and the banner when active.",
    href: "/notices/n-now",
    severity: "info",
    startAt: new Date(Date.now() - 60_000).toISOString(),
    endAt: new Date(Date.now() + 7 * 24 * 3600_000).toISOString(),
    dismissible: true,
    priority: 50,
  },
  // {
  //   id: "n-urgent",
  //   title: "Urgent: Immediate action required",
  //   body: "This urgent notice may open as a pop-up depending on your UI gate.",
  //   href: "/notices/n-urgent",
  //   severity: "urgent",
  //   startAt: new Date(Date.now() - 60_000).toISOString(),
  //   endAt: new Date(Date.now() + 48 * 3600_000).toISOString(),
  //   dismissible: false,
  //   priority: 100,
  //   requireModal: true,
  // },
];

const isActive = (n: Notice, now: Date) => {
  const s = new Date(n.startAt).getTime();
  const e = n.endAt ? new Date(n.endAt).getTime() : Number.POSITIVE_INFINITY;
  const t = now.getTime();
  return t >= s && t <= e;
};

export function getAllNotices(): Notice[] {
  // copy to prevent accidental mutation
  return [...NOTICES_DATA].sort((a, b) => {
    const sw = severityWeight[b.severity] - severityWeight[a.severity];
    if (sw !== 0) return sw;
    const pr = (b.priority ?? 0) - (a.priority ?? 0);
    if (pr !== 0) return pr;
    return new Date(b.startAt).getTime() - new Date(a.startAt).getTime();
  });
}

export function getActiveNotices(now = new Date()): Notice[] {
  return getAllNotices().filter((n) => isActive(n, now));
}
