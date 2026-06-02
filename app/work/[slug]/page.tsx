import { works } from '@/data/works'
import WorkSlugClient from '@/components/sections/WorkSlugClient'

export function generateStaticParams() {
  return works.map(w => ({ slug: w.slug }))
}

export default function WorkSlugPage({
  params,
}: {
  params: { slug: string }
}) {
  return <WorkSlugClient params={params} />
}
