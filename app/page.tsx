"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Code2, Database, Zap, Layers, Activity, ChevronDown, GraduationCap, ShoppingBag } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-2xl">
              {/* Technical Brand Badge */}
              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center gap-2 rounded-md border border-secondary/25 bg-secondary/10 px-3 py-1 font-mono text-xs font-medium text-secondary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span>Technology &amp; Product Engineering</span>
              </m.div>

              {/* Display Headline */}
              <m.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground tracking-[-0.02em]"
              >
                Engineering digital products.<br className="hidden sm:inline" />
                <span className="text-secondary font-normal"> Built for real operations.</span>
              </m.h1>

              {/* Supporting Subtitle */}
              <m.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-slate-700 dark:text-slate-300 max-w-xl"
              >
                We build proprietary software platforms and deliver custom engineering solutions for businesses, educational institutions, and growing enterprises in Malawi.
              </m.p>

              {/* CTAs */}
              <m.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/portfolio"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-sans text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  Explore our work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 font-sans text-sm font-semibold text-foreground transition-colors hover:border-secondary/50 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  Discuss a project
                </Link>
              </m.div>

              {/* Context Footer */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Based in Mangochi, Malawi
                </span>
                <span>•</span>
                <span>Enterprise &amp; SMB Systems</span>
              </div>
            </div>

            {/* Architectural System Overview Matrix */}
            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="rounded-2xl border border-border/90 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-white font-mono text-xs font-bold">
                      IT
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-foreground">Indelible Technologies</p>
                      <p className="font-mono text-[11px] text-muted-foreground">Core Product Matrix</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    ● Production Active
                  </span>
                </div>

                <div className="pt-5 pb-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">Proprietary Software</p>
                  <h2 className="font-display text-xl sm:text-2xl font-semibold mt-1 text-foreground">Built for operational clarity.</h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 mt-2">
                  <Link href="/solutions#msikaflo" className="group rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-blue-500/50 hover:bg-background">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-semibold text-blue-600 dark:text-blue-400">POS &amp; Retail</span>
                      <span className="font-mono text-[10px] text-muted-foreground">v2.4</span>
                    </div>
                    <p className="font-display font-semibold text-foreground group-hover:text-secondary transition-colors">MsikaFlo</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">Inventory tracking, sales, and retail storefront workflows.</p>
                  </Link>

                  <a href="https://indemarket.vercel.app/" target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-emerald-500/50 hover:bg-background">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-semibold text-emerald-600 dark:text-emerald-400">Marketplace</span>
                      <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Live ↗</span>
                    </div>
                    <p className="font-display font-semibold text-foreground group-hover:text-emerald-600 transition-colors">IndeMarket</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">Digital multi-vendor marketplace connecting shops &amp; shoppers.</p>
                  </a>

                  <Link href="/solutions#teachersbank" className="group rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-purple-500/50 hover:bg-background">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-semibold text-purple-600 dark:text-purple-400">Education Finance</span>
                    </div>
                    <p className="font-display font-semibold text-foreground group-hover:text-purple-600 transition-colors">Teachers Bank</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">School fee collection, payment tracking &amp; financial reports.</p>
                  </Link>

                  <Link href="/solutions#secschoolhub" className="group rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-amber-500/50 hover:bg-background">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-semibold text-amber-600 dark:text-amber-400">School Admin</span>
                    </div>
                    <p className="font-display font-semibold text-foreground group-hover:text-amber-600 transition-colors">SecSchoolHub</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">Secondary school management, student records &amp; grading.</p>
                  </Link>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-muted px-4 py-2.5 font-mono text-xs text-muted-foreground border border-border">
                  <span>Engineering Standard: Secure • Scalable</span>
                  <span className="text-foreground font-semibold">Malawi</span>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="border-y border-border bg-muted/30 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Engineering Capabilities</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-foreground/80 sm:justify-end">
            <span>[ Custom Web &amp; Software ]</span>
            <span>[ Database Architecture ]</span>
            <span>[ Enterprise Management ]</span>
            <span>[ Digital Product Design ]</span>
          </div>
        </div>
      </section>

      {/* PROPRIETARY PRODUCT ECOSYSTEM */}
      <section className="relative py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold mb-2">Platform Portfolio</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
              Proprietary Software Products
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Independent platforms engineered, maintained, and deployed by Indelible Technologies to address real operational needs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {[
              { title: "Teachers Bank", category: "Education Finance", desc: "A robust financial management solution for schools, training institutions, and member-based groups.", icon: Activity, href: "/solutions#teachersbank", external: false },
              { title: "MsikaFlo", category: "Retail & Commerce", desc: "Retail point-of-sale, inventory control, and multi-channel shop management tools.", icon: MonitorSmartphone, href: "/solutions#msikaflo", external: false },
              { title: "SecSchoolHub", category: "Academic Administration", desc: "Secondary school management hub for student records, academic grading, and fee administration.", icon: GraduationCap, href: "/solutions#secschoolhub", external: false },
              { title: "IndeMarket", category: "Digital Marketplace", desc: "Digital multi-vendor marketplace connecting local merchants, institutions, and consumers.", icon: ShoppingBag, href: "https://indemarket.vercel.app/", external: true },
            ].map((product, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-secondary/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-wider">{product.category}</span>
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-foreground">
                      <product.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2.5 text-foreground">{product.title}</h3>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{product.desc}</p>
                </div>
                <Link
                  href={product.href}
                  target={product.external ? "_blank" : undefined}
                  rel={product.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-xs font-semibold text-secondary inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                >
                  {product.external ? "Visit Platform" : "View Solution"} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / SERVICES OVERVIEW */}
      <section className="relative overflow-hidden bg-primary py-14 text-white sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold mb-2">Engineering Philosophy</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 text-white">
                Engineering Excellence &amp; Delivery
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-sans">
                We combine structured engineering, security, and long-term maintainability to build digital products tailored to your operational environment.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Tailored Custom Software & Web Engineering",
                  "Secure Financial Management & Reconciliation Systems",
                  "Affordable, Maintainable Architecture for Organizations",
                  "Direct Local Technical Support & Ongoing Maintenance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-1 rounded-full text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="font-sans text-sm sm:text-base font-medium text-white">{item}</span>
                  </div>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about" className="bg-secondary text-white px-6 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
                  Company Overview <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Web Engineering", desc: "Production websites & web applications", icon: Code2 },
                { title: "Custom Software", desc: "Bespoke workflow & operating systems", icon: Layers },
                { title: "Data Architecture", desc: "Secure databases & reporting hubs", icon: Database },
                { title: "Technical Advisory", desc: "Digital roadmaps & feasibility planning", icon: Zap }
              ].map((service, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                  <service.icon className="h-6 w-6 text-secondary mb-3" />
                  <h4 className="font-display font-semibold text-base text-white">{service.title}</h4>
                  <p className="font-sans text-xs text-slate-300 mt-1 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-border bg-muted/30 py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold mb-2">Delivery Methodology</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">How We Deliver</h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">A structured, transparent engineering process from first consultation to post-launch support.</p>
          </div>
          <div className="relative">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Consult", desc: "Free initial assessment to clarify operational goals, workflows, and constraints." },
                { step: "02", title: "Architect", desc: "System specifications, technical roadmap, and transparent cost breakdown." },
                { step: "03", title: "Engineer", desc: "Clean development, modern practices, and structured milestone reviews." },
                { step: "04", title: "Deploy", desc: "Environment configuration, data migration, and full user acceptance testing." },
                { step: "05", title: "Support", desc: "Operational maintenance, staff onboarding, and reliable long-term support." },
              ].map((phase, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded border border-secondary/20">
                      {phase.step}
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-3 mb-2 text-foreground">{phase.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{phase.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-primary text-white p-10 md:p-14 text-center border border-border/40 max-w-4xl mx-auto shadow-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold mb-2">Initiate A Project</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-white">
              Ready to Upgrade Your Digital Infrastructure?
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Partner with an engineering team committed to reliable software, transparent timelines, and continuous support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="bg-secondary hover:bg-secondary/90 text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                Request a Proposal
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "How long does it take to engineer a custom software system?",
      a: "Timelines depend on functional scope. Typical corporate websites require 1–2 weeks. Specialized business platforms, retail POS, or institutional systems generally require 4–12 weeks. We supply a clear milestone schedule before development begins.",
    },
    {
      q: "Do you provide ongoing technical support after deployment?",
      a: "Yes. Every system includes an initial post-launch warranty period followed by optional long-term maintenance agreements covering security updates, server monitoring, and feature enhancements.",
    },
    {
      q: "Can existing systems be modified or scaled as our organization grows?",
      a: "Yes. Our software is engineered modularly with modern architectures, allowing future feature expansions, API integrations, and database scaling without rebuilding from scratch.",
    },
    {
      q: "What distinguishes Indelible Technologies from standard web agencies?",
      a: "We engineer proprietary products (such as MsikaFlo and IndeMarket) in addition to client solutions. This product-driven discipline ensures our client work benefits from real-world software architecture, security, and reliability.",
    },
    {
      q: "Who owns the software and intellectual property upon delivery?",
      a: "For bespoke, custom-built solutions, you retain full ownership of the deliverables. For licensed proprietary platforms (Teachers Bank, MsikaFlo), transparent licensing and service level terms apply.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold mb-2">Clarity &amp; Transparency</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3 text-foreground">Frequently Asked Questions</h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300">Clear answers to common questions about our technical services and products.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden bg-card transition-colors hover:border-border/80"
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-foreground hover:bg-muted/40 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{faq.a}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
