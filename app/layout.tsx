import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Custom laser-cut wood`,
    template: `%s · ${site.name}`,
  },
  description:
    "Custom laser engraving and laser cutting in Minnesota. Architectural panels, signs, name plates, gifts, and commissions. Proof first. Cut only after you approve.",
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
