import Link from "next/link";
import { formatPrice, type Product } from "../lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/shop/${product.slug}`} className="thumb">
        <img
          src={`/images/${product.slug}.svg`}
          alt={`Placeholder photo for ${product.name}. Real product photo coming soon.`}
          width={800}
          height={600}
        />
      </Link>
      <div className="product-body">
        <div>
          <span className="pill">Photo placeholder</span>
        </div>
        <h2>
          <Link href={`/shop/${product.slug}`}>{product.name}</Link>
        </h2>
        <p>{product.shortDescription}</p>
        <p className="price">
          {formatPrice(product.priceCents)}{" "}
          <span className="price-note">(price placeholder)</span>
        </p>
        <Link className="btn btn-secondary" href={`/shop/${product.slug}`}>
          View details
        </Link>
      </div>
    </article>
  );
}
