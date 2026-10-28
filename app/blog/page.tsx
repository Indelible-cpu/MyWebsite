"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, MonitorSmartphone, Database } from "lucide-react";
import { m } from "framer-motion";

const topics = [
  { title: "Making retail workflows easier to manage", excerpt: "How a joined-up approach to sales records, inventory and product lookup can make everyday shop work clearer.", category: "Retail systems", icon: MonitorSmartphone, href: "/solutions#msikaflo", linkLabel: "Explore MsikaFlo" },
  { title: "Designing websites around people", excerpt: "Clear navigation, readable content, accessible controls and mobile-first layouts help visitors find what they need.", category: "Web design", icon: Code2, href: "/services", linkLabel: "Explore services" },
  { title: "Choosing software for your organisation", excerpt: "Start with real workflows, data needs, user access and long-term support before choosing tools or features.", category: "Digital planning", icon: Database, href: "/contact", linkLabel: "Discuss a project" },
];

export default function Blog() {
  return (
    <>
      <section className="bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <m.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Ideas & <span className="text-secondary">Insights</span></m.h1>
          <m.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Practical topics around digital products, retail workflows and software for organisations.</m.p>
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {topics.map((topic, i) => (
              <m.article key={topic.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="group flex flex-col rounded-2xl border border-border/70 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 sm:p-7">
                <div className="mb-6 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><topic.icon className="h-6 w-6" /></div><span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{topic.category}</span></div>
                <h2 className="mb-3 text-xl font-bold leading-snug tracking-tight">{topic.title}</h2>
                <p className="mb-7 flex-1 text-sm leading-7 text-muted-foreground">{topic.excerpt}</p>
                <Link href={topic.href} className="inline-flex items-center gap-2 font-semibold text-secondary transition-all group-hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">{topic.linkLabel} <ArrowUpRight className="h-4 w-4" /></Link>
              </m.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
