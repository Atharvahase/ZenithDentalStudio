# PRD — Zenith Dental Studio

**Product:** Marketing landing page with WhatsApp consultation booking
**Version:** 1.1
**Date:** 2026-07-02
**Owner:** Zenith Dental Studio
**Status:** References analyzed, design direction locked. Ready to build (pending WhatsApp number + clinic details, §11)

---

## 1. Overview

Zenith Dental Studio is a premium dental clinic targeting high-end customers. This project delivers a single, beautifully crafted landing page whose only job is to convert affluent visitors into consultation requests via WhatsApp.

There is deliberately **no backend, no database, and no paid infrastructure** (no Railway, no server, no CMS). The entire experience runs in the browser as a static site; the WhatsApp click-to-chat deep link (`wa.me`) replaces every server-side booking flow. Total running cost is effectively zero (optional custom domain ~US$10–12/year).

### Problem statement

Affluent patients choose a dentist on perceived quality, trust, and convenience — not price. A generic template site undermines that perception, and a traditional booking system (calendar backend, database, email pipeline) adds cost and maintenance for no gain when the clinic already runs its schedule over WhatsApp. The site must *look* like the clinic *feels*: calm, precise, expensive — and make starting a conversation effortless.

### Solution

A static, aesthetic, editorial-luxury landing page. Every call to action opens WhatsApp with a pre-filled, structured message (name, treatment of interest, preferred time), composed entirely client-side. The clinic's front desk handles the rest inside WhatsApp — the tool they already use.

---

## 2. Goals & Non-Goals

### Goals
1. Convert visitors into WhatsApp consultation conversations (primary metric).
2. Project a high-end, trustworthy brand: aesthetic, simple, modern UI.
3. Zero infrastructure cost and near-zero maintenance: static hosting on a free tier, no backend, no database.
4. Excellent mobile experience — WhatsApp booking is inherently mobile-first, and most local-intent traffic is mobile.
5. Strong local SEO fundamentals (clinic name, treatments, location, structured data) so the page ranks for local searches.

### Non-Goals (explicitly out of scope for v1)
- No real-time calendar/slot booking, payments, or reminders (WhatsApp conversation covers scheduling).
- No patient portal, login, or stored patient data of any kind.
- No CMS or admin panel — content updates are code edits (content lives in one typed content file).
- No blog (possible v2 for SEO).
- No multi-language support in v1 (structure should not preclude it).
- No paid services: no Railway, no serverless functions, no hosted forms, no email service.

---

## 3. Target Audience

**Primary: Affluent adults (30–60)** seeking cosmetic and premium dentistry — veneers, smile design, implants, invisible aligners, whitening. They are design-literate, time-poor, skeptical of anything that looks cheap, and they already live in WhatsApp. They decide in seconds whether a clinic is "their kind of place."

**Secondary: High-income families** choosing a long-term family dentist, prioritizing hygiene standards, technology, and bedside manner.

**Tertiary: Dental-tourism / out-of-town patients** (if applicable) researching remotely — WhatsApp is ideal for them since it works internationally with no phone charges.

### Personas

| Persona | Snapshot | What convinces them | Likely entry |
|---|---|---|---|
| "Priya", 38, executive | Wants veneers/smile design; values discretion and results | Before/after gallery, doctor credentials, premium feel | Instagram → site |
| "Rohan", 52, business owner | Needs implants; fears pain and botched work | Technology, sterilization standards, testimonials, doctor bio | Google search → site |
| "Meera", 34, new resident | Choosing a family dentist | Location, warmth of studio photos, ease of contact | Google Maps → site |

---

## 4. Reference Pages (analyzed 2026-07-02)

