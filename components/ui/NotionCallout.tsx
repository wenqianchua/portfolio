interface Props {
  emoji: string
  children: React.ReactNode
  variant?: 'yellow' | 'blue' | 'gray' | 'dark'
}

const styles: Record<NonNullable<Props['variant']>, { wrap: string; text: string }> = {
  yellow: { wrap: 'bg-amber-50 border-l-4 border-amber-200',  text: 'text-zinc-700' },
  blue:   { wrap: 'bg-blue-50 border-l-4 border-blue-200',    text: 'text-zinc-700' },
  gray:   { wrap: 'bg-zinc-50 border-l-4 border-zinc-200',    text: 'text-zinc-700' },
  dark:   { wrap: 'bg-zinc-900 border-l-4 border-zinc-600',   text: 'text-zinc-100' },
}

export function NotionCallout({ emoji, children, variant = 'yellow' }: Props) {
  const s = styles[variant]
  return (
    <div className={`flex gap-4 rounded-xl px-5 py-4 my-6 ${s.wrap}`}>
      <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
      <div className={`text-sm leading-relaxed ${s.text}`}>{children}</div>
    </div>
  )
}
