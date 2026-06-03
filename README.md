# Wen Qian Chua — Portfolio

Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## Dev workflow

```bash
git checkout dev
git checkout -b feature/your-thing
# ... make changes ...
git push origin feature/your-thing
# Open PR → dev on GitHub
```

## Merge to production

```bash
git checkout dev && git pull
git checkout main && git merge dev && git push
```

Vercel auto-deploys `main` → production.

---

## Update resume link (no code needed)

Vercel → Project Settings → Environment Variables → `NEXT_PUBLIC_RESUME_LINK`
Redeploy (or push any commit to trigger it).

## Update password (no code needed)

Vercel → Project Settings → Environment Variables → `PORTFOLIO_PASSWORD`
Redeploy.

---

## Add a new project

1. Edit `/data/works.ts` — add a `WorkItem`
2. Edit `/data/caseStudies.ts` — add case study content
3. Add images to `/public/images/[project-name]/`
4. Push to `dev`, test on preview URL, merge to `main`

---

## Restore Figma images

Images are excluded from git (large files). To restore from the original Figma source:

1. Place `Porfolio.fig` and `Game_UXR.fig` in the project root
2. Run:

```bash
bash scripts/extract-figma-images.sh
```

Rename extracted images as documented in the script output.

---

## Local development

```bash
cp .env.example .env.local   # fill in PORTFOLIO_PASSWORD and NEXT_PUBLIC_RESUME_LINK
npm install
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `PORTFOLIO_PASSWORD` | Password to unlock case studies |
| `NEXT_PUBLIC_RESUME_LINK` | Google Drive resume URL |

Set both in Vercel → Settings → Environment Variables for Production + Preview + Development.

---

## Branch structure

| Branch | Purpose |
|---|---|
| `main` | Production — Vercel deploys from here |
| `dev` | Integration — all PRs merge here first |
| `feature/*` | Individual feature branches |
