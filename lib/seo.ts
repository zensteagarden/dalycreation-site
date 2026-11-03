import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title, description, path,
  image = "/images/tree-of-life-coasters.jpg",
  imageAlt = "Daly Creation wood coasters engraved with a gratitude tree of life",
}: PageSeo): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = new URL(path, site.url).href;
  const imageUrl = new URL(image, site.url).href;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", locale: "en_US", siteName: site.name,
      title: fullTitle, description, url,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image", title: fullTitle, description,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
  };
}
