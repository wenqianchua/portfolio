'use client'
// Client component — rendered by the server page wrapper

import { useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { works } from '@/data/works'
import { isUnlocked } from '@/lib/auth'
import { UnlockGate } from '@/components/gate/UnlockGate'
import { FullCaseStudy } from '@/components/sections/FullCaseStudy'

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero({ slug }: { slug: string }) {
  const work = works.find(w => w.slug === slug)
  if (!work) return null
  const dark = work.darkTheme

  return (
    <div
      className={`relative w-full flex flex-col justify-end overflow-hidden
        ${work.coverColor} ${dark ? 'bg-[#0f0f0f]' : ''}`}
      style={{ minHeight: '60vh' }}
    >
      {work.coverImage && (
        <Image
          src={work.coverImage}
          alt={work.title}
          fill
          priority
          className={`object-cover ${dark ? 'opacity-40' : 'opacity-80'}`}
        />
      )}
      {dark && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent" />
      )}

      <div className="relative z-10 max-w-[680px] mx-auto w-full px-6 pb-12 pt-28">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium
            ${dark ? 'bg-white/10 text-white/60' : 'bg-white/80 text-zinc-500 backdrop-blur-sm'}`}>
            {work.spectrum}
          </span>
          <span className={`font-jetbrains text-xs ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            {work.year}
          </span>
        </div>
        <h1 className={`font-lora text-4xl md:text-5xl leading-tight mb-2
          ${dark ? 'text-white' : 'text-zinc-900'}`}>
          {work.title}
        </h1>
        <p className={`text-sm ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {work.client}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className={`text-lg ${dark ? 'text-zinc-600' : 'text-zinc-300'}`}
        >
          ↓
        </motion.div>
      </div>
    </div>
  )
}

// ─── Metadata bar ─────────────────────────────────────────────────────────────

function MetadataBar({ slug }: { slug: string }) {
  const work = works.find(w => w.slug === slug)
  if (!work) return null

  const rows = [
    { label: 'Client', value: work.client },
    { label: 'Spectrum', value: work.spectrum },
    { label: 'Year', value: work.year },
  ]

  return (
    <div className="max-w-[680px] mx-auto px-6 py-8 border-b border-zinc-100">
      <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm">
        {rows.map(row => (
          <>
            <span key={`${row.label}-k`} className="text-zinc-400 font-jetbrains text-xs uppercase tracking-widest pt-0.5">
              {row.label}
            </span>
            <span key={`${row.label}-v`} className="text-zinc-700">{row.value}</span>
          </>
        ))}

        <span className="text-zinc-400 font-jetbrains text-xs uppercase tracking-widest pt-1.5">Tags</span>
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-50
              border border-zinc-200 text-zinc-500 uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        {work.behanceUrl && (
          <>
            <span className="text-zinc-400 font-jetbrains text-xs uppercase tracking-widest pt-0.5">Behance</span>
            <a href={work.behanceUrl} target="_blank" rel="noopener noreferrer"
              className="text-zinc-600 underline underline-offset-2 hover:text-zinc-900 transition-colors text-sm">
              View on Behance ↗
            </a>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Preview with gate ────────────────────────────────────────────────────────

function PreviewWithGate({
  slug,
  onUnlock,
}: {
  slug: string
  onUnlock: () => void
}) {
  const work = works.find(w => w.slug === slug)
  if (!work) return null

  return (
    <div>
      <MetadataBar slug={slug} />

      <div className="max-w-[680px] mx-auto px-6 py-10">
        {/* Short description */}
        <p className="font-lora text-lg leading-loose text-[#37352f] mb-8">
          {work.shortDescription}
        </p>

        {/* Teaser pull-quote */}
        <p className="font-lora text-xl italic text-zinc-500 leading-relaxed border-l-2
          border-zinc-200 pl-5 mb-12">
          {work.teaser}
        </p>

        {/* Blurred preview image */}
        <div className="relative rounded-2xl overflow-hidden mb-0" style={{ aspectRatio: '16/9' }}>
          <div
            className="absolute inset-0 bg-zinc-100"
            style={{
              filter: 'blur(12px) brightness(0.8)',
              transform: 'scale(1.05)',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
            <span className="text-zinc-500 text-sm font-jetbrains">Continue reading</span>
            <span className="text-zinc-400 text-lg">→</span>
          </div>
        </div>
      </div>

      {/* Gate */}
      <div className="border-t border-zinc-100 mt-0">
        <UnlockGate onUnlock={onUnlock} projectTitle={work.title} />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkSlugPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const [unlocked, setUnlocked] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isUnlocked()) setUnlocked(true)
  }, [])

  const work = works.find(w => w.slug === slug)
  const dark = work?.darkTheme ?? false

  if (!work) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400">Project not found.</p>
          <Link href="/work" className="text-sm underline mt-2 inline-block">← All work</Link>
        </div>
      </main>
    )
  }

  return (
    <main className={`min-h-screen ${dark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      {/* Back nav */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-6 py-4 backdrop-blur-md border-b
        ${dark ? 'border-white/10 bg-[#0a0a0a]/80' : 'border-zinc-100/80 bg-white/80'}`}>
        <Link href="/" className="font-jetbrains text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          WQ ☁️
        </Link>
        <Link href="/work"
          className={`font-jetbrains text-xs uppercase tracking-widest transition-colors
            ${dark ? 'text-zinc-600 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-700'}`}>
          ← Work
        </Link>
      </div>

      <Hero slug={slug} />

      {/* Avoid flash of gate on already-unlocked sessions */}
      {mounted && (
        unlocked
          ? <FullCaseStudy slug={slug} />
          : <PreviewWithGate slug={slug} onUnlock={() => setUnlocked(true)} />
      )}
    </main>
  )
}
