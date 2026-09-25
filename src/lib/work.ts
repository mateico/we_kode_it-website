export type WorkItem = {
  slug: string;
  title: string;
  imageFirst: boolean;
  /** Duotone tint applied over the grayscale images; fades out on hover to reveal true color. */
  accent: string;
  /** Two screenshots per project, navigable horizontally. */
  images: [string, string];
  /** Live project URL. Omit for unfinished or internal work. */
  link?: string;
  summary: string;
  paragraphs: string[];
};

export const WORKS: WorkItem[] = [
  {
    slug: "we check it",
    title: "we check it",
    imageFirst: true,
    accent: "#2F6FED",
    images: ["/work/wecheckit/1.png", "/work/wecheckit/2.png"],
    link: "https://wecheckit.wekodeit.com/",
    // internal tool, no public link
    summary:
      "WeKodeit spends hours every week manually checking local businesses' websites and Google listings to find good sales targets — we built an internal tool that audits both automatically and scores them for outreach.",
    paragraphs: [
      "WeKodeit, a software factory, generates sales leads by finding local businesses with a weak web presence — slow sites, missing SEO basics, thin Google Business Profiles — but doing that by hand, one business at a time, doesn't scale past a handful of searches a week.",
      'We built an audit engine that takes a search like "plumbers in Valencia" and turns it into a scored, ranked list: each business\'s website runs through an automated technical scan (page speed, on-page SEO) in parallel, and its Google Business Profile — rating, reviews, category, photos — gets pulled in on demand to keep API costs down. What used to be manual triage is now a ranked list the sales team can work straight from.',
    ],
  },
  {
    slug: "retail-inventory",
    title: "Industrial Backery CRM",
    imageFirst: false,
    accent: "#67cd6f",
    images: ["/work/martino/1.png", "/work/martino/2.png"],
    link: "https://example-retailer.com",
    summary:
      "A bakery ran its daily production and delivery schedule out of a Google Sheet — dispatchers filled it in, drivers squinted at it on their phones. We built a live dashboard that mirrors that same sheet in real time, so nothing changed for the people already using it.",
    paragraphs: [
      "The bakery tracked every day's orders in a spreadsheet: one row per bread item, grouped under a client block with a packaging stage, an assigned driver, and a delivery status. That sheet worked fine for typing in an office, but it broke down on the floor — tiny cells, no touch targets, no way to see which client blocks were still 'En Proceso' versus 'Listo' at a glance.",
      "Rather than replace the sheet, we built around it. The dashboard reads and writes the same spreadsheet dispatchers already edit, staying in sync through a webhook and a Cloudflare Durable Object that pushes live updates over WebSockets the moment a row changes. Orders render as resizable cards grouped by client, with a grid view for a wall-mounted screen in production and a stacked list for a driver's phone at the loading dock — same data, same source of truth, just legible wherever someone needs to read it.",
    ],
  },
  {
    slug: "booking-app",
    title: "Olivias Pet Spa",
    imageFirst: true,
    accent: "#d6688e",
    images: ["/work/oliviaspetspa/1.png", "/work/oliviaspetspa/2.png"],
    link: "https://www.oliviaspetspa.com",
    summary:
      "Olivia's Pet Spa needed an online presence and a faster way to turn phone photos into branded, shareable images — we designed and built the whole site, plus an admin panel that automates that photo workflow.",
    paragraphs: [
      "Olivia's Pet Spa is a mobile dog-grooming business with no site of its own — no way for people to see services and prices, browse past work, or book an appointment online. We designed and built the whole site from scratch: the branding, the pages (home, about, services and pricing, gallery, contact), and a booking form that lets a client request an appointment directly, deployed on Cloudflare.",
      "The one recurring pain point was photos. Every visit ends with a before/after shot on the groomer's phone, which she'd then edit by hand to make presentable for Instagram, the site's gallery, or the client — cropping, framing, and captioning each one individually. That took time away from the next appointment, and the results varied from post to post since nothing was templated.",
      "We replaced that manual step with a small backend built into an admin dashboard: she uploads a single photo or a before/after pair for a dog, and the system automatically composites it into a branded, gallery-ready square image — white frame, the shop's name, the dog's name, and an optional tagline, sized consistently at 1080×1080. She previews the result, downloads it, and either publishes it straight to the site's gallery or sends it on to the client — turning what used to be manual editing into a one-click, on-brand deliverable.",
    ],
  },
  {
    slug: "maxymar",
    title: "Maxymar Kiteschool",
    imageFirst: false,
    accent: "#F2994A",
    images: ["/work/maxymar/1.png", "/work/maxymar/2.png"],
    link: "https://maximar.mateo-rial.workers.dev/",
    summary:
      "Maxymar Kiteschool teaches kitesurfing at Playa Malvín in Montevideo — the site pairs the pitch (certified instructors, ideal beginner conditions, ten years running) with a direct WhatsApp booking flow for classes, rentals, and instructor courses.",
    paragraphs: [
      "Maxymar is a kitesurf school based at Playa Malvín, a spot known for shallow water and steady thermal and southeast winds — low-risk conditions for someone learning to kite for the first time. The site leads with that pitch: a stats bar (100+ students a season, ten years running) right under the hero, then a services grid — individual lessons, equipment rental, instructor certification courses — each pointing to its own page.",
      "Below the fold, a dedicated section makes the case for the location itself: an aerial shot of Playa Malvín paired with the specific conditions (thermal/southeast winds, a supervised water zone) that make it beginner-friendly. A blog with seasonal wind guides and gear advice rounds it out, and every call-to-action — from the hero button to the sticky WhatsApp icon — routes straight into booking a class.",
    ],
  },
  {
    slug: "silverglass",
    title: "Silverglass",
    imageFirst: true,
    accent: "#4FA8A8",
    images: ["/work/silverglass/1.png", "/work/silverglass/2.png"],
    link: "https://silverglass.mateo-rial.workers.dev/",
    summary:
      "Silverglass is a Montevideo jewelry brand that fuses glass-blowing with silverwork — the site is a quiet, image-first showcase where each ring's photos, materials, and story do the selling.",
    paragraphs: [
      "Silverglass makes handmade rings that combine fused glass with silver, each piece one of a kind. The site keeps the homepage to a single, uncluttered statement — the brand's tagline and a two-button choice: browse the collection or get in touch — rather than burying the work under navigation.",
      "The collection page is the real storefront: a grid of rings, each with its own two-photo carousel, a name, and a one-line description of its materials and colors. Contact runs entirely through WhatsApp, matching how the artisan actually takes orders — no cart, no checkout, just a direct line to the maker.",
    ],
  },
];
