import type { Metadata } from "next";
import { site } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Returns policy",
};

export default function ReturnsPolicyPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Returns</h1>
        <p className="banner-note">
          Draft policy for family review — custom work needs clear rules before
          launch.
        </p>
        <ul>
          <li>
            Custom pieces made to an approved proof are generally not
            returnable, because they were cut to your design.
          </li>
          <li>
            If we made an error versus the approved proof, contact us and we
            will fix or remake the piece.
          </li>
          <li>
            If shipping damaged your order, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> with photos within
            a few days of delivery.
          </li>
          <li>
            Starter products in the shop follow the same proof-first process
            when they include custom text or sizing.
          </li>
        </ul>
      </div>
    </section>
  );
}
