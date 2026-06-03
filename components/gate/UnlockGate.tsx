'use client'
import { useState } from 'react'
import { setUnlocked } from '@/lib/auth'

interface Props {
  onUnlock: () => void
  projectTitle: string
  dark?: boolean
}

export function UnlockGate({ onUnlock, projectTitle, dark = false }: Props) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.success) {
        setUnlocked()
        onUnlock()
      } else {
        setError('Wrong password. Ask Wen.')
        setShake(true)
        setTimeout(() => setShake(false), 500)
        setPassword('')
      }
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (dark) {
    return (
      <div className={`max-w-lg mx-auto py-16 px-6 text-center transition-all
        ${shake ? 'animate-shake' : ''}`}>
        <div className="w-12 h-12 rounded-xl bg-[#161616] border border-white/10
          flex items-center justify-center mx-auto mb-6 text-2xl">
          🔒
        </div>
        <p className="text-[10px] text-zinc-600 mb-1 uppercase tracking-widest">
          Case study
        </p>
        <h2 className="text-xl font-medium text-[#e8e8e4] mb-2">{projectTitle}</h2>
        <p className="text-zinc-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          The full case study is password-protected.
          Enter once and all projects unlock for this session.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full max-w-xs px-4 py-2.5 rounded-lg border border-white/10
              text-center text-sm bg-[#1a1a1a] text-white focus:outline-none
              focus:border-white/20 transition-colors placeholder:text-zinc-600"
            autoFocus
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !password}
            className="px-6 py-2.5 bg-[#c9933a] text-black text-sm rounded-lg font-medium
              hover:bg-[#b8832e] disabled:opacity-40 transition-colors"
          >
            {loading ? 'Checking…' : 'Unlock'}
          </button>
          {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
        </form>
        <p className="text-xs text-zinc-600 mt-8">
          Don&apos;t have the password?{' '}
          <a href="https://www.linkedin.com/in/wenqianchua/"
            target="_blank" rel="noopener noreferrer"
            className="text-[#c9933a] hover:text-[#b8832e] transition-colors">
            Reach out on LinkedIn
          </a>
        </p>
      </div>
    )
  }

  // ── Light (default) ───────────────────────────────────────────────────────
  return (
    <div className={`max-w-lg mx-auto py-16 px-6 text-center transition-all
      ${shake ? 'animate-shake' : ''}`}>
      <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center
        mx-auto mb-6 text-2xl">
        🔒
      </div>
      <p className="text-sm text-zinc-500 mb-1 uppercase tracking-widest">
        Case study
      </p>
      <h2 className="text-xl font-medium text-zinc-800 mb-2">{projectTitle}</h2>
      <p className="text-zinc-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
        The full case study is password-protected.
        Enter once and all projects unlock for this session.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full max-w-xs px-4 py-2.5 rounded-lg border border-zinc-200
            text-center text-sm bg-white focus:outline-none
            focus:border-zinc-400 transition-colors placeholder:text-zinc-300"
          autoFocus
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !password}
          className="px-6 py-2.5 bg-zinc-900 text-white text-sm rounded-lg
            hover:bg-zinc-700 disabled:opacity-40 transition-colors"
        >
          {loading ? 'Checking…' : 'Unlock'}
        </button>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </form>
      <p className="text-xs text-zinc-400 mt-8">
        Don&apos;t have the password?{' '}
        <a href="https://www.linkedin.com/in/wenqianchua/"
          target="_blank" rel="noopener noreferrer"
          className="underline hover:text-zinc-600">
          Reach out on LinkedIn
        </a>
      </p>
    </div>
  )
}
