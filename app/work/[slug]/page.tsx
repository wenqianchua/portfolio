import type { Metadata } from 'next'
import { works } from '@/data/works'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = works.find(w => w.slug === params.slug)
  if (!work) return { title: 'Not Found' }
  return {
    title: `${work.title} — Case Study`,
    description: work.shortDescription,
    openGraph: {
      title: `${work.title} — Case Study · Wen Qian Chua`,
      description: work.teaser,
    },
  }
}

export function generateStaticParams() {
  return works.map(w => ({ slug: w.slug }))
}

export default function WorkSlugPage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {params.slug} — case study shell (feature/case-studies adds full UI)
    </main>
  )
}
