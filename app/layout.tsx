import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FramerProvider } from "@/components/framer-provider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://indelibletechnologies.com"),
  title: "Indelible Technologies | Innovate. Build. Empower.",
  description: "Youth-led technology company developing affordable, secure, and practical digital solutions for modern institutions — from POS systems to financial management platforms.",
  keywords: ["software development", "digital transformation", "POS system", "financial management", "web development", "Indelible Technologies", "MsikaPos", "Teachers Bank"],
  authors: [{ name: "Indelible Technologies" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://indelibletechnologies.com",
    title: "Indelible Technologies | Innovate. Build. Empower.",
    description: "Youth-led technology company developing affordable, secure, and practical digital solutions — POS, financial management, and custom software.",
    siteName: "Indelible Technologies",
    images: [{ url: "/logo.png", width: 400, height: 400, alt: "Indelible Technologies Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Indelible Technologies | Innovate. Build. Empower.",
    description: "Youth-led technology company developing affordable, secure, and practical digital solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
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
