import { WorkSection } from '@/components/sections/WorkSection'

export const metadata = {
  title: 'Work — Wen Qian Chua',
  description: 'Selected projects across UX research, product design, and speculative design.',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] pt-20">
      <WorkSection />
    </main>
  )
}
