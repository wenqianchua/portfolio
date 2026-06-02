interface Props {
  emoji: string
  children: React.ReactNode
  variant?: 'yellow' | 'dark'
}

export function NotionCallout({ emoji, children, variant = 'yellow' }: Props) {
  return (
    <div className={`flex gap-4 rounded-xl px-5 py-4 my-8
      ${variant === 'dark'
        ? 'bg-white/5 border border-white/10'
        : 'bg-amber-50 border border-amber-100'}`}
    >
      <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
      <p className={`text-sm leading-relaxed
        ${variant === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
        {children}
      </p>
    </div>
  )
}
