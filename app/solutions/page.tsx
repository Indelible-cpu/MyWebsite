"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity, MonitorSmartphone, GraduationCap, ShoppingBag } from "lucide-react";
import { m } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";

const tbImages = [
  { src: "/images/tb-overview.jpg", alt: "Financial Overview" },
  { src: "/images/tb-contributions.jpg", alt: "Contributions Ledger" },
  { src: "/images/tb-loan-config.jpg", alt: "Loan Configurations" },
  { src: "/images/tb-report-full.jpg", alt: "Financial Report" },
];

// MsikaFlo management screenshots; identifying details have been removed from the portfolio assets.
const msikaImages = [
  { src: "/images/Login.jpg", alt: "MsikaFlo secure sign-in screen" },
  { src: "/images/Dashboard.jpg", alt: "MsikaFlo management dashboard" },
  { src: "/images/Sidebar.jpg", alt: "MsikaFlo navigation and management modules" },
  { src: "/images/Pos.jpg", alt: "MsikaFlo point-of-sale screen" },
  { src: "/images/Product%20finder.jpg", alt: "MsikaFlo AI-assisted product finder" },
  { src: "/images/Reports.jpg", alt: "MsikaFlo business reports" },
  { src: "/images/Storefront.jpg", alt: "MsikaFlo public storefront" },
];

export default function Solutions() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
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
            Explore our flagship digital solutions tailored to transform management, finance, education, and commerce for modern institutions.
          </m.p>
        </div>
      </section>

      {/* TEACHERS BANK */}
      <section id="teachersbank" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-semibold mb-6">
                <Activity className="h-4 w-4" /> Cooperative Finance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Teachers Bank</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A cooperative financial management system for organisations and member-based groups, designed to organise member contributions, loan workflows and financial reporting.
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

      {/* MSIKAFLO */}
      <section id="msikaflo" className="border-y border-border/50 bg-muted/30 py-16 sm:py-20 lg:py-24">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">MsikaFlo</h2>
              <p className="text-lg text-muted-foreground mb-6">
                MsikaFlo brings sales and inventory workflows together in a practical retail management system, helping shop teams record transactions, keep track of stock and review business activity.
              </p>
              <ul className="space-y-3 mb-8">
                {["Inventory and sales record management", "Offline-first operation with later online synchronisation", "Sales and profit reporting", "AI-assisted product locating within the shop", "Store visit tracking and a WhatsApp storefront link"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://jefinvestment-e1fc1.web.app/store" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                Open Live Storefront <ArrowRight className="h-4 w-4" />
              </a>
            </m.div>
          </div>
        </div>
      </section>

      {/* SECSCHOOLHUB */}
      <section id="secschoolhub" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold mb-6">
                <GraduationCap className="h-4 w-4" /> Education Management
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">SecSchoolHub</h2>
              <p className="text-lg text-muted-foreground mb-6">
                An all-in-one secondary school administration and student management platform designed to automate grading, fee collection, student records, and institutional reporting.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Student biodata, enrollment, and academic history tracking",
                  "Automated exam grading, term ranking, and report card generation",
                  "Term school fees tracking, balance reconciliation, and receipting",
                  "Teacher class allocations, timetabling, and attendance records",
                  "Administrative audit reports and institutional performance dashboards",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?subject=SecSchoolHub" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                Request School Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-lg rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 via-card to-card p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-500">
                    Secondary Schools
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Modernizing School Administration</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Replace manual paper ledgers with a secure, centralized digital hub accessible to administrators and teachers.
                </p>
                <div className="space-y-3 border-t border-border/50 pt-4 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Target Sector:</span>
                    <span className="font-medium text-foreground">Secondary & High Schools</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Key Focus:</span>
                    <span className="font-medium text-foreground">Grading, Fees & Student Records</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Deployment:</span>
                    <span className="font-medium text-foreground">Secure Cloud & Local Server</span>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* INDEMARKET */}
      <section id="indemarket" className="border-t border-border/50 bg-muted/30 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <div className="w-full max-w-lg rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-card to-card p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-500">
                    E-Commerce & Trade
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connecting Markets & Communities</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  A high-accessibility marketplace designed for African retail dynamics, enabling vendors to reach wider customer bases with instant mobile connectivity.
                </p>
                <div className="space-y-3 border-t border-border/50 pt-4 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Target Users:</span>
                    <span className="font-medium text-foreground">Merchants, Retailers & Shoppers</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Discovery:</span>
                    <span className="font-medium text-foreground">Location & Category-Based</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Ordering:</span>
                    <span className="font-medium text-foreground">Direct Web & WhatsApp Integration</span>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-semibold mb-6">
                <ShoppingBag className="h-4 w-4" /> Digital Marketplace
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">IndeMarket</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A modern digital marketplace platform empowering local merchants, producers, and service providers to showcase products, receive orders, and grow their businesses digitally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Multi-vendor digital storefronts and product listings",
                  "Fast item search, category filters, and location discovery",
                  "Seamless customer ordering with WhatsApp notification support",
                  "Flexible payment, billing, and trade tracking",
                  "Mobile-first, responsive interface for buyers and sellers",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="https://indemarket.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                  Visit Live Marketplace <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/contact?subject=IndeMarket" className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                  Explore Partnership
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-center text-secondary-foreground sm:py-20 lg:py-24">
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
