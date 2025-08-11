import PageTransition from "../_components/page-transition"

export default function WithTransitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTransition />
      {children}
    </>
  )
}
