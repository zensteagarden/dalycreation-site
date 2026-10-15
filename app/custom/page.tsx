import type { Metadata } from "next";
import { QuoteForm } from "../../components/QuoteForm";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Custom order",
  description:
    "Request a proof and price for a custom laser-cut or engraved wood piece from Daly Creation.",
};

export default function CustomPage() {
  return (
    <section className="section">
      <div className="wrap prose">
        <h1>Custom order / quote</h1>
        <p>
          Tell us the job. We reply with a proof path and a price before any
          wood is cut. Nothing is charged until you approve.
        </p>
        <p className="banner-note">
          This form emails or records your request for{" "}
          <strong>{site.email}</strong>. If sending fails, your email app will
          open as a backup, or you can write that address directly.
        </p>
        <QuoteForm />
      </div>
    </section>
  );
}
