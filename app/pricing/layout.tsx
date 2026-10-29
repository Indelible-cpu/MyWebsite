import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Pricing & Custom Quotes",
  description:
    "Learn how Indelible Technologies scopes website and software projects, with tailored quotes based on requirements, timeline, and functionality.",
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
  return children;
}
