import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Daly Creation at ${site.email} for laser-cut wood quotes and orders.`,
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Contact</h1>
        <p>
          Email is the best way to reach us. We use it for proofs, prices, and
          order questions.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          <strong>Location:</strong> {site.location}
        </p>
        <h2>Quick links</h2>
        <ul>
          <li>
            <Link href="/custom">Request a custom proof &amp; price</Link>
          </li>
          <li>
            <Link href="/shop">Browse starter products</Link>
          </li>
          <li>
            <Link href="/faq">FAQ — shipping, turnaround, proofs</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
