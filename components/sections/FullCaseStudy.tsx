import Image from 'next/image'
import Link from 'next/link'
import { works } from '@/data/works'
import { caseStudies } from '@/data/caseStudies'
import { NotionCallout } from '@/components/ui/NotionCallout'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

interface Props { slug: string }

export function FullCaseStudy({ slug }: Props) {
  const work = works.find(w => w.slug === slug)
  const cs = caseStudies.find(c => c.slug === slug)
  const dark = work?.darkTheme ?? false

  if (!work || !cs) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-20 text-center text-zinc-400">
        Case study content coming soon.
      </div>
    )
  }

  const currentIdx = works.findIndex(w => w.slug === slug)
  const nextWork = works[(currentIdx + 1) % works.length]
  const prose = dark ? 'text-[#e8e8e4]' : 'text-[#37352f]'
  const muted = dark ? 'text-zinc-500' : 'text-zinc-400'
  const accent = dark ? '#c9933a' : '#27272a'

  return (
    <div className={dark ? 'bg-[#0a0a0a]' : 'bg-white'}>
      <article className="max-w-[680px] mx-auto px-6 py-16">

        <section className="mb-14">
          <p className={`font-jetbrains text-[10px] uppercase tracking-widest ${muted} mb-5`}>
            The Challenge
          </p>
          <p className={`font-lora text-lg leading-loose ${prose}`}>{cs.challenge}</p>
        </section>

        <blockquote className="my-14 pl-6 py-1" style={{ borderLeft: `4px solid ${accent}` }}>
          <p className={`font-lora text-2xl italic leading-snug ${prose}`}>
            &ldquo;{cs.pullQuote}&rdquo;
          </p>
        </blockquote>

        <section className="mb-14">
          <p className={`font-jetbrains text-[10px] uppercase tracking-widest ${muted} mb-8`}>
            The Approach
          </p>
          <div className="flex flex-col gap-10">
            {cs.approach.map(step => (
              <div key={step.step} className="flex gap-6">
                <span className="font-jetbrains text-xs mt-1 flex-shrink-0 w-7" style={{ color: accent }}>
                  {String(step.step).padStart(2, '0')}
                </span>
                <div>
                  <h3 className={`font-lora text-lg font-medium mb-2 ${prose}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.imageGrid.map((img, i) => (
              img.src && !img.src.includes('placeholder') ? (
                <figure key={i}>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image src={img.src} alt={img.caption} fill className="object-cover" />
                  </div>
                  <figcaption className={`text-xs mt-2 text-center ${muted}`}>{img.caption}</figcaption>
                </figure>
              ) : (
                <PlaceholderImage key={i} caption={img.caption} dark={dark} />
              )
            ))}
          </div>
        </section>

        <section
          className="mb-14 relative rounded-xl overflow-hidden"
          style={dark && work.slug === 'game-uxr' ? {
            backgroundImage: `url('/images/game-uxr/forspoken-hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : undefined}
        >
          {/* Clouds texture overlay — game-uxr only */}
          {dark && work.slug === 'game-uxr' && (
            <div className="absolute inset-0 bg-[#0a0a0a]" style={{ opacity: 0.96 }} />
          )}
          <div className="relative z-10 px-1 py-6">
            <p className={`font-jetbrains text-[10px] uppercase tracking-widest ${muted} mb-6`}>
              What I Learned
            </p>
            <ul className="flex flex-col gap-4">
              {cs.learned.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span style={{ color: accent }} className="flex-shrink-0 mt-1 text-sm">—</span>
                  <p className={`text-sm leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <NotionCallout emoji={cs.callout.emoji} variant={dark ? 'dark' : 'yellow'}>
          {cs.callout.text}
        </NotionCallout>

      </article>

      <div className={`border-t ${dark ? 'border-white/10' : 'border-zinc-100'}`}>
        <div className="max-w-[680px] mx-auto px-6 py-10 flex items-center justify-between">
          <Link href="/work"
            className={`font-jetbrains text-xs uppercase tracking-widest transition-colors
              ${dark ? 'text-zinc-600 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-800'}`}>
            ← All work
          </Link>
          <Link href={`/work/${nextWork.slug}`}
            className={`group flex items-center gap-3 font-jetbrains text-xs uppercase tracking-widest transition-colors
              ${dark ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-900'}`}>
            <span>Next</span>
            <span className={`font-lora text-base normal-case not-italic group-hover:translate-x-1 transition-transform
              ${dark ? 'text-zinc-200' : 'text-zinc-800'}`}>
              {nextWork.title} →
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
