import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development & Custom Software Services",
  description:
    "Explore website development, custom web applications, business management systems, and practical technology planning from Indelible Technologies.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Indelible Technologies",
    description:
      "Websites, custom software, business systems, and technology planning tailored to your workflow.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
