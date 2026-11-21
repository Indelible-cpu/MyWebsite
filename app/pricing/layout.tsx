import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Transparent Custom Quotes",
  description:
    "Get clear, affordable pricing and customized quotes for website development, custom web applications, and enterprise ERP solutions from Indelible Technologies.",
  keywords: [
    "website development cost Malawi",
    "software pricing",
    "custom software quote",
    "ERP software cost",
    "affordable web development",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/pricing",
  },
  openGraph: {
    title: "Pricing & Transparent Custom Quotes | Indelible Technologies",
    description:
      "Explore transparent plans and request a customized quote for your next digital project.",
    url: "https://indelibletechnologies.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
