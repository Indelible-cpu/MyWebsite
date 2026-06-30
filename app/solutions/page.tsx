"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Activity, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { m } from "framer-motion";

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
                <Activity className="h-4 w-4" /> Education & Finance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Teachers Bank</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A specialized financial management system designed exclusively for educators and schools. Teachers Bank streamlines salary tracking, loan management, and cooperative savings with enterprise-grade security.
              </p>
              <ul className="space-y-3 mb-8">
                {["Automated salary and deduction tracking", "Integrated loan application and approval workflows", "Real-time financial reporting and analytics", "Bank-level encryption and secure access"].map((feature, i) => (
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
              className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center overflow-hidden md:overflow-visible"
            >
              {/* Mobile Mockup 1 (Back/Left) */}
              <div className="hidden md:block absolute left-[-5%] top-[10%] w-[220px] h-[450px] bg-card rounded-[2rem] border-[6px] border-muted shadow-2xl overflow-hidden transform -rotate-6 opacity-60 hover:opacity-100 hover:scale-105 hover:z-20 transition-all duration-500 cursor-pointer group">
                <Image src="/images/tb-contributions.jpg" alt="Contributions Ledger" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              {/* Mobile Mockup 2 (Center/Front) */}
              <div className="absolute z-10 w-[240px] h-[500px] md:w-[260px] md:h-[540px] bg-card rounded-[2rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden transform hover:-translate-y-4 hover:scale-105 transition-all duration-500">
                <Image src="/images/tb-overview.jpg" alt="Financial Overview" fill className="object-cover" />
              </div>

              {/* Mobile Mockup 3 (Right/Back) */}
              <div className="hidden md:block absolute right-[-5%] top-[15%] w-[220px] h-[450px] bg-card rounded-[2rem] border-[6px] border-muted shadow-2xl overflow-hidden transform rotate-6 opacity-60 hover:opacity-100 hover:scale-105 hover:z-20 transition-all duration-500 cursor-pointer group">
                <Image src="/images/tb-loan-config.jpg" alt="Loan Configurations" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              </div>
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
              className="order-2 md:order-1 bg-muted rounded-2xl aspect-[4/3] border border-border shadow-xl relative overflow-hidden flex items-center justify-center"
            >
              <div className="text-muted-foreground/50 font-medium flex items-center gap-2">
                <MonitorSmartphone className="h-6 w-6" /> POS Interface Preview
              </div>
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

      {/* EDUPAYTRACK */}
      <section id="edupaytrack" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <m.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 font-semibold mb-6">
                <ShieldCheck className="h-4 w-4" /> Education Management
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">EduPayTrack</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A secure, transparent, and highly efficient fee tracking system for all levels of education—from primary and secondary schools to colleges and universities. EduPayTrack eliminates manual receipting errors, provides parents with instant updates, and gives administrators complete financial oversight.
              </p>
              <ul className="space-y-3 mb-8">
                {["Automated SMS/Email payment receipts", "Student balance tracking and reminders", "Integration with mobile money and bank APIs", "Comprehensive audit trails"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?subject=EduPayTrack" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                Request Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </m.div>
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted rounded-2xl aspect-[4/3] border border-border shadow-xl relative overflow-hidden flex items-center justify-center"
            >
              <div className="text-muted-foreground/50 font-medium flex items-center gap-2">
                <ShieldCheck className="h-6 w-6" /> Reporting Interface Preview
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            If our existing ecosystem doesn't perfectly match your requirements, our engineering team can build a custom system from the ground up.
          </p>
          <Link href="/contact" className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-bold transition-colors inline-block">
            Discuss Custom Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
