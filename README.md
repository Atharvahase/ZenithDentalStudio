# Zenith Dental Studio

Luxury dental studio landing page with WhatsApp consultation booking.
**Fully static — no backend, no database, no cookies, no stored data.** See [PRD.md](PRD.md).

## Stack

Next.js (static export) · TypeScript · Tailwind CSS v4 · Motion · Lenis · Embla Carousel · Lucide.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

## Editing content

**Everything editable lives in [lib/content.ts](lib/content.ts)** — copy, treatments, doctors,
FAQ, hours, and every `TODO(clinic)` placeholder. The important ones:

| What | Where in `content.ts` |
|---|---|
| WhatsApp Business number (E.164, digits only) | `clinic.whatsappNumber` |
| City / address / hours / phone | `clinic.*` |
| Doctors' names & credentials | `doctors[]` |
| Treatments & WhatsApp message templates | `treatments[]`, `waMessages` |

Placeholder image panels (`.photo-slot`) are intentional stand-ins for the clinic
photo shoot — swap them for real photography in the section components.

## Deploy (free)

Push to GitHub, then import the repo in [Vercel](https://vercel.com) — it detects Next.js
and deploys to a free `*.vercel.app` URL with HTTPS. Cloudflare Pages / GitHub Pages
(`out/` directory) work identically. Optional custom domain is the only cost (~$10/yr).
Add the free Cloudflare Web Analytics beacon in `app/layout.tsx` once live.
