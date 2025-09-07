# Prompt Market (MVP)

A Next.js App Router project for a Prompt marketplace. Implements initial IA and UI based on PRD.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Features
- App Router, TypeScript, Tailwind
- Routes: `/search`, `/prompts/[id]`, `/login`, `/register`
- Static listing with filters (mock data)
- Prompt detail sections (overview, examples, guide, changelog)
- Theme toggle (system/light/dark)
- i18n scaffolding (EN/中文) with switcher
- SEO: `robots.ts`, `sitemap.ts`

## Env
- `NEXT_PUBLIC_SITE_URL` (optional) for sitemap/robots

## License
MIT
