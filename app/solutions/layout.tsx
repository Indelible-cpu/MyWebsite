import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flagship Software Products & Solutions",
  description:
    "Discover Indelible Technologies' flagship software solutions: Teachers Bank (financial and SACCO management) and MsikaPos (modern cloud-based POS and retail inventory platform).",
  keywords: [
    "Teachers Bank",
    "MsikaPos",
    "POS system Malawi",
    "inventory management software",
    "SACCO financial software",
    "school financial management",
    "cloud point of sale",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/solutions",
  },
  openGraph: {
    title: "Flagship Software Products & Solutions | Indelible Technologies",
    description:
      "Explore Teachers Bank for institutional finance & SACCOs and MsikaPos for retail, billing, and inventory.",
    url: "https://indelibletechnologies.com/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
