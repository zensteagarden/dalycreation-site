export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  /** Price in USD cents. Null means custom quote. */
  priceCents: number | null;
  image: string;
  imageAlt: string;
  details: string[];
  /** Stripe Payment Link (DC account). Missing means quote only. */
  buyUrl?: string;
};

export const SHIPPING_CENTS = 600;

export const products: Product[] = [
  {
    slug: "tree-of-life-coasters",
    name: "Gratitude Tree coaster set",
    shortDescription: "Engraved wood coasters with a tree of life design.",
    description:
      "A set of wood coasters engraved with a gratitude tree of life. Good for your own table or as a gift.",
    priceCents: 2400,
    image: "/images/tree-of-life-coasters.jpg",
    imageAlt: "Round wood coasters engraved with a tree of life and the word Gratitude.",
    details: ["Set of 4 coasters", "Laser-engraved wood", "Made in Minnesota", "US shipping $6"],
    buyUrl: "https://buy.stripe.com/6oU9AS54g1St11h2Mu5ZC00",
  },
  {
    slug: "owl-coasters",
    name: "Owl coaster set",
    shortDescription: "Engraved wood coasters with an owl design.",
    description: "A set of wood coasters engraved with an owl. A friendly gift for owl fans.",
    priceCents: 2600,
    image: "/images/owl-coasters.jpg",
    imageAlt: "Wood coasters engraved with an owl design.",
    details: ["Coaster set", "Laser-engraved wood", "Made in Minnesota", "US shipping $6"],
    buyUrl: "https://buy.stripe.com/6oUaEWcwI1St5hx1Iq5ZC01",
  },
  {
    slug: "turquoise-gratitude-circle",
    name: "Turquoise Gratitude circle",
    shortDescription: "Engraved wood circle with turquoise inlay.",
    description:
      "A round wood piece engraved with Gratitude and filled with turquoise inlay. Hang it or stand it on a shelf.",
    priceCents: 5500,
    image: "/images/turquoise-gratitude-circle.jpg",
    imageAlt: "Round wood piece with the word Gratitude and turquoise inlay.",
    details: ["Engraved wood with turquoise inlay", "Made in Minnesota", "US shipping $6"],
    buyUrl: "https://buy.stripe.com/28E14mgMYgNneS75YG5ZC02",
  },
  {
    slug: "led-light-sign",
    name: "Custom LED light sign",
    shortDescription: "Your name, logo, or design on a glowing LED sign. Custom quote.",
    description:
      "A clear acrylic panel engraved with your words, name, or logo. It sits on an LED base that lights up the design. Good for a desk, shop counter, or night light. Tell us what you want and we send a proof and price before we make it.",
    priceCents: null,
    image: "/images/led-sign.jpg",
    imageAlt: "Clear acrylic LED sign on a black base, glowing blue with a heart and the words Your Name or Logo Here.",
    details: ["Your name, logo, or design", "Clear acrylic on a lit base", "Proof and price before we make it", "Made in Minnesota"],
  },
  {
    slug: "cutting-board",
    name: "Laser engraved cutting board",
    shortDescription: "Wood cutting board engraved with a name, date, or design. Custom quote.",
    description:
      "A wood cutting board laser engraved with a family name, monogram, date, or design. A good wedding, housewarming, or holiday gift. We send a proof and price first.",
    priceCents: null,
    image: "/images/cutting-board.jpg",
    imageAlt: "Wood cutting board engraved with a monogram M, the words The Millers, and Est. 2026.",
    details: ["Name, date, or design", "Proof and price before we make it", "Made in Minnesota"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number | null): string {
  if (cents == null) return "Custom quote";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}
