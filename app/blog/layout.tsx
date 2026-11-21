import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Blog & Tech Insights",
  description:
    "Read the latest technology articles, digital transformation insights, and industry updates on POS systems, cooperative financial security, and education technology.",
  keywords: [
    "tech blog Malawi",
    "digital transformation articles",
    "POS technology insights",
    "cooperative finance security",
    "education tech",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/blog",
  },
  openGraph: {
    title: "Innovation Blog & Tech Insights | Indelible Technologies",
    description:
      "Insights, analysis, and perspectives on digital innovation and modern management systems.",
    url: "https://indelibletechnologies.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
