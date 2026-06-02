import { cookies } from "next/headers";

const SESSION_COOKIE = "portfolio_session";
const SESSION_VALUE = "unlocked";

export async function isUnlocked(slug: string): Promise<boolean> {
  const store = await cookies();
  return store.get(`${SESSION_COOKIE}_${slug}`)?.value === SESSION_VALUE;
}

export async function unlock(slug: string): Promise<void> {
  const store = await cookies();
  store.set(`${SESSION_COOKIE}_${slug}`, SESSION_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });
}
