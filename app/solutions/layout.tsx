import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Products & Business Solutions",
  description:
    "Discover digital products from Indelible Technologies, including MsikaFlo retail management and the Teachers Bank cooperative finance platform.",
  keywords: [
    "MsikaFlo",
    "Teachers Bank",
    "retail management software",
    "POS system Malawi",
    "inventory management",
    "SACCO financial software",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Digital Solutions | Indelible Technologies",
    description:
      "Explore practical retail and cooperative finance software built around real operational workflows.",
    url: "/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
