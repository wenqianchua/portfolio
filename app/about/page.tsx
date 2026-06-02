import Link from 'next/link'
import { siteConfig } from '@/data/config'
import { NotionCallout } from '@/components/ui/NotionCallout'

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimelineEntry {
  period: string
  role: string
  org: string
  location?: string
  bullets: string[]
}

interface EducationEntry {
  degree: string
  school: string
  period: string
  note?: string
}

interface SocialLink {
  label: string
  handle: string
  url: string
  icon: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const timeline: TimelineEntry[] = [
  {
    period: "Jan 2026 – Present",
    role: "User Experience Designer",
    org: "Jora · Kuala Lumpur, Malaysia · Hybrid",
    bullets: [
      "End-to-end UX research (discovery → usability testing), agentic AI workflows for job search and discovery.",
      "Qual + quant synthesis into prioritised backlogs and measurable UX outcomes.",
    ],
  },
  {
    period: "Oct 2024 – Present",
    role: "Chapter Lead",
    org: "Friends of Figma, Kuala Lumpur",
    bullets: [
      "Grew FoF KL from ~797 to 1,364 members — ~71% YoY growth.",
      "Community building, events, and design leadership in KL.",
    ],
  },
  {
    period: "Sep 2025 – Apr 2026",
    role: "Senior UX Consultant",
    org: "Founderine · Freelance · Kuala Lumpur, Malaysia",
    bullets: [
      "Helped teams clarify product direction and workflow decisions.",
      "Translated complex requirements into clear, actionable deliverables.",
    ],
  },
  {
    period: "Dec 2024 – Oct 2025",
    role: "Senior Product Designer",
    org: "Kiwi Studio · Dubai, UAE",
    bullets: [
      "Lead end-to-end product design — research, iteration, and data-driven UX across aviation and real estate platforms.",
    ],
  },
  {
    period: "Oct 2023 – Sep 2024",
    role: "UX & Design Lead",
    org: "Causal Foundry · Barcelona, Spain",
    bullets: [
      "Led design and product development of M2M, a mobile app for Community Health Care Workers assisting HIV patients.",
      "Maintained design system and branding across an ML/AI platform.",
    ],
  },
  {
    period: "Mar 2023 – Oct 2023",
    role: "UX Researcher",
    org: "Ecological Interaction · Barcelona, Spain",
    bullets: [
      "Led user research on ROMI key platforms. User journey mapping, usability testing, card sorting, interviews.",
    ],
  },
  {
    period: "Dec 2021 – Jul 2022",
    role: "UI/UX Designer",
    org: "Vandewiele Software Solutions · Kuala Lumpur, Malaysia",
    bullets: [
      "Pioneer UI/UX designer on the VDW China backoffice project. Built design system from scratch in Figma.",
      "Designed Sales App (web + mobile), onboarding, log-in, and WeChat integration.",
    ],
  },
  {
    period: "Ongoing",
    role: "Side research · Game UXR · Personal projects",
    org: "",
    bullets: [
      "Studying gaming as a lens for human behaviour.",
      "Personal speculative design and research work.",
    ],
  },
]

const education: EducationEntry[] = [
  {
    degree: "MBA",
    school: "Aicad Business School (Spain) / Unimarconi (Rome, Italy)",
    period: "2023–24 (Present)",
  },
  {
    degree: "Master in Design for Emergent Futures",
    school: "IAAC, Barcelona, Spain",
    period: "2022–23",
    note: "GPA 9.2/10.0",
  },
  {
    degree: "Bachelor of Arts in Architectural Design",
    school: "University of Washington, Seattle, USA",
    period: "2020",
    note: "GPA 3.74/4.0",
  },
]

const socials: SocialLink[] = [
  { label: "LinkedIn",  handle: "wenqianchua",   url: siteConfig.social.linkedin,  icon: "in" },
  { label: "GitHub",    handle: "wenqianchua",   url: siteConfig.social.github,    icon: "gh" },
  { label: "Behance",   handle: "qianmade14c5",  url: siteConfig.social.behance,   icon: "be" },
  { label: "YouTube",   handle: "channel",       url: siteConfig.social.youtube,   icon: "yt" },
  { label: "Instagram", handle: "_kamimono",     url: siteConfig.social.instagram, icon: "ig" },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Divider() {
  return <hr className="border-zinc-100 my-12" />
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-400 mb-6">
      {children}
    </p>
  )
}

function Timeline() {
  return (
    <section>
      <SectionLabel>Experience</SectionLabel>
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-zinc-100" />

        <div className="flex flex-col gap-10">
          {timeline.map((entry, i) => (
            <div key={i} className="flex gap-6">
              {/* Dot */}
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-[11px] h-[11px] rounded-full border-2 border-zinc-300 bg-white relative z-10" />
              </div>
              {/* Content */}
              <div className="min-w-0 pb-1">
                <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                  {entry.period}
                </p>
                <p className="font-medium text-zinc-900 text-sm">{entry.role}</p>
                {entry.org && (
                  <p className="text-xs text-zinc-500 mb-2">{entry.org}</p>
                )}
                <ul className="flex flex-col gap-1">
                  {entry.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-zinc-600 leading-relaxed flex gap-2">
                      <span className="text-zinc-300 flex-shrink-0 mt-0.5">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section>
      <SectionLabel>Education</SectionLabel>
      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-zinc-100" />
        <div className="flex flex-col gap-7">
          {education.map((entry, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-[11px] h-[11px] rounded-full border-2 border-zinc-200 bg-white relative z-10 flex items-center justify-center">
                  <span className="text-[6px]">🎓</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-800">{entry.degree}</p>
                <p className="text-xs text-zinc-500">{entry.school}</p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {entry.period}
                  {entry.note && <span className="ml-2 text-zinc-300">· {entry.note}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Connect() {
  return (
    <section>
      <SectionLabel>Connect</SectionLabel>
      <div className="flex flex-col gap-3">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-300
              w-6 group-hover:text-zinc-500 transition-colors">
              {s.icon}
            </span>
            <span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">
              {s.label}
            </span>
            <span className="text-xs text-zinc-300 group-hover:text-zinc-400 transition-colors">
              @{s.handle}
            </span>
            <span className="ml-auto text-zinc-200 group-hover:text-zinc-400 transition-colors text-xs">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "About — Wen Qian Chua",
  description: "Product Designer and UX Researcher based in Petaling Jaya, Malaysia.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Fixed back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-6 py-4 backdrop-blur-md border-b border-zinc-100/80 bg-white/80">
        <Link href="/" className="font-jetbrains text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          WQ ☁️
        </Link>
        <Link href="/work" className="font-jetbrains text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-700 transition-colors">
          Work
        </Link>
      </div>

      {/* Notion-style page */}
      <div className="max-w-[720px] mx-auto px-6 pt-24 pb-24">

        {/* Page icon + title */}
        <div className="mb-10">
          <div className="text-5xl mb-4 select-none">☁️</div>
          <h1 className="font-lora text-4xl text-zinc-900">About</h1>
        </div>

        {/* Opening */}
        <div className="font-lora text-lg leading-loose text-[#37352f] mb-12 space-y-4">
          <p>
            I&apos;m Wen Qian Chua. Product Designer and UX Researcher,
            currently based in Petaling Jaya, Malaysia.
          </p>
          <p>
            I specialise in UX research, product design, and strategy — creating
            user-centred digital experiences that align with business goals.
            With a background in design and an MBA, I take a systems-thinking
            approach: balancing usability, functionality, and scalability.
            Right now I&apos;m at Jora, designing agentic AI workflows for job search
            and discovery — and leading the Friends of Figma chapter in KL.
          </p>
          <p>
            Outside of work, I research games. Not as a hobby — as a methodology.
            Play is one of the most honest windows into human behaviour.
          </p>
        </div>

        <Divider />
        <Timeline />
        <Divider />
        <Education />
        <Divider />

        {/* Beliefs */}
        <section className="mb-12">
          <SectionLabel>Things I believe</SectionLabel>
          <NotionCallout emoji="⚡" variant="yellow">
            <span className="block space-y-1">
              <span className="block">— Design is a conversation, not a monologue.</span>
              <span className="block">— Research is only as good as the questions you ask.</span>
              <span className="block">— Play is underrated as a design methodology.</span>
              <span className="block">— The best insights come from watching, not asking.</span>
            </span>
          </NotionCallout>
        </section>

        {/* Resume */}
        <section className="mb-12">
          <SectionLabel>Resume</SectionLabel>
          <NotionCallout emoji="📄" variant="yellow">
            <span className="block mb-3">
              My resume is on Google Drive — always the latest version.
            </span>
            <a
              href={siteConfig.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white
                text-xs rounded-lg hover:bg-zinc-700 transition-colors font-jetbrains
                uppercase tracking-widest"
            >
              View Resume ↗
            </a>
            <span className="block mt-3 text-xs text-zinc-400">
              (Google Drive link — I update the file, not the link.)
            </span>
          </NotionCallout>
        </section>

        <Divider />
        <Connect />

      </div>
    </main>
  )
}
