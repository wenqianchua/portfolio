import { works } from '@/data/works'

type Spectrum = typeof works[number]['spectrum']

const colorMap: Record<string, string> = {
  'Agency Work':        'bg-amber-100 text-amber-800',
  'Social Impact':      'bg-teal-100 text-teal-800',
  'Product Design':     'bg-violet-100 text-violet-800',
  'Enterprise UX':      'bg-slate-100 text-slate-700',
  'Speculative Design': 'bg-purple-100 text-purple-800',
  'Research & Play':    'bg-zinc-800 text-zinc-100',
}

interface Props {
  spectrum: Spectrum | string
  size?: 'sm' | 'md'
}

export function SpectrumBadge({ spectrum, size = 'md' }: Props) {
  const colors = colorMap[spectrum] ?? 'bg-zinc-100 text-zinc-600'
  return (
    <span className={`inline-flex items-center rounded-full font-medium
      ${size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'}
      ${colors}`}>
      {spectrum}
    </span>
  )
}
