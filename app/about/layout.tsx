import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story, Mission & Values",
  description:
    "Learn about Indelible Technologies, a youth-led technology innovation company based in Malawi dedicated to digital transformation, software engineering, and institutional empowerment.",
  keywords: [
    "About Indelible Technologies",
    "youth tech company Malawi",
    "technology innovation Africa",
    "software company Mangochi",
    "digital transformation team",
  ],
  alternates: {
    canonical: "https://indelibletechnologies.com/about",
  },
  openGraph: {
    title: "About Us | Our Story, Mission & Values | Indelible Technologies",
    description:
      "A youth-led technology innovation company dedicated to driving digital transformation and affordable, practical digital tools.",
    url: "https://indelibletechnologies.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
