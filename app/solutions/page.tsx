"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity, MonitorSmartphone } from "lucide-react";
import { m } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";

const tbImages = [
  { src: "/images/tb-overview.jpg", alt: "Financial Overview" },
  { src: "/images/tb-contributions.jpg", alt: "Contributions Ledger" },
  { src: "/images/tb-loan-config.jpg", alt: "Loan Configurations" },
  { src: "/images/tb-report-full.jpg", alt: "Financial Report" },
];

// MsikaPos placeholders — swap with real screenshots when ready
const msikaImages = [
  { src: "/images/msikapos-dashboard.jpg", alt: "Dashboard Overview" },
  { src: "/images/msikapos-sales.jpg", alt: "Sales Screen" },
  { src: "/images/msikapos-inventory.jpg", alt: "Inventory Management" },
];

export default function Solutions() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Our Innovation <span className="text-secondary">Ecosystem</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our flagship digital solutions tailored to transform management, finance, and operations for modern institutions.
          </m.p>
        </div>
      </section>

      {/* TEACHERS BANK */}
      <section id="teachersbank" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-semibold mb-6">
                <Activity className="h-4 w-4" /> Financial Management
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Teachers Bank</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A robust cooperative financial management system designed for organizations and member-based groups. It simplifies member contributions, loan management, and financial reporting with enterprise-grade security.
              </p>
              <ul className="space-y-3 mb-8">
                {["Member contributions and savings management", "Integrated loan application and approval workflows", "Real-time financial reporting and analytics", "Comprehensive audit trails and secure access"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?subject=Teachers+Bank" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                Request Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <ImageCarousel images={tbImages} accentColor="bg-blue-600" />
            </m.div>
          </div>
        </div>
      </section>

      {/* MSIKAPOS */}
      <section id="msikapos" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <ImageCarousel images={msikaImages} accentColor="bg-emerald-600" />
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold mb-6">
                <MonitorSmartphone className="h-4 w-4" /> Retail & Inventory
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">MsikaPos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The ultimate Point of Sale and Inventory Management System. MsikaPos empowers businesses of all sizes to manage sales, track stock in real-time, and analyze business performance from any device.
              </p>
              <ul className="space-y-3 mb-8">
                {["Multi-store inventory management", "Offline capability with automatic cloud sync", "Detailed sales analytics and profit tracking", "Barcode scanning and receipt printing"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?subject=MsikaPos" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                Request Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </m.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            If our existing ecosystem doesn&apos;t perfectly match your requirements, our engineering team can build a custom system from the ground up.
          </p>
          <Link href="/contact" className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-bold transition-colors inline-block">
            Discuss Custom Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
