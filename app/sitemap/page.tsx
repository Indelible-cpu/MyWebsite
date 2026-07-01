"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Map, LayoutGrid, Cpu, Scale, FileText, ArrowRight } from "lucide-react";

export default function Sitemap() {
  const sections = [
    {
      title: "Main Navigation",
      icon: LayoutGrid,
      color: "text-blue-500 bg-blue-500/10",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Services", href: "/services" },
        { label: "Portfolio & Case Studies", href: "/portfolio" },
        { label: "Pricing & Quotes", href: "/pricing" },
        { label: "Innovation Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Our Innovation Ecosystem",
      icon: Cpu,
      color: "text-emerald-500 bg-emerald-500/10",
      links: [
        { label: "Teachers Bank (Education & Finance)", href: "/solutions#teachersbank" },
        { label: "MsikaPos (Retail & Inventory)", href: "/solutions#msikapos" },

      ],
    },
    {
      title: "Legal & Information",
      icon: Scale,
      color: "text-purple-500 bg-purple-500/10",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Web <span className="text-secondary">Sitemap</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A quick visual guide to navigate all sections of the Indelible Technologies platform.
          </m.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${section.color}`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>

                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href}
                        className="flex items-center justify-between text-muted-foreground hover:text-secondary group transition-colors"
                      >
                        <span className="font-medium text-sm">{link.label}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
