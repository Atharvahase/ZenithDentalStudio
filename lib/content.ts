/**
 * ZENITH DENTAL STUDIO — single source of truth for all site content.
 *
 * Everything marked `TODO(clinic)` is a placeholder awaiting real clinic
 * details. Swapping a value here updates the whole site — no other file
 * needs touching for content changes.
 */

export const clinic = {
  name: 'Zenith Dental Studio',
  shortName: 'Zenith',
  city: 'Nashik',
  // WhatsApp Business number in E.164 digits (+91 92255 25606).
  whatsappNumber: '919225525606',
  phoneDisplay: '+91 92255 25606',
  phoneHref: '+919225525606',
  address: {
    street: 'Ground Floor, Harsh-Anand Complex, Shraddha Mall Marg, College Road',
    locality: 'Nashik',
    region: 'Maharashtra',
    postalCode: '422005',
    country: 'IN',
  },
  // Feeds the free Google Maps embed (no API key).
  mapQuery: 'Zenith Dental Studio, College Road, Nashik',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Zenith+Dental+Studio+College+Road+Nashik',
  instagram: 'https://www.instagram.com/zenithdentalstudio',
  // TODO(clinic): confirm working hours — placeholder pending confirmation.
  hours: [
    { days: 'Monday — Saturday', time: '10:00 — 20:00' },
    { days: 'Sunday', time: 'By appointment' },
  ],
  // TODO(clinic): production domain once purchased — used for canonical URL,
  // Open Graph and sitemap.
  siteUrl: 'https://zenithdentalstudio.vercel.app',
}

export const hero = {
  eyebrow: 'A private dental studio in Nashik',
  // Rendered as: line one plain, accent word in Instrument Serif italic.
  headlineLines: [
    { plain: 'Your smile,' },
    { plain: '', accent: 'designed.' },
  ],
  sub: 'Precision dentistry in a calm, considered space — for people who notice the difference.',
  primaryCta: 'Book a consultation',
  secondaryCta: 'Explore treatments',
  // 4.9 rating: public Justdial listing (36 reviews), verified 2026-07-02.
  stats: [
    { value: '2', label: 'Specialists, one standard' },
    { value: '4.9★', label: 'Patient rating' },
    { value: 'MDS', label: 'Prosthodontist-led care' },
  ],
}

export type Treatment = {
  id: string
  name: string
  promise: string
}

export const treatments: Treatment[] = [
  {
    id: 'smile-design',
    name: 'Smile Design & Cosmetic Dentistry',
    promise: 'Veneers, whitening and contouring — planned digitally, finished by hand to suit your face.',
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    promise: 'Permanent, natural-feeling replacements placed with guided precision.',
  },
  {
    id: 'crowns-bridges',
    name: 'Crowns & Bridges',
    promise: 'Precision-crafted restorations in high-quality materials that look and feel like your own.',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    promise: 'Gentle, modern endodontics that saves the tooth — comfort managed at every step.',
  },
  {
    id: 'full-mouth',
    name: 'Full-Mouth Rehabilitation',
    promise: 'Comprehensive restoration of function and form, sequenced around your life.',
  },
  {
    id: 'family',
    name: 'Preventive & Family Dentistry',
    promise: 'Unhurried, meticulous care that keeps every visit ahead of the problem.',
  },
]

export const pillars = [
  {
    title: 'Artistry',
    body: 'Every case is designed before it is treated. Proportion, shade and character are decisions we make with you — dentistry as a considered aesthetic practice.',
  },
  {
    title: 'Precision',
    body: 'Advanced digital dentistry, ethical treatment planning and materials chosen without compromise. The invisible details are the ones you will feel every day.',
  },
  {
    title: 'The Studio',
    body: 'One patient at a time. No waiting-room churn, no rush — a private, quiet space designed around your comfort.',
  },
]

export const journey = [
  {
    step: '01',
    title: 'Message us on WhatsApp',
    body: 'One tap, no forms, no phone queue. Tell us what you have in mind — we reply personally.',
  },
  {
    step: '02',
    title: 'Private consultation',
    body: 'A full assessment and an honest conversation about what suits you — never a sales pitch.',
  },
  {
    step: '03',
    title: 'Your smile plan',
    body: 'A clear plan with timelines and outcomes agreed before anything begins.',
  },
]

