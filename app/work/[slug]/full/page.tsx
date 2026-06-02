import { redirect } from 'next/navigation'

// The full case study now renders inline on /work/[slug] after unlock.
// This route redirects to the preview page.
export default function WorkFullPage({
  params,
}: {
  params: { slug: string }
}) {
  redirect(`/work/${params.slug}`)
}
