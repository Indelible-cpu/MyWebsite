import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore software projects built by Indelible Technologies in Malawi, including MsikaFlo retail management and the Teachers Bank cooperative finance platform.",
  keywords: [
    "software case studies",
    "Indelible Technologies portfolio",
    "web development portfolio Malawi",
    "MsikaFlo retail management",
    "Teachers Bank platform",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Indelible Technologies",
    description:
      "Explore practical business software, retail management, and cooperative finance projects built by Indelible Technologies in Malawi.",
    url: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
