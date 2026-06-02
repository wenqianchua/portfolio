interface Props {
  children: React.ReactNode
}

export function NotionPullQuote({ children }: Props) {
  return (
    <blockquote className="border-l-4 border-zinc-800 pl-6 my-8">
      <p className="text-xl md:text-2xl font-lora italic font-light text-zinc-700 leading-snug">
        {children}
      </p>
    </blockquote>
  )
}
