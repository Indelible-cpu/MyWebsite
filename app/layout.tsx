import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FramerProvider } from "@/components/framer-provider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://indelibletech.vercel.app"),
  title: {
    default: "Indelible Technologies | Software & Web Development in Malawi",
    template: "%s | Indelible Technologies",
  },
  description:
    "Indelible Technologies builds practical websites, business software and digital products in Malawi, including MsikaFlo, Teachers Bank, SecSchoolHub, and IndeMarket. Explore our solutions, services and project portfolio.",
  keywords: [
    "software development Malawi",
    "web development Malawi",
    "custom software",
    "business management systems",
    "retail management system",
    "MsikaFlo",
    "Teachers Bank",
    "SecSchoolHub",
    "IndeMarket",
    "school management system Malawi",
    "digital marketplace Malawi",
    "Indelible Technologies",
  ],
  authors: [{ name: "Indelible Technologies" }],
  creator: "Indelible Technologies",
  publisher: "Indelible Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indelibletech.vercel.app",
    title: "Indelible Technologies | Software & Web Development in Malawi",
    description:
      "Web development, business software and practical digital products for businesses, schools and organisations in Malawi.",
    siteName: "Indelible Technologies",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Indelible Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indelible Technologies | Software & Web Development in Malawi",
    description:
      "Web development, business software and practical digital products from Indelible Technologies in Malawi.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://indelibletech.vercel.app/#organization",
      "name": "Indelible Technologies",
      "url": "https://indelibletech.vercel.app",
      "logo": "https://indelibletech.vercel.app/logo.png",
      "description":
        "Youth-led technology company developing affordable, secure, and practical digital solutions for modern institutions — from retail management systems (MsikaFlo) and cooperative finance platforms (Teachers Bank) to education hubs (SecSchoolHub) and marketplaces (IndeMarket).",
      "email": "indelibletechnologiesmw@gmail.com",
      "telephone": "+265885892269",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mangochi",
        "addressCountry": "MW",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+265885892269",
          "contactType": "customer service",
          "availableLanguage": ["English", "Chichewa"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://indelibletech.vercel.app/#website",
      "url": "https://indelibletech.vercel.app",
      "name": "Indelible Technologies",
      "description":
        "Practical websites, business software and digital products in Malawi.",
      "publisher": {
        "@id": "https://indelibletech.vercel.app/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://indelibletech.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to build a custom system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "It depends on the complexity of the project. Simple websites typically take 1–2 weeks. Custom software systems like POS or management platforms typically take 4–12 weeks. We always provide a detailed timeline before we begin.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer ongoing support after delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. All our systems come with an initial support period. We also offer ongoing maintenance plans to ensure your system stays updated, secure, and running smoothly.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I request modifications after the project is done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Absolutely. We understand that business needs evolve. We offer post-delivery change requests and version upgrades at reasonable rates.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes Indelible Technologies different from other developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We are a youth-led team that builds practical, real-world solutions — not generic templates. We focus on affordability, long-term support, and truly understanding your unique needs before writing a single line of code.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I own the software after it is built?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "For custom-built solutions, yes — you own the final product. For our flagship products (Teachers Bank, MsikaFlo, SecSchoolHub, IndeMarket), we operate on a licensing model. Full details are outlined in our Terms of Service.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://indelibletech.vercel.app/#msikaflo",
      "name": "MsikaFlo",
      "operatingSystem": "Web, Cloud, Offline-First",
      "applicationCategory": "BusinessApplication",
      "description":
        "Retail management system with inventory tracking, sales recording, AI-assisted product locating, and online storefront integration.",
      "creator": {
        "@id": "https://indelibletech.vercel.app/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://indelibletech.vercel.app/#teachersbank",
      "name": "Teachers Bank",
      "operatingSystem": "Web, Cloud",
      "applicationCategory": "FinanceApplication",
      "description":
        "Cooperative financial management platform for member contributions, loan workflows, savings, and audit reporting.",
      "creator": {
        "@id": "https://indelibletech.vercel.app/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://indelibletech.vercel.app/#secschoolhub",
      "name": "SecSchoolHub",
      "operatingSystem": "Web, Cloud",
      "applicationCategory": "EducationalApplication",
      "description":
        "Comprehensive secondary school management hub for student records, academic performance tracking, fee management, and institutional administration.",
      "creator": {
        "@id": "https://indelibletech.vercel.app/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://indelibletech.vercel.app/#indemarket",
      "name": "IndeMarket",
      "operatingSystem": "Web, Mobile",
      "applicationCategory": "ShoppingApplication",
      "description":
        "Modern digital marketplace platform connecting local vendors, consumers, and institutions with seamless cataloging and order management.",
      "creator": {
        "@id": "https://indelibletech.vercel.app/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background font-sans text-foreground flex flex-col">
        <ThemeProvider>
          <FramerProvider>
            <Navigation />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
            <WhatsAppButton />
          </FramerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
