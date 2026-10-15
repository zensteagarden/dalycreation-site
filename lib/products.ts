export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "panels" | "signs" | "gifts" | "plates";
  /** Placeholder price in USD cents — family must confirm before going live */
  priceCents: number;
  pricePlaceholder: true;
  photoPlaceholder: true;
  photoLabel: string;
  details: string[];
  /** Optional Stripe Price ID — leave empty until configured */
  stripePriceId?: string;
};

export const products: Product[] = [
  {
    slug: "prairie-panel-small",
    name: "Prairie panel — small",
    shortDescription: "Laser-cut wood screen for a window ledge or shelf.",
    description:
      "A horizontal fretwork panel with a prairie-style pattern. Sized for a shelf, window ledge, or as a wall accent. Grain stays visible; the cut does the decorating.",
    category: "panels",
    priceCents: 6500,
    pricePlaceholder: true,
    photoPlaceholder: true,
    photoLabel: "Placeholder: small prairie panel photo",
    details: [
      "Approx. 12 × 6 in (placeholder size — confirm before selling)",
      "Baltic birch or similar plywood (wood choice confirmed at order)",
      "Proof sent before cutting",
      "Made in Minnesota",
    ],
  },
  {
    slug: "prairie-panel-medium",
    name: "Prairie panel — medium",
    shortDescription: "Room-scale laser-cut screen or wall panel.",
    description:
      "A larger prairie-geometry panel for a wall, divider, or window. Drawn for the job, proved on screen, cut only after you approve.",
    category: "panels",
    priceCents: 14500,
    pricePlaceholder: true,
    photoPlaceholder: true,
    photoLabel: "Placeholder: medium prairie panel photo",
    details: [
      "Approx. 24 × 12 in (placeholder size — confirm before selling)",
      "Wood choice confirmed at order",
      "Proof sent before cutting",
      "Made in Minnesota",
    ],
  },
  {
    slug: "house-number-plaque",
    name: "House number plaque",
    shortDescription: "Cut-through or engraved house numbers on wood.",
    description:
      "House numbers cut through or engraved into wood. Lettering is cut or burned — never printed on. You approve a proof with your exact numbers and style before we cut.",
    category: "signs",
    priceCents: 4500,
    pricePlaceholder: true,
    photoPlaceholder: true,
    photoLabel: "Placeholder: house number plaque photo",
    details: [
      "Your numbers, your size (tell us in the order notes)",
      "Cut-through or engraved lettering",
      "Proof sent before cutting",
      "Made in Minnesota",
    ],
  },
  {
    slug: "desk-name-plate",
    name: "Desk name plate",
    shortDescription: "Clean lettering for a desk or office door.",
    description:
      "A wood name plate with clean cut or engraved lettering. Good for a desk, office door, or gift. You pick the name and we send a proof first.",
    category: "plates",
    priceCents: 3500,
    pricePlaceholder: true,
    photoPlaceholder: true,
    photoLabel: "Placeholder: desk name plate photo",
    details: [
      "Custom name or title text",
      "Approx. 8 × 2 in (placeholder size — confirm)",
      "Proof sent before cutting",
      "Made in Minnesota",
    ],
  },
  {
    slug: "engraved-gift-box",
    name: "Engraved gift piece",
    shortDescription: "A small engraved wood gift with a short message.",
    description:
      "A small engraved wood piece for a gift — name, date, or short message. We send a proof of the engraving before anything is cut.",
    category: "gifts",
    priceCents: 2800,
    pricePlaceholder: true,
    photoPlaceholder: true,
    photoLabel: "Placeholder: engraved gift photo",
    details: [
      "Short custom text (name, date, or message)",
      "Size options confirmed at order",
      "Proof sent before cutting",
      "Made in Minnesota",
    ],
  },
  {
    slug: "business-sign-small",
    name: "Business sign — small",
    shortDescription: "Wood sign for a shop door, booth, or desk.",
    description:
      "A small business or studio sign cut or engraved in wood. Bring your wording (and a logo file if you have one). Proof and price before we cut.",
    category: "signs",
    priceCents: 8500,
    pricePlaceholder: true,
    photoPlaceholder: true,
    photoLabel: "Placeholder: small business sign photo",
    details: [
      "Custom business name / wording",
      "Logo file welcome (vector preferred)",
      "Proof and price before cutting",
      "Made in Minnesota",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
