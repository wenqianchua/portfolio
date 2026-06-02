import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#fafaf8] px-6 text-center">
      <span className="text-7xl select-none">☁️</span>
      <div>
        <h1 className="font-lora text-2xl text-zinc-800 mb-2">
          This page drifted away.
        </h1>
        <p className="text-sm text-zinc-400">
          404 — the content you&apos;re looking for isn&apos;t here.
        </p>
      </div>
      <Link
        href="/"
        className="px-5 py-2.5 bg-zinc-900 text-white text-sm rounded-lg
          hover:bg-zinc-700 transition-colors font-jetbrains"
      >
        ← Go home
      </Link>
    </main>
  )
}
