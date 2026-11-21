import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about Indelible Technologies' privacy policy, data collection practices, and how we protect user information and confidentiality.",
  alternates: {
    canonical: "https://indelibletechnologies.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
