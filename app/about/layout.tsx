import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Technology Studio",
  description:
    "Learn about Indelible Technologies, a Malawi-based team focused on practical digital products, websites, and custom software for organisations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Indelible Technologies",
    description:
      "Our mission is to make practical, sustainable digital solutions accessible to businesses and organisations.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
