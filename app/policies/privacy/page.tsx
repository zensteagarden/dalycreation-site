import { pageMetadata } from "../../../lib/seo";
import { site } from "../../../lib/site";

export const metadata = pageMetadata({
  "title": "Privacy Policy",
  "description": "Read how Daly Creation handles quote requests, order information, payment details, and questions about your personal data.",
  "path": "/policies/privacy"
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Privacy</h1>
        <p>
          We collect only what we need to quote, make, and ship your order —
          typically your name, email, phone (if you share it), shipping address,
          and project details.
        </p>
        <ul>
          <li>
            Quote and contact forms send information to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> (or open your
            email app as a backup).
          </li>
          <li>
            Payment, when enabled, is handled by Stripe. We do not store full
            card numbers on this site.
          </li>
          <li>
            We do not sell your personal information.
          </li>
          <li>
            Questions about your data:{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </li>
        </ul>
      </div>
    </section>
  );
}
