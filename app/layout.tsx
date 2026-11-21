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
  metadataBase: new URL("https://indelibletechnologies.com"),
  title: {
    default: "Indelible Technologies | Innovate. Build. Empower.",
    template: "%s | Indelible Technologies",
  },
  description:
    "Youth-led technology company developing affordable, secure, and practical digital solutions for modern institutions — from POS systems (MsikaPos) to financial management platforms (Teachers Bank) and custom web development.",
  keywords: [
    "software development",
    "digital transformation",
    "POS system",
    "financial management",
    "web development",
    "Indelible Technologies",
    "MsikaPos",
    "Teachers Bank",
    "Malawi tech company",
    "custom software solutions",
  ],
  authors: [{ name: "Indelible Technologies", url: "https://indelibletechnologies.com" }],
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
    canonical: "https://indelibletechnologies.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indelibletechnologies.com",
    title: "Indelible Technologies | Innovate. Build. Empower.",
    description:
      "Youth-led technology company developing affordable, secure, and practical digital solutions — POS, financial management, and custom software.",
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
    title: "Indelible Technologies | Innovate. Build. Empower.",
    description:
      "Youth-led technology company developing affordable, secure, and practical digital solutions.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://indelibletechnologies.com/#organization",
      "name": "Indelible Technologies",
      "url": "https://indelibletechnologies.com",
      "logo": "https://indelibletechnologies.com/logo.png",
      "description":
        "Youth-led technology company developing affordable, secure, and practical digital solutions for modern institutions — from POS systems to financial management platforms.",
      "email": "indelibletechnologiesmw@gmail.com",
      "telephone": "+265885892269",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mangochi",
        "addressCountry": "MW"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+265885892269",
          "contactType": "customer service",
          "availableLanguage": ["English", "Chichewa"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://indelibletechnologies.com/#website",
      "url": "https://indelibletechnologies.com",
      "name": "Indelible Technologies",
      "description":
        "Youth-led technology company developing affordable, secure, and practical digital solutions.",
      "publisher": {
        "@id": "https://indelibletechnologies.com/#organization"
      }
    }
  ]
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
