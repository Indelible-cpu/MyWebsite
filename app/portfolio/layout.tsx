import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Proven Digital Projects",
  description:
    "Review our track record of successful projects: cooperative finance management systems, multi-branch POS rollouts, and custom web applications built by Indelible Technologies.",
  keywords: [
    "software case studies",
    "Indelible Technologies portfolio",
    "web development portfolio Malawi",
    "financial platform deployment",
    "retail inventory system cases",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Indelible Technologies",
    description:
      "Explore real-world software deployments and digital transformation case studies.",
    url: "https://indelibletechnologies.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
