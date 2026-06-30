/**
 * PageWrapper - provides the shared page layout (top padding for navbar,
 * max-width container, fade-in transition) for each "page" view.
 */
export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen px-8 pt-[120px] page-enter page-enter-active">
      <div className="max-w-[1080px] mx-auto pb-20">{children}</div>
    </div>
  )
}
