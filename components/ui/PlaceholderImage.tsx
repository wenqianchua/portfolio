interface Props {
  label?: string
  aspectRatio?: '16/9' | '4/3' | '1/1'
  className?: string
}

const ratioClass: Record<NonNullable<Props['aspectRatio']>, string> = {
  '16/9': 'aspect-video',
  '4/3':  'aspect-[4/3]',
  '1/1':  'aspect-square',
}

export function PlaceholderImage({
  label,
  aspectRatio = '16/9',
  className = '',
}: Props) {
  return (
    <div
      className={`w-full rounded-xl bg-zinc-100 flex items-center justify-center
        ${ratioClass[aspectRatio]} ${className}`}
    >
      <span className="text-xs text-zinc-400 uppercase tracking-widest">
        {label ?? 'image'}
      </span>
    </div>
  )
}
