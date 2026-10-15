import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatPrice, products } from "../../../lib/products";
import { BuyButton } from "../../../components/BuyButton";
import { site } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <section className="section">
      <div className="wrap product-layout">
        <div className="product-media">
          <img
            src={`/images/${product.slug}.svg`}
            alt={`Placeholder photo for ${product.name}. Real product photo needed.`}
            width={800}
            height={600}
          />
          <p className="price-note" style={{ marginTop: "0.5rem" }}>
            <span className="pill">Photo placeholder</span> — replace with a
            real photo before advertising this product.
          </p>
        </div>
        <div>
          <p style={{ margin: 0, color: "var(--muted)" }}>
            <Link href="/shop">← Shop</Link>
          </p>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.75rem, 4vw, 2.4rem)",
              margin: "0.5rem 0 0.75rem",
            }}
          >
            {product.name}
          </h1>
          <p className="price">
            {formatPrice(product.priceCents)}{" "}
            <span className="price-note">(price placeholder)</span>
          </p>
          <p>{product.description}</p>
          <ul>
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div style={{ display: "grid", gap: "0.75rem", marginTop: "1.25rem" }}>
            <BuyButton slug={product.slug} name={product.name} />
            <Link className="btn btn-secondary" href="/custom">
              Request a custom version
            </Link>
            <p>
              Or email{" "}
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("Order: " + product.name)}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
