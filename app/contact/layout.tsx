import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Project Enquiries",
  description:
    "Get in touch with Indelible Technologies in Mangochi, Malawi. Call +265 885 892 269, WhatsApp +265 993 732 694, or email indelibletechnologiesmw@gmail.com for software consultations and quotes.",
  keywords: [
    "Contact Indelible Technologies",
    "software developers Mangochi",
    "Malawi tech contact",
    "hire web developers Malawi",
  ],
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
  return <>{children}</>;
}
