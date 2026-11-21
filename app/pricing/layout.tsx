import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Pricing & Custom Quotes",
  description:
    "Learn how Indelible Technologies scopes website and software projects, with transparent quotes tailored to your requirements, timeline, and functionality.",
  keywords: [
    "website development cost Malawi",
    "software pricing",
    "custom software quote",
    "business management systems cost",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Project Pricing | Indelible Technologies",
    description:
      "Request a tailored quote for a website, business management system, or custom software project.",
    url: "/pricing",
  },
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
