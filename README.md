# Wen Qian Chua — Portfolio

Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion

## Getting started

```bash
npm install
npm run dev
```

## Restoring images

Images are excluded from git (large files). To restore them from the original Figma source files:

1. Place `Porfolio.fig` and `Game_UXR.fig` in the project root
2. Run:
   ```bash
   bash scripts/extract-figma-images.sh
   ```

This extracts all portfolio and game research images to `public/images/`.

> **Note:** No personal about photo was found in the .fig files. Add one manually as `public/images/about-hero.jpg`.

## Branch workflow

- `main` — production (Vercel deploys from here)
- `dev` — integration branch, all PRs merge here
- `feature/*` — individual feature branches

## Password

Case studies are password-protected. Set `PORTFOLIO_PASSWORD` in `.env.local`.
See `.env.example` for all required variables.
