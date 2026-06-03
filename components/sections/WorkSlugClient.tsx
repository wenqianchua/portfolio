'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { works } from '@/data/works'
import { isUnlocked } from '@/lib/auth'
import { UnlockGate } from '@/components/gate/UnlockGate'
import { FullCaseStudy } from '@/components/sections/FullCaseStudy'

// ─── Game UXR Hero (full viewport) ───────────────────────────────────────────

function GameHero({ work }: { work: typeof works[0] }) {
  return (
    <div
      data-theme="dark-game"
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
      style={{ minHeight: '100svh' }}
    >
      {/* Background image — right-center so Frey's face is visible */}
      {work.coverImage && (
        <Image
          src={work.coverImage}
          alt={work.title}
          fill
          priority
          className="object-cover object-right-center"
          style={{ objectPosition: 'right center' }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, #0a0a0a 85%)',
        }}
      />

      {/* Content — centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 z-10">
        {/* Top badge */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-[#c9933a] text-black text-[10px] font-medium
            uppercase tracking-widest px-3 py-1 rounded-full">
            Personal Research · PlayStation · 2023–Ongoing
          </span>
        </div>

        <div className="text-center">
          <p className="font-jetbrains text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
            A UX Research Project · Wen Qian Chua
          </p>
          <h1
            className="font-lora text-4xl md:text-6xl text-[#e8e8e4]"
            style={{ letterSpacing: '0.25em' }}
          >
            GAME UXR
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-[#c9933a] text-lg"
        >
          ↓
        </motion.div>
      </div>
    </div>
  )
}

// ─── Standard Hero ────────────────────────────────────────────────────────────

function StandardHero({ work }: { work: typeof works[0] }) {
  return (
    <div
      className={`relative w-full flex flex-col justify-end overflow-hidden ${work.coverColor}`}
      style={{ minHeight: '60vh' }}
    >
      {work.coverImage && (
        <Image
          src={work.coverImage}
          alt={work.title}
          fill
          priority
          className="object-cover opacity-80"
        />
      )}

      <div className="relative z-10 max-w-[680px] mx-auto w-full px-6 pb-12 pt-28">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full
            font-medium bg-white/80 text-zinc-500 backdrop-blur-sm">
            {work.spectrum}
          </span>
          <span className="font-jetbrains text-xs text-zinc-400">{work.year}</span>
        </div>
        <h1 className="font-lora text-4xl md:text-5xl leading-tight mb-2 text-zinc-900">
          {work.title}
        </h1>
        <p className="text-sm text-zinc-500">{work.client}</p>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-zinc-300 text-lg"
        >
          ↓
        </motion.div>
      </div>
    </div>
  )
}

// ─── Metadata bar ─────────────────────────────────────────────────────────────

function MetadataBar({ work }: { work: typeof works[0] }) {
  const dark = work.darkTheme
  const rows = [
    { label: 'Client',   value: work.client },
    { label: 'Spectrum', value: work.spectrum },
    { label: 'Year',     value: work.year },
  ]

  return (
    <div className={`border-b px-6 py-8
      ${dark
        ? 'bg-[#111111] border-white/5'
        : 'border-zinc-100 max-w-[680px] mx-auto'}`}
    >
      <div className={`grid grid-cols-[100px_1fr] gap-y-3 text-sm
        ${dark ? 'max-w-[680px] mx-auto' : ''}`}>
        {rows.map(row => (
          <>
            <span key={`${row.label}-k`}
              className={`font-jetbrains text-xs uppercase tracking-widest pt-0.5
                ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>
              {row.label}
            </span>
            <span key={`${row.label}-v`}
              className={dark ? 'text-[#888880]' : 'text-zinc-700'}>
              {row.value}
            </span>
          </>
        ))}

        <span className={`font-jetbrains text-xs uppercase tracking-widest pt-1.5
          ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>
          Tags
        </span>
        <div className="flex flex-wrap gap-1.5">
          {work.tags.map(tag => (
            <span key={tag}
              className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide
                ${dark
                  ? 'bg-white/5 border border-white/10 text-zinc-500'
                  : 'bg-zinc-50 border border-zinc-200 text-zinc-500'}`}>
              {tag}
            </span>
          ))}
        </div>

        {work.behanceUrl && (
          <>
            <span className={`font-jetbrains text-xs uppercase tracking-widest pt-0.5
              ${dark ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Behance
            </span>
            <a href={work.behanceUrl} target="_blank" rel="noopener noreferrer"
              className={`underline underline-offset-2 transition-colors text-sm
                ${dark
                  ? 'text-[#c9933a] hover:text-[#b8832e]'
                  : 'text-zinc-600 hover:text-zinc-900'}`}>
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
  work,
  onUnlock,
}: {
  work: typeof works[0]
  onUnlock: () => void
}) {
  const dark = work.darkTheme

  return (
    <div>
      <MetadataBar work={work} />

      <div className="max-w-[680px] mx-auto px-6 py-10">
        <p className={`font-lora text-lg leading-loose mb-8
          ${dark ? 'text-[#e8e8e4]' : 'text-[#37352f]'}`}>
          {work.shortDescription}
        </p>

        <p className={`font-lora text-xl italic leading-relaxed pl-5 mb-12
          ${dark
            ? 'border-l-2 border-[#c9933a]/40 text-[#888880]'
            : 'border-l-2 border-zinc-200 text-zinc-500'}`}>
          {work.teaser}
        </p>

        {/* Blurred preview */}
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <div
            className={`absolute inset-0 ${dark ? 'bg-[#111]' : 'bg-zinc-100'}`}
            style={{ filter: 'blur(12px) brightness(0.8)', transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
            <span className={`text-sm font-jetbrains
              ${dark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Continue reading
            </span>
            <span className={`text-lg ${dark ? 'text-[#c9933a]' : 'text-zinc-400'}`}>→</span>
          </div>
        </div>
      </div>

      <div className={`border-t mt-0 ${dark ? 'border-white/5' : 'border-zinc-100'}`}>
        <UnlockGate onUnlock={onUnlock} projectTitle={work.title} dark={dark} />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkSlugPage({ params }: { params: { slug: string } }) {
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
    <main
      data-theme={dark ? 'dark-game' : undefined}
      className={`min-h-screen ${dark ? 'bg-[#0a0a0a] text-[#e8e8e4]' : 'bg-white'}`}
    >
      {/* Fixed nav */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-6 py-4 backdrop-blur-md border-b
        ${dark
          ? 'border-white/[0.08] bg-[#0a0a0a]/80'
          : 'border-zinc-100/80 bg-white/80'}`}>
        <Link href="/"
          className={`font-jetbrains text-sm font-medium transition-colors
            ${dark ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-500 hover:text-zinc-900'}`}>
          WQ ☁️
        </Link>
        <Link href="/work"
          className={`font-jetbrains text-xs uppercase tracking-widest transition-colors
            ${dark ? 'text-zinc-600 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-700'}`}>
          ← Work
        </Link>
      </div>

      {/* Hero */}
      {dark ? <GameHero work={work} /> : <StandardHero work={work} />}

      {mounted && (
        unlocked
          ? <FullCaseStudy slug={slug} />
          : <PreviewWithGate work={work} onUnlock={() => setUnlocked(true)} />
      )}
    </main>
  )
}
