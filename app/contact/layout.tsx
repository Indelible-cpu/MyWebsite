import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Consultation & Quote",
  description:
    "Get in touch with Indelible Technologies. Call +265 885 892 269, message on WhatsApp (+265 993 732 694), or email indelibletechnologiesmw@gmail.com for inquiries and software consultations.",
  keywords: [
    "Contact Indelible Technologies",
    "software developers Mangochi",
    "Malawi tech contact",
    "hire web developers Malawi",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/contact",
  },
  openGraph: {
    title: "Contact Us | Indelible Technologies",
    description:
      "Connect with our team in Mangochi, Malawi for software quotes, consultations, and support.",
    url: "https://indelibletechnologies.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