// TODO(clinic): replace with real, consented before/after cases. These are
// intentionally styled placeholders (no stock photos of strangers' teeth).
export const cases = [
  { id: '01', treatment: 'Smile Design', note: 'Eight-unit refinement' },
  { id: '02', treatment: 'Crowns & Bridges', note: 'Digitally planned, precision fit' },
  { id: '03', treatment: 'Full-Mouth Rehabilitation', note: 'Staged restoration' },
  { id: '04', treatment: 'Implants', note: 'Guided placement' },
]

export type Doctor = {
  name: string
  // TODO(clinic): credentials once provided (see PRD §11).
  credentials: string
  philosophy: string
  image: string
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Atish Raundal',
    credentials: 'MDS — Prosthodontist',
    philosophy: '“Good dentistry should be invisible. People should notice you, not the work.”',
    image: '/images/dr-atish.jpg',
  },
  {
    name: 'Dr. Apurva Raundal',
    credentials: 'BDS — Comprehensive Dentist',
    philosophy: '“Trust is built in the details — how we listen, plan, and follow through.”',
    image: '/images/dr-apurva.jpg',
  },
]

// TODO(clinic): replace with real patient reviews (with permission).
// These are illustrative placeholders and must not ship to production.
export const testimonials = [
  {
    quote: 'The most considered medical experience I have had. Every step was explained, nothing was rushed, and the result is better than I imagined.',
    name: 'A. Mehta',
    context: 'Smile design',
  },
  {
    quote: 'I avoided dentists for a decade. This place changed that — it feels closer to a design studio than a clinic.',
    name: 'R. Kapoor',
    context: 'Full-mouth rehabilitation',
  },
  {
    quote: 'Booked on WhatsApp at 9pm, consulted the next evening. Seamless from the first message.',
    name: 'S. Iyer',
    context: 'Root canal treatment',
  },
]

export const faqs = [
  {
    q: 'How does a consultation work?',
    a: 'Message us on WhatsApp and we will agree a time that suits you. Your first visit is a relaxed, thorough assessment — photographs, a scan where useful, and an honest conversation about options. No treatment happens before you have a clear plan.',
  },
  {
    q: 'Will treatment hurt?',
    a: 'Comfort is engineered into everything we do — modern anaesthesia, gentle technique, and a pace set by you. Most patients tell us the anticipation was the worst part.',
  },
  {
    q: 'How do you handle sterilisation and safety?',
    a: 'Instrument sterilisation follows a strict, documented protocol with sealed, single-patient kits. Ask us on your visit — we are happy to show you.',
  },
  {
    q: 'Do you show prices on the website?',
    a: 'No — because honest pricing follows a proper diagnosis. After your consultation you receive a written plan with exact costs before anything begins.',
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Yes — consented before/after cases are shown at the studio and on our Instagram, and your consultation will include cases similar to yours.',
  },
  {
    q: 'How soon can I get an appointment?',
    a: 'Usually within a few days. Message us on WhatsApp and we will find the earliest slot that fits your schedule.',
  },
]

export const finalCta = {
  headlinePlain: 'Your smile, ',
  headlineAccent: 'designed.',
  sub: 'Begin with a conversation — no forms, no waiting on hold.',
  cta: 'Talk to us on WhatsApp',
}

// --- WhatsApp message templates (PRD §6.2) ---

export const waMessages = {
  generic: `Hello ${clinic.name} 👋 I'd like to book a consultation. My name is `,
  treatment: (treatmentName: string) =>
    `Hello ${clinic.name} 👋 I'm interested in ${treatmentName} and would like to book a consultation. My name is `,
  composer: (name: string, treatment: string, preference: string) =>
    [
      `Hello ${clinic.name} 👋`,
      `I'd like to book a consultation.`,
      `• Name: ${name}`,
      `• Treatment: ${treatment}`,
      `• Preferred time: ${preference}`,
    ].join('\n'),
}
