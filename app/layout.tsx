import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FramerProvider } from "@/components/framer-provider";

export const metadata: Metadata = {
  title: "Indelible Technologies | Innovate. Build. Empower.",
  description: "Digital Transformation & Innovation Partner. Developing affordable, secure, innovative and practical digital solutions.",
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
          </FramerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
