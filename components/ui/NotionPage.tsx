interface Props {
  title: string
  icon?: string
  children: React.ReactNode
}

export function NotionPage({ title, icon, children }: Props) {
  return (
    <div className="max-w-[720px] mx-auto px-6 md:px-0 pt-24 pb-32">
      {icon && (
        <div className="text-5xl mb-4 select-none">{icon}</div>
      )}
      <h1 className="font-lora text-4xl text-zinc-900 mb-10">{title}</h1>
      {children}
    </div>
  )
}
