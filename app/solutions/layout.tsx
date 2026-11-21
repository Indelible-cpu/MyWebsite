import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Products & Business Solutions",
  description:
    "Discover flagship digital products from Indelible Technologies: MsikaFlo (retail & inventory), Teachers Bank (cooperative finance), SecSchoolHub (secondary school management), and IndeMarket (digital marketplace).",
  keywords: [
    "MsikaFlo",
    "Teachers Bank",
    "SecSchoolHub",
    "IndeMarket",
    "retail management software",
    "school management system Malawi",
    "digital marketplace platform",
    "POS system Malawi",
    "inventory management",
    "SACCO financial software",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Digital Solutions | Indelible Technologies",
    description:
      "Explore practical retail, school management, marketplace, and cooperative finance software built by Indelible Technologies.",
    url: "/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
