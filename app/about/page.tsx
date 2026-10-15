import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Daly Creation is a Minnesota laser engraving and laser cutting shop for custom wood panels, signs, and commissions.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>About Daly Creation</h1>
        <p>
          Daly Creation is a small laser engraving and laser cutting shop in{" "}
          {site.location}. We make custom wood panels and screens, signs and
          house numbers, desk and name plates, engraved gifts, and one-off
          commissions.
        </p>
        <h2>How we work</h2>
        <p>
          Every piece is drawn for the job. You see a proof on screen before we
          cut. Grain stays visible. The cut does the decorating. We do not
          dropship blanks or sell a catalog of identical stock.
        </p>
        <h2>What we make</h2>
        <ul>
          <li>Architectural panels and screens</li>
          <li>Signs, house numbers, and business lettering</li>
          <li>Desk and name plates</li>
          <li>Engraved gifts</li>
          <li>Commissions with proof before cutting</li>
        </ul>
        <p>
          Browse the <Link href="/shop">shop</Link> for starter products, or{" "}
          <Link href="/custom">start a custom piece</Link>. Reach us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