| # | Reference | What to take from it | What to avoid |
|---|---|---|---|
| 1 | [apaaesthetic.com](https://apaaesthetic.com/) (Dr. Apa, NYC/LA/Miami/Dubai) | **Tone benchmark.** Black/white/cream editorial luxury; cursive/serif wordmark + all-caps sans labels; "dentistry as artistry" want-based (not need-based) positioning; three-pillar value proposition; prominent before/after gallery (8 cases, "see full transformation"); three-step patient journey; lifestyle photography of the doctor. | Media-carousel section (no press yet); multi-location framing; WordPress-era build. |
| 2 | [aventuradentalarts.com](https://aventuradentalarts.com/) | **Animation & typography benchmark.** Lenis smooth-scrolling; Swiper carousels with "01 / 06" counters (technology, team); headline pattern of sans headings with *italic serif accent words* (Inter Tight + Instrument Serif); persistent "Book a Call" CTA in header + footer; technology-transparency section. | Three-location complexity; form-based patient intake (we route to WhatsApp instead). |
| 3 | [lavadental.lv/en](https://lavadental.lv/en) | **Experience-positioning benchmark.** "Studio, not clinic" branding; process/journey carousel storytelling; manifesto/values section; portfolio gallery filtered by treatment tabs; team showcase; FAQ; PP Neue Montreal-class premium type. | External booking system (we have WhatsApp); pricing section (v1 is consultation-first); 10-service sprawl (we cap at 4–6). |
| 4 | [instagram.com/zenithdentalstudio](https://www.instagram.com/zenithdentalstudio) | **Brand source.** The clinic's own presence — 2 doctors: **Dr. Atish** and **Dr. Apurva**. Pull real photography, tone, and follower proof from here; Instagram must be linked prominently (likely a top traffic source). | — (Profile is behind Instagram's login wall for automated tools; bio/photos to be pulled manually during build.) |

**Synthesis:** all three references converge on the same formula — near-monochrome warm palette, editorial serif×sans typography, photography-led storytelling, restrained but present motion (smooth scroll + carousels + reveals), and a single repeated consultation CTA. §7 is aligned to this. Zenith's differentiator vs. all three: WhatsApp-first booking with zero-friction pre-filled messages.

---

## 5. Core User Journey

1. Visitor lands (ad, Instagram bio, Google search/Maps, referral link).
2. Hero communicates in <3 seconds: premium dental studio, where, and one clear action — **"Book a Consultation on WhatsApp."**
3. Visitor scrolls: services → proof (gallery, testimonials) → doctors → studio → FAQ → location.
4. At any point, one tap on a WhatsApp CTA (hero button, section CTAs, or persistent floating button) opens WhatsApp with a pre-filled message.
5. Optionally, the visitor uses the **booking composer** (a small client-side form: name, treatment, preferred day/time) that generates a structured WhatsApp message — still zero data stored.
6. Clinic front desk replies in WhatsApp and confirms the appointment. The website's job is done.

**Conversion principle:** one primary action everywhere. Every CTA on the page leads to WhatsApp; secondary actions (call, directions) are visually subordinate.

---

## 6. Functional Requirements

### 6.1 Page structure (single page, anchored sections)

| # | Section | Requirement | Priority |
|---|---|---|---|
| 0 | **Sticky navbar** | Logo/wordmark, anchor links (Services, Results, Doctors, Studio, FAQ, Contact), compact WhatsApp CTA. Transparent over hero → solid with subtle blur on scroll. Mobile: minimal menu (sheet/drawer). | P0 |
| 1 | **Hero** | Full-viewport editorial hero: large serif headline, one-line subhead, primary WhatsApp CTA + secondary "Explore treatments" anchor. High-end studio/smile photography or subtle looping ambient video. Trust strip beneath (e.g., "15+ years · 10,000+ smiles · ⭐ 4.9 Google rating"). | P0 |
| 2 | **Services / Treatments** | 4–6 signature treatments (e.g., Smile Design & Veneers, Implants, Invisible Aligners, Whitening, Full-Mouth Rehabilitation, Preventive & Family). Card per treatment: name, one-sentence promise, "Enquire" → WhatsApp with treatment pre-filled. No prices in v1 (luxury positioning); "consultation-first" framing. | P0 |
| 3 | **Why Zenith / Experience** | Three-pillar value proposition (per Apa's "Artistry / Quality / Impossible to Replicate" pattern) — e.g., artistry, technology, private-studio experience. Editorial layout with imagery, not icon-grid clutter. | P0 |
| 3b | **How it works** | Three-step patient journey (per Apa/Lava): 1. *Message us on WhatsApp* → 2. *Private consultation* → 3. *Your smile plan*. Doubles as the explainer for the WhatsApp-first booking model. | P1 |
| 4 | **Results gallery** | Before/after smile gallery (4–8 cases), swipeable on mobile. Patient consent required for every image. | P1 |
| 5 | **Doctors** | Exactly two profiles: **Dr. Atish** and **Dr. Apurva** (surnames/credentials TBD, §11). Portrait, name, credentials, one-line philosophy each; side-by-side editorial layout. Humanizes the premium price point (per Apa's doctor-forward model). Link to the clinic Instagram. | P0 |
| 6 | **Testimonials** | 3–5 short quotes with names (and photos where consented); link out to Google Reviews profile for verifiability. | P1 |
| 7 | **The Studio** | Photo strip of the interior — for a high-end audience the space itself is proof. | P1 |
| 8 | **FAQ** | 5–8 accordion items: consultation flow, pain management, sterilization, parking, insurance/payment. Each answer may end with a WhatsApp prompt. | P1 |
| 9 | **Location & hours** | Embedded Google Maps iframe (free, no API key), address, hours, "Get directions" link, phone. | P0 |
| 10 | **Final CTA band** | Full-width closing statement + large WhatsApp CTA ("Your smile, designed. Talk to us today."). | P0 |
| 11 | **Footer** | Logo, contact, social links (Instagram prominent), minimal legal (privacy note), copyright. | P0 |
| — | **Floating WhatsApp button** | Persistent bottom-right bubble, official WhatsApp glyph, appears after ~600px scroll, `aria-label="Chat on WhatsApp"`, never overlaps other tap targets, respects safe-area insets. | P0 |

### 6.2 WhatsApp booking — detailed spec (P0)

**Mechanism:** WhatsApp click-to-chat deep links. No API, no webhook, no server.

```
https://wa.me/<E164_NUMBER>?text=<URL-encoded message>
```

- `<E164_NUMBER>`: clinic's WhatsApp Business number in international format, digits only (e.g., `919876543210`). **Input required from clinic.**
- Behavior: opens the WhatsApp app on mobile; WhatsApp Web/Desktop on desktop. No fallback logic needed — `wa.me` handles routing.
- All WhatsApp links: `target="_blank"` + `rel="noopener noreferrer"`.

**Message templates (URL-encoded at build/click time):**

| Trigger | Pre-filled message |
|---|---|
| Generic CTA (hero, navbar, floating button, final band) | `Hello Zenith Dental Studio 👋 I'd like to book a consultation. My name is ___.` |
| Treatment card "Enquire" | `Hello Zenith Dental Studio 👋 I'm interested in {Treatment Name} and would like to book a consultation. My name is ___.` |
| Booking composer (below) | Structured message assembled from form fields. |

**Booking composer (P1, client-side only):** a compact 3-field form — Name (text), Treatment (select), Preferred day/time (select or free text) — with a single "Continue on WhatsApp" button that composes:

```
Hello Zenith Dental Studio 👋
I'd like to book a consultation.
• Name: {name}
• Treatment: {treatment}
• Preferred time: {preference}
```

Rules: composition happens entirely in browser memory; **nothing is stored, transmitted, or persisted** (no localStorage, no cookies, no analytics events containing PII). Name field uses `autocomplete="name"`; all fields have visible labels; the button is disabled until Name is filled, with inline (on-blur) validation. Form is optional — every generic CTA works without it.

**Analytics on CTA clicks:** count clicks per CTA placement (hero / nav / floating / treatment / composer) with a privacy-friendly, cookieless analytics tool (§9). Event carries placement label only — never form contents.

### 6.3 Contact fallbacks (P1)
- `tel:` link for the clinic phone (some users won't use WhatsApp).
- "Get directions" → Google Maps place link.
- No email form (would need a backend or paid form service); publish a plain `mailto:` if the clinic wants email at all.

---

## 7. Design Requirements

**Design direction (locked against references, §4):** *Editorial luxury.* Calm porcelain neutrals, near-monochrome with one restrained metallic accent, sans headlines with italic-serif accent words, photography-led, generous whitespace, smooth-scroll motion. The page should feel closer to Apa Aesthetic or a boutique hotel than to a hospital — "studio, not clinic" (per Lava).

### 7.1 Design tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FAF8F5` (porcelain ivory) | Page background |
| `--surface` | `#FFFFFF` | Cards, composer |
| `--ink` | `#1C1917` (warm near-black) | Headlines, body |
| `--muted` | `#57534E` | Secondary text (≥4.5:1 on bg) |
| `--accent` | `#8A6D3B` (deep champagne gold) | Accents, rules, hover states, eyebrow labels |
| `--accent-soft` | `#B08D57` | Large decorative elements only (≥3:1) |
| `--whatsapp` | `#25D366` / hover `#1DA851` | Floating bubble + WhatsApp glyphs only |

Primary CTA buttons are brand-styled (ink or gold, with the WhatsApp glyph) so the page stays luxury-coherent; the floating bubble uses official WhatsApp green for instant recognition. Never use green as a general accent.

### 7.2 Typography (mirrors the Aventura reference, both fonts free on Google Fonts)
- **Headings:** Inter Tight (400–500, tight tracking) with **Instrument Serif Italic** for 1–2 accent words per headline — e.g., "Your smile, *designed*." This is the exact pattern the stakeholder liked on aventuradentalarts.com ("Dentistry *for* Exceptional Results").
- **Body/UI:** Inter (300–600).
- **Wordmark:** all-caps spaced "ZENITH DENTAL STUDIO" in Inter Tight, or Instrument Serif — typographic logo acceptable for v1 (per Apa's text-first wordmark).
- Self-hosted at build time via `next/font` for performance and privacy; `font-display: swap`.
- Scale: hero ~`clamp(2.75rem, 7vw, 5.5rem)`; body 16–18px, line-height 1.6–1.75; eyebrow labels 12–13px uppercase, generous letter-spacing (uppercase labels only — default tracking for body).
- Fallback direction if the serif-accent pattern doesn't suit the brand photography: Playfair Display headings + Inter body (classic luxury, per original draft).

### 7.3 Imagery
- Real clinic/doctor/patient photography strongly preferred — it is the single biggest premium signal. Placeholder plan: curated Unsplash/Pexels (free) with a consistent warm, low-saturation grade until the clinic shoot happens.
- All raster images WebP/AVIF, responsive sizes, lazy-loaded below the fold, explicit dimensions (CLS < 0.1).

### 7.4 Motion (a stakeholder priority — modeled on the references)
| Effect | Spec | Reference |
|---|---|---|
| **Smooth scrolling** | Lenis — inertial, buttery page scroll; the single biggest "expensive site" signal | Aventura |
| **Hero entrance** | Headline reveals line-by-line with masked stagger (~80ms/line, 600–800ms, ease-out); hero image slow scale-in (1.05→1) | Apa/Aventura |
| **Scroll reveals** | Sections fade-up 24–32px on enter (400–500ms, ease-out, 40–60ms stagger for card grids), trigger once | All three |
| **Carousels** | Before/after gallery, testimonials, studio photos as swipe/drag carousels with "01 / 06" counters and prev/next arrows | Aventura, Lava |
| **Micro-interactions** | CTA hover: subtle lift + arrow slide (150–250ms); treatment cards: image scale 1.03 on hover; navbar: transparent → blurred surface on scroll | All three |
| **Parallax** | Gentle only (≤10% translate) on hero/studio imagery; never on text | Apa |

Rules: animate `transform`/`opacity` only; 1–2 animated elements per viewport; slow-and-subtle reads expensive — no bounce, no fast easing; full `prefers-reduced-motion` support (Lenis disabled, reveals collapse to instant visibility, carousels remain manually navigable). No spinners anywhere — nothing loads asynchronously enough to need them.

### 7.5 UI quality bar (from design-intelligence review)
- SVG icons only (Lucide or Heroicons, one family, consistent stroke) — no emoji as icons.
- One primary CTA per viewport; secondary actions visually subordinate.
- Touch targets ≥44×44px, ≥8px apart; `cursor-pointer` + visible hover/focus states on everything clickable.
- Text contrast ≥4.5:1; visible focus rings; sequential heading hierarchy; alt text on all meaningful images.
- Mobile-first at 375px, then 768 / 1024 / 1440. No horizontal scroll. `min-h-dvh` over `100vh`.
- Sticky navbar reserves scroll-margin on anchor targets; floating bubble respects safe-area insets.
- **Anti-patterns to avoid:** cheap stock clichés (gloved thumbs-up, cartoon teeth), icon-grid clutter, fast/bouncy animations, green-everywhere WhatsApp theming, template-y gradient blobs.

---

## 8. Tech Stack

Constraint recap: **no backend, no database, no Railway, negligible cost.** Everything below is free (or free-tier) and produces a purely static site.

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) with `output: 'export'`** | Pre-rendered static HTML (best SEO for a local-intent page), React component model, image tooling; team already knows it. Exports to plain files — hostable anywhere, no server ever runs. |
| Language | **TypeScript** | Typed single `content.ts` file makes clinic content (treatments, doctors, FAQ, phone number) safely editable in one place. |
| Styling | **Tailwind CSS v4** | Design tokens as CSS variables, fast iteration, tiny purged output. |
| Motion | **Motion (Framer Motion) + Lenis** | Framer Motion for reveals/micro-interactions with `useReducedMotion` support; Lenis (~4kB, free) for the smooth-scroll feel of the Aventura reference. |
| Carousels | **Embla Carousel** | Lightweight, free, touch/drag carousels for gallery, testimonials, studio (the references use Swiper; Embla is the leaner equivalent). |
| Icons | **Lucide React** | Consistent SVG icon family. |
| Fonts | **Inter Tight + Instrument Serif + Inter via `next/font`** | Free Google Fonts matching the Aventura reference; self-hosting avoids third-party font requests (performance + privacy). |
| Booking | **WhatsApp `wa.me` deep links** (§6.2) | The entire "booking system," at zero cost. |
| Maps | **Google Maps embed iframe** | Free, no API key, lazy-loaded. |
| Analytics | **Cloudflare Web Analytics** (or Vercel Analytics free tier) | Free, cookieless — no consent banner burden. |
| Hosting | **Vercel free tier** (primary) — Cloudflare Pages or GitHub Pages equally fine | Free static hosting, global CDN, automatic HTTPS, deploy-on-push from GitHub. |
| CI/CD | **GitHub → Vercel auto-deploy** | Push to `main` = live. No pipeline to maintain. |

**Simpler alternative considered:** Astro (zero-JS static output) or plain Vite+React. Astro is marginally leaner but Next.js static export achieves the same SEO-critical pre-rendered HTML with a stack the team already ships with. Plain Vite+React was rejected: client-side rendering weakens SEO for a page that depends on local search.

### Cost breakdown

| Item | Cost |
|---|---|
| Hosting (Vercel/Cloudflare/GitHub Pages free tier) | **$0** |
| WhatsApp Business app (clinic side) | **$0** |
| Fonts, icons, analytics, maps embed | **$0** |
| Custom domain (e.g., `zenithdentalstudio.com`) | ~**$10–12/year** (optional; free `*.vercel.app` subdomain works day one) |
| **Total** | **$0–12/year** |

---

## 9. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Performance | Lighthouse ≥95 mobile (Performance/SEO/Best Practices/Accessibility); LCP <2.5s on 4G; CLS <0.1; hero image preloaded; everything below fold lazy. |
| SEO | Pre-rendered HTML; unique title/meta description; Open Graph + Twitter cards (rich WhatsApp/iMessage link previews — matters for a WhatsApp-centric funnel); `LocalBusiness`/`Dentist` JSON-LD schema (name, address, geo, hours, phone); sitemap + robots; canonical URL. |
| Accessibility | WCAG 2.1 AA: contrast, keyboard nav, focus states, skip link, aria-labels on icon-only buttons, reduced-motion. |
| Privacy | No cookies, no stored form data, no PII in analytics → no consent-banner requirement in most jurisdictions; one-line privacy note in footer explaining the WhatsApp handoff. |
| Browser support | Last 2 versions of evergreen browsers + iOS Safari ≥16; graceful degradation of blur/animation effects. |
| Maintainability | All editable content (copy, treatments, doctors, FAQ, phone number, hours) in one typed `content.ts`; changing the WhatsApp number is a one-line edit. |

---

## 10. Success Metrics

| Metric | Target (first 90 days) |
|---|---|
| WhatsApp CTA click-through rate | ≥8% of unique visitors |
| Click → actual WhatsApp conversation (front-desk tally) | ≥60% of clicks |
| Consultations booked via WhatsApp | Baseline in month 1, +20% by month 3 |
| Lighthouse mobile scores | ≥95 across categories |
| Bounce rate | <55% |

Instrumentation: cookieless analytics events per CTA placement (§6.2) + a simple front-desk log of "how did you find us / which message template arrived."

---

## 11. Assumptions & Open Questions

**Assumptions (correct if wrong):**
1. The clinic has (or will get) a **WhatsApp Business number** monitored during working hours.
2. Single location, single page, one language (English) for v1.
3. "Zenith Dental Studio" is the final brand name; a typographic wordmark (per §7.2) is an acceptable v1 logo.
4. No pricing shown in v1 (consultation-first luxury positioning; deliberate deviation from the Lava reference).
5. Professional photography is planned; the clinic's Instagram (§4) is the first source of real imagery, with curated stock as gap-filler at launch.

**Open questions (updated 2026-07-02):**
1. ~~Reference pages~~ — **Answered:** analyzed in §4 (Apa Aesthetic, Aventura Dental Arts, Lava Dental + clinic Instagram).
2. ~~WhatsApp number, address, phone~~ — **Answered:** +91 92255 25606 (WhatsApp + phone); Ground Floor, Harsh-Anand Complex, Shraddha Mall Marg, College Road, Nashik 422005 (per Justdial listing, rated 4.9/36 reviews). **Hours still unconfirmed** — placeholder Mon–Sat 10:00–20:00 in `content.ts`.
3. ~~Doctors~~ — **Answered:** Dr. Atish Raundal (MDS — Prosthodontist), Dr. Apurva Raundal (BDS — Comprehensive Dentist). Photos still needed. Treatment list confirmed: implants, crowns & bridges, smile design/cosmetic, full-mouth rehab, root canal, preventive & family.
4. Real testimonials and consented before/after images (placeholders marked in `content.ts` must be replaced before launch marketing).
5. Domain name preference (or launch on free subdomain first)?
6. ~~City~~ — **Answered:** Nashik.

---

## 12. Phases

| Phase | Scope | Exit criteria |
|---|---|---|
| **P0 — Launchable** | Navbar, hero, services, why-us, doctors, location, final CTA, footer, floating WhatsApp button, generic + per-treatment deep links, SEO/schema/OG, analytics, deploy to free hosting | Live URL; all CTAs open WhatsApp correctly on iOS/Android/desktop; Lighthouse ≥95 mobile |
| **P1 — Trust & polish** | Booking composer, results gallery, testimonials, studio section, FAQ, motion polish | Composer produces correct structured messages; gallery consented and optimized |
| **P2 — Later** | Real photography swap, second language, blog/SEO articles, Google Business Profile deep-integration | As scheduled |

---

*Prepared 2026-07-02. Build starts after §11 open questions 1–2 are answered; everything else can be filled during P0 with placeholders.*
