import type { Product } from "../lib/products";

export function BuyButton({ product }: { product: Product }) {
  if (!product.buyUrl) {
    return (
      <a className="btn" href="/custom">
        Ask for a quote
      </a>
    );
  }
  return (
    <div>
      <a className="btn" href={product.buyUrl}>
        Buy now
      </a>
      <p className="price-note" style={{ marginTop: "0.5rem" }}>
        Secure checkout by Stripe. US shipping is $6.
      </p>
    </div>
  );
}
