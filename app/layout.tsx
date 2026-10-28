import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FramerProvider } from "@/components/framer-provider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://indelibletech.vercel.app"),
  title: { default: "Indelible Technologies | Software & Web Development in Malawi", template: "%s | Indelible Technologies" },
  description: "Indelible Technologies builds practical websites, business software and digital products in Malawi, including MsikaFlo retail management. Explore our solutions, services and project portfolio.",
  keywords: ["software development Malawi", "web development Malawi", "custom software", "business management systems", "retail management system", "MsikaFlo", "Indelible Technologies"],
  authors: [{ name: "Indelible Technologies" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://indelibletech.vercel.app",
    title: "Indelible Technologies | Software & Web Development in Malawi",
    description: "Web development, business software and practical digital products for businesses, schools and organisations in Malawi.",
    siteName: "Indelible Technologies",
    images: [{ url: "/logo.png", width: 400, height: 400, alt: "Indelible Technologies Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Indelible Technologies | Software & Web Development in Malawi",
    description: "Web development, business software and practical digital products from Indelible Technologies in Malawi.",
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
