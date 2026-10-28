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
      "A retail management system built for real shop workflows and deployed for active use. Its React, Firebase and Firestore stack supports sales and inventory records, an offline-first workflow with later synchronisation, and an AI-assisted product finder.",
    image: "/images/msikaflo-storefront-showcase.jpg",
    imageAlt: "MsikaFlo public online storefront showcase",
    tags: ["React", "Firebase", "Firestore", "Retail"],
    href: "https://jefinvestment-e1fc1.web.app/store",
    linkLabel: "Visit live storefront",
    external: true,
    repoHref: "https://github.com/Indelible-cpu/Jefinvestment",
    repoLabel: "View source code",
  },
  {
    title: "Cooperative Finance Platform",
    category: "Financial Management · Deployed on Vercel",
    description:
      "Teachers Bank is a cooperative finance management platform for member-based organisations, with workflows for member records, contributions, loans, and financial reporting. Both its frontend and backend are deployed on Vercel. The codebase includes an Express API, Prisma/PostgreSQL data access, and Firebase integration.",
    image: "/images/tb-report-full.jpg",
    imageAlt: "Teachers Bank financial reporting interface",
    tags: ["React", "Vercel", "Express API", "PostgreSQL", "Firebase"],
    href: "https://teachers-bank.vercel.app/",
    linkLabel: "Visit Teachers Bank platform",
    external: true,
    repoHref: "https://github.com/Indelible-cpu/TeachersBank",
    repoLabel: "View source code",
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Selected Work & <span className="text-accent">Case Studies</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl"
          >
            Practical digital products and software solutions built to address real business needs. Explore a live product, review the technologies behind selected work, or discuss a solution for your organisation.
          </m.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-6">
            {projects.map((project, i) => (
              <m.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
              >
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    {project.category}
                  </div>
                  <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-secondary">
                    {project.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Link
                      href={project.href}
                      target={project.external ? "_blank" : undefined}
                      rel={project.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 font-semibold text-secondary transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                    >
                      {project.linkLabel}
                      {project.external ? <ExternalLink className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                    </Link>
                    <Link
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                    >
                      {project.repoLabel}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <MessageCircle className="mx-auto mb-5 h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Tell us what your business or organisation needs. We can discuss the scope, suitable technology, timeline and next steps before any work begins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Discuss your project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
