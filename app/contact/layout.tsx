import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Project Enquiries",
  description:
    "Contact Indelible Technologies in Malawi to discuss a website, custom business software, digital product, or collaboration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Indelible Technologies",
    description:
      "Discuss your website, software, or digital product project with Indelible Technologies.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
