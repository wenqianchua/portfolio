'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { works } from '@/data/works'

// ─── Narrative ───────────────────────────────────────────────────────────────

const NARRATIVE = `Hello, I'm Wen. ☁️

UX Researcher and Product Designer —
I design with people, not just for them.

Over the past few years I've worked across agencies,
non-profits, startups, and enterprise.
Each context taught me something new about how people think,
what they need, and what gets in the way.

Mosaik. M2M. Carrots Lab. Vandewiele. Jora.
And when work ends — I research games.
Because how people play tells us everything about how people live.

Scroll to see the work ↓`

const CHARS_PER_KEY = 3
const CHARS_PER_TAP = 15

type Stage = 'intro' | 'typing' | 'complete'

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav({ visible, scrolled }: { visible: boolean; scrolled: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
            px-6 py-4 transition-all duration-300
            ${scrolled ? 'backdrop-blur-md border-b border-zinc-200/60 bg-white/70' : ''}`}
        >
          <Link href="/" className="font-jetbrains text-sm font-medium text-zinc-800">
            WQ ☁️
          </Link>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/work" className="hover:text-zinc-800 transition-colors">Work</Link>
            <Link href="/about" className="hover:text-zinc-800 transition-colors">About</Link>
            <a
              href={process.env.NEXT_PUBLIC_RESUME_LINK || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800 transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

// ─── Work Grid ───────────────────────────────────────────────────────────────

function WorkGrid() {
  return (
    <section id="work" className="px-6 py-24 max-w-[680px] mx-auto">
      <h2 className="font-jetbrains text-xs uppercase tracking-widest text-zinc-400 mb-10">
        Selected Work
      </h2>
      <div className="flex flex-col gap-4">
        {works.map((work, i) => (
          <motion.div
            key={work.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <Link
              href={`/work/${work.slug}`}
              className={`group flex items-start justify-between gap-4 rounded-xl p-5
                border border-transparent hover:border-zinc-200 transition-all duration-200
                ${work.coverColor} ${work.darkTheme ? 'text-white' : ''}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-jetbrains text-xs uppercase tracking-widest
                    ${work.darkTheme ? 'text-zinc-400' : 'text-zinc-400'}`}>
                    {work.spectrum} · {work.year}
                  </span>
                </div>
                <h3 className={`font-lora text-lg font-medium mb-1
                  ${work.darkTheme ? 'text-white' : 'text-zinc-900'}`}>
                  {work.title}
                </h3>
                <p className={`text-sm leading-relaxed line-clamp-2
                  ${work.darkTheme ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {work.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {work.tags.slice(0, 3).map(tag => (
                    <span key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full
                        ${work.darkTheme
                          ? 'bg-white/10 text-zinc-300'
                          : 'bg-white/60 text-zinc-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className={`text-lg mt-1 group-hover:translate-x-1 transition-transform
                ${work.darkTheme ? 'text-zinc-400' : 'text-zinc-300'}`}>
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const prefersReduced = useReducedMotion()
  const [stage, setStage] = useState<Stage>('intro')
  const [charCount, setCharCount] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const workRef = useRef<HTMLDivElement>(null)
  const autoScrolled = useRef(false)

  const displayed = NARRATIVE.slice(0, charCount)
  const progress = charCount / NARRATIVE.length
  const isComplete = charCount >= NARRATIVE.length

  // Detect mobile / reduced motion
  useEffect(() => {
    setIsMobile('ontouchstart' in window)
    if (prefersReduced) {
      setCharCount(NARRATIVE.length)
      setStage('complete')
    }
  }, [prefersReduced])

  // Complete state
  useEffect(() => {
    if (isComplete && stage === 'typing') {
      setStage('complete')
    }
  }, [isComplete, stage])

  // Auto-scroll after complete
  useEffect(() => {
    if (stage === 'complete' && !autoScrolled.current) {
      autoScrolled.current = true
      setTimeout(() => {
        workRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 2500)
    }
  }, [stage])

  // Scroll tracking for nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const advance = useCallback((chars: number) => {
    setStage(s => s === 'intro' ? 'typing' : s)
    setCharCount(c => Math.min(c + chars, NARRATIVE.length))
  }, [])

  const skip = useCallback(() => {
    setCharCount(NARRATIVE.length)
    setStage('complete')
    setTimeout(() => workRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [])

  // Keyboard handler
  useEffect(() => {
    if (stage === 'complete') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { skip(); return }
      if (e.metaKey || e.ctrlKey || e.altKey) return
      advance(CHARS_PER_KEY)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [stage, advance, skip])

  // Touch ripple state
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null)
  const rippleId = useRef(0)

  const onTap = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (!isMobile || stage === 'complete') return
    const touch = 'touches' in e ? e.touches[0] : e
    rippleId.current += 1
    setRipple({ x: touch.clientX, y: touch.clientY, id: rippleId.current })
    setTimeout(() => setRipple(null), 500)
    advance(CHARS_PER_TAP)
  }, [isMobile, stage, advance])

  const bgColor = stage === 'intro' ? '#0f0f0f' : '#fafaf8'

  return (
    <>
      {/* Skip link */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
          focus:z-[100] focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white
          focus:rounded-lg focus:text-sm"
      >
        Skip to work
      </a>

      <Nav visible={stage !== 'intro'} scrolled={scrolled} />

      {/* Skip button */}
      {stage !== 'complete' && (
        <button
          onClick={skip}
          className="fixed top-4 right-4 z-50 text-xs text-zinc-400
            hover:text-zinc-600 transition-colors font-jetbrains"
        >
          skip →
        </button>
      )}

      {/* Hero */}
      <motion.div
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="min-h-screen relative"
        onClick={isMobile ? onTap : undefined}
        onTouchStart={isMobile ? onTap : undefined}
      >
        {/* Tap ripple */}
        <AnimatePresence>
          {ripple && (
            <motion.div
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.4 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed pointer-events-none w-12 h-12 rounded-full bg-zinc-400 -translate-x-1/2 -translate-y-1/2 z-40"
              style={{ left: ripple.x, top: ripple.y }}
            />
          )}
        </AnimatePresence>

        {/* Intro state */}
        <AnimatePresence>
          {stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center min-h-screen gap-4"
            >
              <span
                className="font-jetbrains text-amber-400 text-2xl"
                style={{ animation: 'blink 1s step-end infinite' }}
              >
                |
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="font-jetbrains text-sm text-zinc-500"
              >
                {isMobile ? 'tap anywhere to reveal →' : 'press any key →'}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing / complete state */}
        <AnimatePresence>
          {stage !== 'intro' && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen pt-24 pb-32"
            >
              <article className="max-w-[680px] mx-auto px-6">
                {/* Page icon */}
                <div className="text-5xl mb-8 select-none">☁️</div>

                {/* Narrative text */}
                <p
                  className="font-lora text-lg leading-loose text-[#37352f] whitespace-pre-wrap"
                >
                  {displayed}
                  {stage === 'typing' && (
                    <span
                      className="font-jetbrains text-amber-400 ml-0.5"
                      style={{ animation: 'blink 1s step-end infinite' }}
                    >
                      |
                    </span>
                  )}
                </p>

                {/* Complete CTA */}
                <AnimatePresence>
                  {stage === 'complete' && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="font-jetbrains text-sm text-zinc-400 mt-8"
                    >
                      scroll to see the work ↓
                    </motion.p>
                  )}
                </AnimatePresence>
              </article>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom hint */}
        <AnimatePresence>
          {stage === 'typing' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-6 left-6 font-jetbrains text-xs text-zinc-400 z-40"
            >
              keep typing · esc to skip
            </motion.p>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        <AnimatePresence>
          {stage === 'typing' && (
            <motion.div
              className="fixed bottom-0 left-0 h-px bg-zinc-300 z-40"
              initial={{ width: '0%' }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Work section */}
      <div ref={workRef}>
        <WorkGrid />
      </div>
    </>
  )
}
