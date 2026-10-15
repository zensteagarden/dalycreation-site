"use client";

import { useState } from "react";

type Props = {
  slug: string;
  name: string;
};

export function BuyButton({ slug, name }: Props) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onBuy() {
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setMessage(
        data.message ||
          "Checkout is not ready yet. Please email info@dalycreation.com to order."
      );
    } catch {
      setMessage(
        "Could not start checkout. Email info@dalycreation.com to order " +
          name +
          "."
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <button type="button" className="btn" onClick={onBuy} disabled={busy}>
        {busy ? "Starting checkout…" : "Buy with Stripe"}
      </button>
      {message ? (
        <p className="banner-note" style={{ marginTop: "0.75rem" }} role="status">
          {message}
        </p>
      ) : (
        <p className="price-note" style={{ marginTop: "0.5rem" }}>
          Checkout uses Stripe when keys are configured. Until then, use Custom
          order or email info@dalycreation.com.
        </p>
      )}
    </div>
  );
}
