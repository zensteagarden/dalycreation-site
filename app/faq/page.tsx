import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Shipping, turnaround, proofs, and ordering questions for Daly Creation laser-cut wood.",
};

const faqs = [
  {
    q: "Do I see a proof before you cut?",
    a: "Yes. You approve a drawing of the actual cut before we burn or cut any wood. You can ask for changes until it is right.",
  },
  {
    q: "How long does an order take?",
    a: "Most pieces leave a few days after you approve the proof. Complex commissions can take longer. We will give you a clearer timeline when we send the proof and price.",
  },
  {
    q: "Where do you ship?",
    a: "We ship from Minnesota to US addresses. Shop items ship for a flat $6. Custom pieces: we tell you the shipping cost with your quote.",
  },
  {
    q: "Can I buy something that is not in the shop?",
    a: "Yes. Use the custom order form or email us. The shop lists starter products; custom work is welcome.",
  },
  {
    q: "Are the prices on the site final?",
    a: "Yes. Coasters and gifts in the shop have set prices and ship in the US for $6. Custom pieces are priced after we understand the job.",
  },
  {
    q: "What woods do you use?",
    a: "We typically use plywoods suited to laser cutting (such as Baltic birch) and other woods depending on the piece. We confirm wood with you before cutting.",
  },
  {
    q: "How do I pay?",
    a: "Shop items: press Buy now and pay securely with Stripe. Custom pieces: we send a proof and price first, then tell you how to pay.",
  },
];

export default function FaqPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>FAQ</h1>
        <p>
          Short answers. Still stuck? Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <p>
          Also see <Link href="/policies/shipping">Shipping</Link>,{" "}
          <Link href="/policies/returns">Returns</Link>, and{" "}
          <Link href="/policies/privacy">Privacy</Link>.
        </p>
      </div>
    </section>
  );
}
