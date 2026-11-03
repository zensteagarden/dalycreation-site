import type { Metadata } from "next";
import { pageMetadata } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";
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
  if (!product) notFound();
  return pageMetadata({
    title: product.name,
    description: `${product.shortDescription} Made in Minnesota. ${product.priceCents === null ? "Request a proof and price before we make it." : "View details and order from Daly Creation."}`,
    path: `/shop/${product.slug}`,
    image: product.image,
    imageAlt: product.imageAlt,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <section className="section">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Shop", item: `${site.url}/shop` },
          { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}/shop/${product.slug}` },
        ],
      }} />
      {product.priceCents !== null && product.buyUrl ? (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: new URL(product.image, site.url).href,
          url: `${site.url}/shop/${product.slug}`,
          brand: { "@type": "Brand", name: site.name },
          offers: {
            "@type": "Offer",
            url: `${site.url}/shop/${product.slug}`,
            price: (product.priceCents / 100).toFixed(2),
            priceCurrency: "USD",
            seller: { "@type": "Organization", name: site.name, url: site.url },
          },
        }} />
      ) : null}
      <div className="wrap product-layout">
        <div className="product-media">
          <img src={product.image} alt={product.imageAlt} width={800} height={600} />
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
            {formatPrice(product.priceCents)}
          </p>
          <p>{product.description}</p>
          <ul>
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div style={{ display: "grid", gap: "0.75rem", marginTop: "1.25rem" }}>
            <BuyButton product={product} />
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
