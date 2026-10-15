import type { Metadata } from "next";
import { products } from "../../lib/products";
import { ProductCard } from "../../components/ProductCard";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Starter laser-cut and engraved wood products from Daly Creation. Prices and photos are placeholders until confirmed.",
};

export default function ShopPage() {
  return (
    <section className="section">
      <div className="wrap">
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.4rem)",
            margin: "0 0 0.5rem",
          }}
        >
          Shop
        </h1>
        <p className="banner-note">
          All prices and photos are placeholders for the family to confirm.
          Nothing here invents reviews or years in business. Prefer something
          unique? Use{" "}
          <a href="/custom">Custom order</a>.
        </p>
        <div className="product-grid" style={{ marginTop: "1.5rem" }}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
