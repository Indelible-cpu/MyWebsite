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
    "Indelible Technologies builds practical websites, business software and digital products in Malawi, including MsikaFlo retail management. Explore our solutions, services and project portfolio.",
  keywords: [
    "software development Malawi",
    "web development Malawi",
    "custom software",
    "business management systems",
    "retail management system",
    "MsikaFlo",
    "Teachers Bank",
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
        "Youth-led technology company developing affordable, secure, and practical digital solutions for modern institutions — from retail management systems (MsikaFlo) to cooperative finance platforms (Teachers Bank).",
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
