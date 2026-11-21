"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, HelpCircle, ShieldCheck, Clock, Layers } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "Timelines & Delivery" | "Architecture & Scope" | "Ownership & Security" | "Support & Pricing";
}

const faqs: FaqItem[] = [
  {
    category: "Timelines & Delivery",
    q: "How long does it take to engineer a custom software system?",
    a: "Timelines depend on functional scope. Typical corporate websites and digital showcases require 1–2 weeks. Specialized business platforms, retail POS, school management portals, or complex database systems generally require 4–12 weeks. We supply a clear milestone schedule and architecture roadmap before development begins.",
  },
  {
    category: "Timelines & Delivery",
    q: "How do you manage project milestones and communication during development?",
    a: "We work in structured sprints with transparent weekly or bi-weekly check-ins. You receive live staging preview links to test features as they are built, ensuring constant alignment with your operational requirements before final production launch.",
  },
  {
    category: "Support & Pricing",
    q: "Do you provide ongoing technical support after deployment?",
    a: "Yes. Every custom system includes an initial post-launch warranty period for bug fixes and stability assurance. Following this, we offer ongoing maintenance and service level agreements (SLAs) covering server monitoring, daily backups, security patching, and regular feature updates.",
  },
  {
    category: "Architecture & Scope",
    q: "Can existing systems be modified or scaled as our organization grows?",
    a: "Yes. Our systems are architected modularly using modern APIs, containerized services, and scalable cloud databases. This allows future feature expansions, mobile app integrations, and higher transaction volumes without rebuilding from scratch.",
  },
  {
    category: "Architecture & Scope",
    q: "What distinguishes Indelible Technologies from a standard web agency?",
    a: "We engineer proprietary products (such as MsikaFlo, IndeMarket, Teachers Bank, and SecSchoolHub) in addition to delivering client solutions. This engineering discipline means our client projects benefit from real-world product architecture, enterprise data modeling, and performance optimization.",
  },
  {
    category: "Ownership & Security",
    q: "Who owns the software and intellectual property upon delivery?",
    a: "For bespoke, client-commissioned solutions, you retain 100% ownership of the custom codebase, database, and operational assets upon project completion. For licensed proprietary platforms (e.g. Teachers Bank, MsikaFlo), standard SaaS licensing and service terms apply.",
  },
  {
    category: "Ownership & Security",
    q: "Where is our data hosted, and how is it secured?",
    a: "We deploy systems to enterprise-grade cloud providers (such as Vercel, Supabase, Google Cloud, and AWS) configured with automated daily backups, SSL/TLS encryption in transit and at rest, and strict role-based access controls to safeguard your organizational data.",
  },
  {
    category: "Support & Pricing",
    q: "Where are you based, and can you deliver projects remotely?",
    a: "Indelible Technologies is headquartered in Mangochi, Malawi. We serve clients across Malawi and internationally through remote collaboration, cloud staging environments, and scheduled on-site consultations when required.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Timelines & Delivery", "Architecture & Scope", "Ownership & Security", "Support & Pricing"];

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-muted/30 pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <m.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-md border border-secondary/25 bg-secondary/10 px-3 py-1 font-mono text-xs font-medium text-secondary"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Clarity &amp; Transparency</span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Frequently Asked <span className="text-secondary">Questions</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Clear answers to common questions about our software engineering processes, timelines, commercial models, and ongoing support.
          </m.p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-secondary text-white shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ LIST SECTION */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card transition-colors hover:border-border/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left font-display font-semibold text-foreground hover:bg-muted/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="font-mono text-[11px] font-medium text-secondary uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg">{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-secondary" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/50 px-5 pt-3 pb-5">
                          <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            {faq.a}
                          </p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* STILL HAVE QUESTIONS CTA */}
          <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Have a specific question not covered here?
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
              Our engineering team is available to discuss your technical architecture, project specifications, and timeline estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground shadow-sm hover:bg-secondary transition-colors"
              >
                Send Us an Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-sans text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                View Pricing &amp; Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
