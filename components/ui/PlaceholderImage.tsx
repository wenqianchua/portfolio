interface Props {
  label?: string
  caption?: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
  dark?: boolean
  className?: string
}

const ratioClass: Record<NonNullable<Props['aspectRatio']>, string> = {
  '16/9': 'aspect-video',
  '4/3':  'aspect-[4/3]',
  '1/1':  'aspect-square',
}

export function PlaceholderImage({
  label,
  caption,
  aspectRatio = '16/9',
  dark = false,
  className = '',
}: Props) {
  return (
    <figure className={className}>
      <div
        className={`w-full rounded-xl flex items-center justify-center
          ${ratioClass[aspectRatio]}
          ${dark ? 'bg-white/5 border border-white/10' : 'bg-zinc-100 border border-zinc-200'}`}
      >
        <span className={`text-xs uppercase tracking-widest
          ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {label ?? 'image'}
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
