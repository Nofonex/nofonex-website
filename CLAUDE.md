# CLAUDE.md — nofonex-website

## Purpose

This repo is the public marketing website of Nofonex (Next.js + Prisma), served in
production at **https://nofonex.com** via Vercel.

**Every push to `main` deploys to production.** The GitHub workflow
`.github/workflows/deploy.yml` has two jobs:

- `build` — runs on every pull request to `main` and every push to `main`
  (`npm ci`, `npx prisma generate`, `npm run build`). It never deploys.
- `deploy` — runs only after `build` succeeds, and only on a push to `main`
  (a merge). It runs `vercel deploy --prod`.

So opening or updating a PR is safe; merging is going live.

## Roles

- **Owner (Xenofon)** — decides and merges. Only the owner merges to `main`.
- **Reviewer** — opens PRs and gives the owner a preview link plus concrete test steps.
- **Builder** — works on exactly one task per branch, branched from `origin/main`.
  Pushes that branch and reports. Never opens PRs, never pushes to `main`, never rebases,
  never merges.

## Workflow

1. `npm ci` first (use the npm lockfile; do not switch package managers).
2. Make the change for the one task.
3. `npm run build` must pass before you push.
4. Commit messages in **Dutch**, prefixed with `feat:`, `fix:`, `refactor:`, `test:`,
   `docs:` or `chore:` (e.g. `fix: footer-link naar juiste pagina`).

## Source of truth for content

- SoFoWo facts: `nofonex-ecosystem/projects/sofowo/website-marketing.md`
- Names: `nofonex-ecosystem/conventions/NAMING.md`
- Product names: **SoFoWo**, **BeFoWo** (never "BeamFoWo").
- Legal entity, use verbatim:
  "Nofonex PST, registered with the KKF (Suriname) under file number 62527, owner Xenofon
  Martokarijo, Paramaribo, Suriname"

Never claim features, prices, testimonials or user numbers that are not confirmed in those
sources. If something is not confirmed there, leave it out and say so in your report.

## Legal pages

`/privacy-policy`, `/terms-of-service`, `/refund-policy`, `/cookie-policy`:

- Change only what the task explicitly says. Never rewrite legal substance.
- The 30-day refund text stays until the owner decides (payment round B3).

## Safety rules

- Never handle, print or commit secrets (`.env*`, tokens, keys). Secrets live in GitHub
  Actions secrets and Vercel only.
- No `window.confirm` / `window.alert` / `alert()` in UI code; use proper UI components.

## Known pitfalls / technical debt

- **A green build is not a typecheck.** `next.config.mjs` sets
  `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`.
  Baseline (`npx tsc --noEmit`, Nov 2026): **25 errors in 11 files**. Most errors:
  `app/api/comments/route.ts` (7), `app/actions/comment-actions.ts` (5),
  `components/comment-section.tsx` (3), `components/web3/web3-provider.tsx` (2),
  `components/payments/crypto-payment.tsx` (2). Do not add new errors; run
  `npx tsc --noEmit` on files you touch. Do not flip the ignore flags without a task for it.
- `/checkout` and `/get-started` are a non-functional mock payment flow (to be disabled in a
  later PR). `/get-started` is currently redirected to `/pricing` in `next.config.mjs`.
  Do not link to them or present them as working.
- `/privacy` is an outdated 2023 policy (to be redirected to `/privacy-policy` later). The
  current policy is `/privacy-policy`.
- The footer (`components/footer.tsx`) links to `/trabyhum`, the homepage (`app/page.tsx`)
  mentions TraByHum, and `next.config.mjs` redirects `/services/*` to `/trabyhum` — but that
  page has been removed.
