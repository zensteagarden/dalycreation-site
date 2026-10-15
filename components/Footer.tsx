import Link from "next/link";
import { site } from "../lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h2>Daly Creation</h2>
          <p>
            Custom laser engraving and laser cutting in {site.location}. Proof
            first. Cut only after you say yes.
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <h2>Shop</h2>
          <ul>
            <li>
              <Link href="/shop">All products</Link>
            </li>
            <li>
              <Link href="/custom">Custom order / quote</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Help</h2>
          <ul>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/policies/shipping">Shipping</Link>
            </li>
            <li>
              <Link href="/policies/returns">Returns</Link>
            </li>
            <li>
              <Link href="/policies/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
