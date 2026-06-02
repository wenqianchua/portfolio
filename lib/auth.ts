const SESSION_KEY = 'wen_portfolio_unlocked'

export function isUnlocked(): boolean {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem(SESSION_KEY) === 'true'
}

export function setUnlocked(): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem(SESSION_KEY, 'true')
}

export function clearUnlocked(): void {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem(SESSION_KEY)
}
