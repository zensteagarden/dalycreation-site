import Link from "next/link";
import { products } from "../lib/products";
import { ProductCard } from "../components/ProductCard";
import { site } from "../lib/site";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="banner-note" style={{ marginBottom: "1.25rem" }}>
            Prices and product photos on this site are placeholders until the
            shop confirms them. You can still request a custom quote anytime.
          </p>
          <h1>Light, cut into wood.</h1>
          <p className="lede">
            Architectural panels, signs, and one-off pieces. Drawn for the job.
            Proved on screen. Cut only after you say yes. Made in{" "}
            {site.location}.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/shop">
              Browse the shop
            </Link>
            <Link className="btn btn-secondary" href="/custom">
              Start a custom piece
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-3">
          <article className="card">
            <h2>Proof first</h2>
            <p>You see the drawing before a single line is burned.</p>
          </article>
          <article className="card">
            <h2>Cut here</h2>
            <p>Designed, cut, checked, and packed in Minnesota.</p>
          </article>
          <article className="card">
            <h2>One at a time</h2>
            <p>
              Most pieces leave a few days after you approve the proof. Exact
              timing depends on the job — ask when you order.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Starter products</h2>
          <p style={{ color: "var(--muted)", marginTop: 0 }}>
            Clear starting points. Every piece can still be customized.
          </p>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-secondary" href="/shop">
              See all products
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Four steps. Nothing hidden.</h2>
          <ol className="steps">
            <li>
              <strong>Tell us the job.</strong> Size, wood, words, and where it
              will live.
            </li>
            <li>
              <strong>Approve the proof.</strong> A drawing of the actual cut.
              Change it until it is right.
            </li>
            <li>
              <strong>We cut it.</strong> Laser-cut or engraved in the shop,
              then checked by hand.
            </li>
            <li>
              <strong>It ships.</strong> Packed carefully for wood, not for a
              warehouse shelf.
            </li>
          </ol>
          <p style={{ marginTop: "1.5rem" }}>
            Questions? Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
