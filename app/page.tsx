import { WorkSection } from '@/components/sections/WorkSection'

// Keyboard hero (feature/keyboard-hero) will replace this shell once merged.
// For now, WorkSection is wired in so the grid is testable standalone.
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <WorkSection />
    </main>
  )
}
