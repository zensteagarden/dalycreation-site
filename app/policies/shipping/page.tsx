import type { Metadata } from "next";
import { site } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Shipping policy",
};

export default function ShippingPolicyPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Shipping</h1>
        <p className="banner-note">
          Outline only — confirm rates and carriers with the shop before going
          fully live.
        </p>
        <ul>
          <li>Orders ship from Minnesota after the piece is cut and checked.</li>
          <li>
            Shipping cost depends on size, weight, and destination. We include
            an estimate with your proof and price when possible.
          </li>
          <li>
            Local pickup may be available — ask when you order via{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </li>
          <li>
            Wood is packed carefully. If something arrives damaged, contact us
            with photos and we will help make it right.
          </li>
        </ul>
      </div>
    </section>
  );
}
