interface Props {
  label?: string
}

export function NotionDivider({ label }: Props) {
  if (!label) {
    return <hr className="border-zinc-100 my-10" />
  }
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="flex-1 h-px bg-zinc-100" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 flex-shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-zinc-100" />
    </div>
  )
}
