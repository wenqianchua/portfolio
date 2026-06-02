'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { works, WorkItem } from '@/data/works'

// ─── Types & constants ────────────────────────────────────────────────────────

const SPECTRUMS = [
  'All',
  'Agency Work',
  'Social Impact',
  'Product Design',
  'Enterprise UX',
  'Speculative Design',
  'Research & Play',
] as const

// ─── Lock badge ───────────────────────────────────────────────────────────────

function LockBadge() {
  const [tip, setTip] = useState(false)
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        onFocus={() => setTip(true)}
        onBlur={() => setTip(false)}
        aria-label="Password protected case study"
        className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center
                   justify-center text-xs shadow-sm"
      >
        🔒
      </button>
      <AnimatePresence>
        {tip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-9 whitespace-nowrap bg-zinc-900 text-white
                       text-xs rounded-lg px-3 py-1.5 z-10 pointer-events-none"
          >
            Case study · password protected
            <div className="absolute -top-1 right-2.5 w-2 h-2 bg-zinc-900 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Spectrum badge ───────────────────────────────────────────────────────────

function SpectrumBadge({ label, dark }: { label: string; dark: boolean }) {
  return (
    <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full
      font-medium
      ${dark ? 'bg-white/10 text-white/70' : 'bg-white/80 text-zinc-500 backdrop-blur-sm'}`}>
      {label}
    </span>
  )
}

// ─── Wide card ────────────────────────────────────────────────────────────────

function WideCard({ work }: { work: WorkItem }) {
  const isGame = work.slug === 'game-uxr'

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group"
    >
      <Link
        href={`/work/${work.slug}`}
        className="block rounded-2xl overflow-hidden border border-transparent
                   hover:border-zinc-200 transition-colors duration-200"
      >
        {/* Image area */}
        <div
          className={`relative min-h-[280px] flex-shrink-0 ${work.coverColor}
            ${isGame ? 'bg-[#0f0f0f]' : ''}`}
          style={isGame ? {
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")
            `,
          } : undefined}
        >
          {work.coverImage && (
            <>
              <Image
                src={work.coverImage}
                alt={work.title}
                fill
                className={`object-cover transition-transform duration-500
                  group-hover:scale-[1.02]
                  ${isGame ? 'opacity-40' : 'opacity-90'}`}
              />
              {isGame && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent" />
              )}
            </>
          )}

          {/* Badges row */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            <SpectrumBadge label={work.spectrum} dark={work.darkTheme} />
            <LockBadge />
          </div>

          {/* Game-specific title overlay */}
          {isGame && (
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-jetbrains text-xs uppercase tracking-widest text-zinc-500 mb-1">
                {work.year}
              </p>
              <h3 className="font-lora text-2xl text-white leading-snug">
                {work.title}
              </h3>
            </div>
          )}
        </div>

        {/* Text area (non-game) */}
        {!isGame && (
          <div className="bg-white px-6 py-5">
            <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
              {work.client} · {work.year}
            </p>
            <h3 className="font-lora text-xl text-zinc-900 mb-2 leading-snug">
              {work.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4">
              {work.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {work.tags.slice(0, 3).map(tag => (
                <span key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-50
                             border border-zinc-100 text-zinc-400 uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Game text area */}
        {isGame && (
          <div className="bg-[#0f0f0f] px-6 py-5">
            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-4">
              {work.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {work.tags.slice(0, 3).map(tag => (
                <span key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/5
                             border border-white/10 text-zinc-500 uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  )
}

// ─── Narrow card ──────────────────────────────────────────────────────────────

function NarrowCard({ work }: { work: WorkItem }) {
  const isGame = work.slug === 'game-uxr'

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group h-full"
    >
      <Link
        href={`/work/${work.slug}`}
        className={`relative flex flex-col justify-end rounded-2xl overflow-hidden
                   min-h-[340px] h-full border border-transparent
                   hover:border-zinc-200 transition-colors duration-200
                   ${work.coverColor} ${isGame ? 'bg-[#0f0f0f]' : ''}`}
        style={isGame ? {
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")
          `,
        } : undefined}
      >
        {work.coverImage && (
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            className={`object-cover transition-transform duration-500
              group-hover:scale-[1.02]
              ${isGame ? 'opacity-30' : 'opacity-80'}`}
          />
        )}

        {/* Gradient for readability */}
        <div className={`absolute inset-0 bg-gradient-to-t
          ${work.darkTheme
            ? 'from-black/80 via-black/20 to-transparent'
            : 'from-black/20 via-transparent to-transparent'}`}
        />

        {/* Lock badge top-right */}
        <div className="absolute top-4 right-4 z-10">
          <LockBadge />
        </div>

        {/* Title overlay */}
        <div className="relative z-10 p-5">
          <h3 className={`font-lora text-lg leading-snug mb-1
            ${work.darkTheme ? 'text-white' : 'text-zinc-900'}`}>
            {work.title}
          </h3>
          <p className={`font-jetbrains text-[10px] uppercase tracking-widest
            ${work.darkTheme ? 'text-zinc-500' : 'text-zinc-500'}`}>
            {work.year}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

// ─── Filter chips ─────────────────────────────────────────────────────────────

function FilterChips({
  active,
  onChange,
}: {
  active: string
  onChange: (v: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="flex gap-2 overflow-x-auto pb-1 no-scrollbar"
      style={{ scrollbarWidth: 'none' }}
    >
      {SPECTRUMS.map(spectrum => (
        <button
          key={spectrum}
          onClick={() => onChange(spectrum)}
          className={`relative flex-shrink-0 px-4 py-1.5 rounded-full text-xs
                     transition-colors duration-200 font-medium
                     ${active === spectrum
                       ? 'bg-zinc-900 text-white'
                       : 'border border-zinc-200 text-zinc-500 hover:border-zinc-400 bg-white'}`}
        >
          {active === spectrum && (
            <motion.span
              layoutId="chip-active"
              className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          {spectrum}
        </button>
      ))}
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? works
    : works.filter(w => w.spectrum === activeFilter)

  // Pair up cards: [wide, narrow], [narrow, wide], …
  const rows: Array<{ wide: WorkItem; narrow: WorkItem | null }> = []
  for (let i = 0; i < filtered.length; i += 2) {
    rows.push({ wide: filtered[i], narrow: filtered[i + 1] ?? null })
  }

  return (
    <section id="work" className="px-4 md:px-8 py-20 max-w-[1100px] mx-auto">
      {/* Section header */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 small-caps mb-1">
          — spectrum —
        </p>
        <p className="text-[10px] text-zinc-300 tracking-widest uppercase">
          7 projects · 2020–Present
        </p>
      </div>

      {/* Filter chips */}
      <div className="mb-10">
        <FilterChips active={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-4"
        >
          {rows.map(({ wide, narrow }, rowIdx) => (
            <div
              key={wide.slug}
              className={`flex flex-col md:flex-row gap-4
                ${rowIdx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Wide card: 65% */}
              <div className="md:w-[65%]">
                <WideCard work={wide} />
              </div>
              {/* Narrow card: 35% */}
              {narrow && (
                <div className="md:w-[35%]">
                  <NarrowCard work={narrow} />
                </div>
              )}
              {/* Odd card at end gets full width narrow */}
              {!narrow && filtered.length % 2 === 1 && rowIdx === rows.length - 1 && (
                <div className="md:w-[35%]" />
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-zinc-400 text-sm py-20">
              No projects in this spectrum yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
