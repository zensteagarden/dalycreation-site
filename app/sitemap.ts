import type { MetadataRoute } from "next";
import { products } from "../lib/products";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/", "/shop", "/custom", "/about", "/faq", "/contact",
    "/policies/shipping", "/policies/returns", "/policies/privacy",
  ];
  return [
    ...pages.map((path) => ({ url: new URL(path, site.url).href })),
    ...products.map((product) => ({
      url: `${site.url}/shop/${product.slug}`,
    })),
  ];
}
