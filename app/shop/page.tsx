import { pageMetadata } from "../../lib/seo";
import { products } from "../../lib/products";
import { ProductCard } from "../../components/ProductCard";

export const metadata = pageMetadata({
  "title": "Shop Engraved Wood Gifts & Custom Signs",
  "description": "Browse engraved wood coaster sets, turquoise inlay gifts, custom LED signs, and cutting boards made by Daly Creation in Minnesota.",
  "path": "/shop"
});

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const params = await searchParams;
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
        {params.checkout === "success" ? (
          <p className="banner-note" role="status">
            Thank you! Your order went through. Stripe will email your receipt.
            We will email you when it ships.
          </p>
        ) : null}
        <p>
          Coasters and gifts ship in the US for $6. LED signs and cutting
          boards are made to order. Ask for a quote on the{" "}
          <a href="/custom">Custom order</a> page.
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
