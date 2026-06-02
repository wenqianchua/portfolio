import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wen Qian Chua — UX Researcher & Product Designer',
}

// Keyboard hero + work grid (feature/keyboard-hero adds full interactive UI)
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <div className="max-w-[720px] mx-auto px-6 pt-24">
        <p className="font-lora text-lg text-[#37352f]">
          Portfolio loading — merge feature branches into dev to see full UI.
        </p>
      </div>
    </main>
  )
}
