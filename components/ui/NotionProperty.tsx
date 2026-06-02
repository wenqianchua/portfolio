interface Props {
  label: string
  value: string | string[]
  type?: 'text' | 'badge' | 'tags' | 'link'
  href?: string
}

export function NotionProperty({ label, value, type = 'text', href }: Props) {
  const values = Array.isArray(value) ? value : [value]

  return (
    <div className="flex gap-4 py-1.5 border-b border-zinc-100 items-start">
      <span className="text-sm text-zinc-400 min-w-[100px] flex-shrink-0 pt-0.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {type === 'tags' && values.map(v => (
          <span key={v}
            className="text-xs px-2 py-0.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500">
            {v}
          </span>
        ))}
        {type === 'badge' && values.map(v => (
          <span key={v}
            className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-900 text-white font-medium">
            {v}
          </span>
        ))}
        {type === 'link' && (
          <a href={href ?? String(value)} target="_blank" rel="noopener noreferrer"
            className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-900 transition-colors">
            {values[0]} ↗
          </a>
        )}
        {type === 'text' && (
          <span className="text-sm text-zinc-700">{values[0]}</span>
        )}
      </div>
    </div>
  )
}
