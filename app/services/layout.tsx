import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services & Custom Software Solutions",
  description:
    "Explore Indelible Technologies' comprehensive software services: custom web applications, high-performance website development, ERP & business management systems, UI/UX design, and cloud integrations.",
  keywords: [
    "custom software development",
    "web development Malawi",
    "business management systems",
    "ERP software",
    "web application development",
    "UI UX design",
    "cloud integrations",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/services",
  },
  openGraph: {
    title: "Digital Services & Custom Software Solutions | Indelible Technologies",
    description:
      "Transform your operations with high-performance web development, custom enterprise applications, and secure management platforms.",
    url: "https://indelibletechnologies.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
