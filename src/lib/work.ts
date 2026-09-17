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

    // internal tool, no public link
    summary:
      "A field-service company was running quotes, jobs, and invoicing across three disconnected spreadsheets — we replaced them with one CRM built around how their dispatchers already worked.",
    paragraphs: [
      "A field-service company was running quotes, jobs, and invoicing across three disconnected spreadsheets. We spent the first two weeks shadowing their dispatchers before writing any code.",
      "The prototype became the product: a lightweight CRM tracking every job from lead to invoice, built around how their team already worked instead of forcing a new process on them.",
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
      "A multi-location retailer needed one system to see inventory and staff scheduling across every store, replacing a mix of paper logs and a shared spreadsheet.",
    paragraphs: [
      "A multi-location retailer needed one system to see inventory and staff scheduling across every store, replacing a mix of paper logs and a shared spreadsheet.",
      "We shipped store-by-store, starting with the busiest location, so the team was never without a working system while we rolled the rest out.",
    ],
  },
  {
    slug: "booking-app",
    title: "Olivias Pet Spa",
    imageFirst: true,
    accent: "#d6688e",
    images: ["/work/oliviaspetspa/1.png", "/work/oliviaspetspa/2.png"],
    link: "https://example-booking.app",
    summary:
      "A wellness studio was losing bookings to phone tag and no-shows — we built a mobile app clients actually use to book, reschedule, and pay in a few taps.",
    paragraphs: [
      "A wellness studio was losing bookings to phone tag and last-minute no-shows, with front-desk staff spending most of their day on the phone instead of with clients.",
      "We built a mobile app for booking, rescheduling, and payment, plus reminders that cut no-shows sharply in the first month it was live.",
    ],
  },
];
