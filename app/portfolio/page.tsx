"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, MessageCircle } from "lucide-react";
import { m } from "framer-motion";

const projects = [
  {
    title: "MsikaFlo",
    category: "Retail Management · Live Product",
    description:
      "A retail management system built around practical shop workflows, including inventory and sales records. Its React, Firebase and Firestore stack supports an offline-first workflow with later synchronisation, plus an AI-assisted product finder.",
    image: "/images/msikapos-dashboard.jpg",
    tags: ["React", "Firebase", "Firestore", "Retail"],
    href: "https://jefinvestment-e1fc1.web.app/",
    linkLabel: "Explore live product",
    external: true,
  },
  {
    title: "ShopMe",
    category: "Digital Storefront · Live Website",
    description:
      "A customer-facing ShopMe website for exploring phone accessories, stationery, PhoneTech support and digital services. The storefront connects the business website with the wider Indelible Technologies ecosystem.",
    image: "/logo.png",
    tags: ["E-commerce presence", "Customer experience", "Web"],
    href: "https://f7ky9nc8.eyivo.com",
    linkLabel: "Visit ShopMe",
    external: true,
  },
  {
    title: "Cooperative Finance Platform",
    category: "Financial Management",
    description:
      "A digital finance solution concept for member-based organisations, focused on making records and everyday financial workflows easier to manage. Contact us to discuss the relevant requirements and available implementation.",
    image: "/images/tb-report-full.jpg",
    tags: ["Financial workflows", "Records", "Custom software"],
    href: "/contact",
    linkLabel: "Discuss a similar solution",
    external: false,
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Selected Work & <span className="text-accent">Case Studies</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Practical digital products and software solutions built to address real business needs. Explore live websites, review the technologies behind selected work, or discuss a solution for your organisation.
          </m.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <m.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-background overflow-hidden hover:shadow-xl transition-all flex flex-col"
              >
                <div className="aspect-video w-full relative overflow-hidden flex items-center justify-center bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={project.title === "ShopMe" ? "object-contain p-10" : "object-cover object-top"}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md font-medium border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={project.href}
                      target={project.external ? "_blank" : undefined}
                      rel={project.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                    >
                      {project.linkLabel}
                      {project.external ? <ExternalLink className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    </Link>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <MessageCircle className="h-10 w-10 text-accent mx-auto mb-5" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a problem worth solving?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Tell us what your business or organisation needs. We can discuss the scope, suitable technology, timeline and next steps before any work begins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Discuss your project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
