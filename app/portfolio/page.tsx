"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, MessageCircle } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

type Screenshot = { src: string; alt: string };

const projects = [
  {
    title: "MsikaFlo",
    category: "Retail Management · Live Product",
    description:
      "I built MsikaFlo to support real retail workflows, including sales and inventory records, offline-first use with later synchronisation, and an AI-assisted product finder. The system is deployed for active use, with a public storefront customers can explore.",
    role:
      "My role: Sole developer handling the work end to end—from product planning and interface design to frontend and backend implementation, database integration, testing, deployment, and ongoing improvements.",
    images: [
      { src: "/images/Screenshot_20261028_134905_Chrome.jpg", alt: "MsikaFlo screenshot 1" },
      { src: "/images/Screenshot_20261028_135152_Chrome.jpg", alt: "MsikaFlo screenshot 2" },
      { src: "/images/Screenshot_20261028_135354_Chrome.jpg", alt: "MsikaFlo screenshot 3" },
      { src: "/images/Screenshot_20261028_135402_Chrome.jpg", alt: "MsikaFlo screenshot 4" },
      { src: "/images/Screenshot_20261028_135416_Chrome.jpg", alt: "MsikaFlo screenshot 5" },
      { src: "/images/Screenshot_20261028_135430_Chrome.jpg", alt: "MsikaFlo screenshot 6" },
      { src: "/images/Screenshot_20261028_135454_Chrome.jpg", alt: "MsikaFlo screenshot 7" },
      { src: "/images/Screenshot_20261028_135544_Chrome.jpg", alt: "MsikaFlo screenshot 8" },
      { src: "/images/Screenshot_20261028_135551_Chrome.jpg", alt: "MsikaFlo screenshot 9" },
    ] as Screenshot[],
    tags: ["React", "Firebase", "Firestore", "Retail"],
    href: "https://jefinvestment-e1fc1.web.app/store",
    linkLabel: "Visit live storefront",
  },
  {
    title: "Cooperative Finance Platform",
    category: "Financial Management · Deployed on Vercel",
    description:
      "I built Teachers Bank as a cooperative finance management platform for member-based organisations. It brings together member records, contributions, loan workflows, and financial reporting. The frontend and backend are deployed on Vercel.",
    role:
      "My role: Sole developer responsible for the full delivery process, including planning, interface and workflow design, frontend development, API and database integration, testing, deployment, and subsequent maintenance.",
    images: [
      { src: "/images/tb-overview.jpg", alt: "Teachers Bank financial overview" },
      { src: "/images/tb-contributions.jpg", alt: "Teachers Bank contributions ledger" },
      { src: "/images/tb-loan-config.jpg", alt: "Teachers Bank loan configuration" },
      { src: "/images/tb-report-full.jpg", alt: "Teachers Bank financial reporting interface" },
    ] as Screenshot[],
    tags: ["React", "Vercel", "Express API", "PostgreSQL", "Firebase"],
    href: "https://teachers-bank.vercel.app/",
    linkLabel: "Visit Teachers Bank platform",
  },
];

function ScreenshotCarousel({ images, title }: { images: Screenshot[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    const next = (index + images.length) % images.length;
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden bg-muted">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <m.div
            key={images[current].src}
            custom={direction}
            initial={{ x: direction >= 0 ? 70 : -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -70 : 70, opacity: 0 }}
            transition={{ duration: 0.22 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) goTo(current + 1);
              else if (info.offset.x > 45) goTo(current - 1);
            }}
            className="relative w-full cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              width={1200}
              height={800}
              priority={current === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="block h-auto w-full"
            />
          </m.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              aria-label={`Previous ${title} screenshot`}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow transition hover:bg-black/85"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              aria-label={`Next ${title} screenshot`}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow transition hover:bg-black/85"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-2 right-2 z-10 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-center gap-1.5 px-3 py-3" aria-label={`${title} screenshot selection`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show screenshot ${index + 1}: ${image.alt}`}
            aria-current={index === current ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${index === current ? "w-6 bg-secondary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
          />
        ))}
      </div>
    </div>
  );
}

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
                <ScreenshotCarousel images={project.images} title={project.title} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary">
                    {project.category}
                  </div>
                  <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-secondary">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-5 rounded-xl border border-secondary/20 bg-secondary/5 p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary">
                      My role
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/85">
                      {project.role}
                    </p>
                  </div>

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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-secondary transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                    >
                      {project.linkLabel}
                      <ExternalLink className="h-4 w-4" />
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
