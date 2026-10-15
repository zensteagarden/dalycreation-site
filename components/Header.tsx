"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/custom", label: "Custom order" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          Daly Creation
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => {
            const current =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={current ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
