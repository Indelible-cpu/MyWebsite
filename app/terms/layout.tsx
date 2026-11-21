import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service governing the use of Indelible Technologies' digital products, software platforms, and website services.",
  alternates: {
    canonical: "https://indelibletechnologies.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
