import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Sitemap | Site Navigation",
  description:
    "Browse the full sitemap of Indelible Technologies to find all pages, software products, case studies, and resources easily.",
  alternates: {
    canonical: "https://indelibletechnologies.com/sitemap",
  },
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
