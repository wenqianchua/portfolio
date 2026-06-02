interface Props {
  caption?: string
  dark?: boolean
  className?: string
}

export function PlaceholderImage({ caption, dark, className = '' }: Props) {
  return (
    <figure className={className}>
      <div className={`w-full rounded-xl aspect-video flex items-center justify-center
        ${dark ? 'bg-white/5 border border-white/10' : 'bg-zinc-100 border border-zinc-200'}`}>
        <span className={`text-xs uppercase tracking-widest
          ${dark ? 'text-zinc-600' : 'text-zinc-300'}`}>
          image
        </span>
      </div>
      {caption && (
        <figcaption className={`text-xs mt-2 text-center
          ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
