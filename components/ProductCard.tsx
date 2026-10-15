import Link from "next/link";
import { formatPrice, type Product } from "../lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/shop/${product.slug}`} className="thumb">
        <img src={product.image} alt={product.imageAlt} width={800} height={600} style={{ objectFit: "cover" }} />
      </Link>
      <div className="product-body">
        <h2>
          <Link href={`/shop/${product.slug}`}>{product.name}</Link>
        </h2>
        <p>{product.shortDescription}</p>
        <p className="price">{formatPrice(product.priceCents)}</p>
        <Link className="btn btn-secondary" href={`/shop/${product.slug}`}>
          View details
        </Link>
      </div>
    </article>
  );
}
