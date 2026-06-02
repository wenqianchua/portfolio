import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/data/config";
import { unlock } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password, slug } = await req.json();

  if (password !== siteConfig.password) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  await unlock(slug);
  return NextResponse.json({ ok: true });
}
