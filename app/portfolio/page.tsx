"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Cooperative Finance Platform",
      category: "Financial Systems",
      description: "Digital transformation for a major SACCO, digitizing member records and automating loan disbursements.",
      image: "/images/tb-report-full.jpg",
      tags: ["Finance", "Security", "Teachers Bank Engine"]
    },
    {
      title: "Retail Chain Inventory",
      category: "Custom Software",
      description: "Multi-branch inventory and sales tracking system deployed across 15 locations.",
      image: "bg-blue-900",
      tags: ["React", "Node.js", "MsikaPos Engine"]
    },
    {
      title: "EduPayTrack Fee Portal",
      category: "Fee Management Systems",
      description: "Automated payment tracking and AI-driven receipt reconciliation system for all levels of education, from primary schools to universities.",
      image: "bg-purple-900",
      tags: ["EduPayTrack", "AI OCR", "Finance Integration"]
    }
  ];

  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Portfolio & <span className="text-accent">Case Studies</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover how we've helped institutions across various industries achieve their digital transformation goals.
          </m.p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filtering could go here */}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-background overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Image or Placeholder */}
                <div className="aspect-video w-full relative overflow-hidden flex items-center justify-center bg-muted">
                  {project.image.startsWith('/') ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                  ) : (
                    <div className={`absolute inset-0 ${project.image}`} />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                  
                  {/* Overlay Link */}
                  <Link href="/contact" className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/40 backdrop-blur-sm">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      View Details <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md font-medium border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 bg-primary text-primary-foreground border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/80 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10k+</div>
              <div className="text-primary-foreground/80 font-medium">Daily Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">99%</div>
              <div className="text-primary-foreground/80 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80 font-medium">Support Provided</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
