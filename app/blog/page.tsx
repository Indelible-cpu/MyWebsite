"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { m } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "How Digital Transformation is Reshaping Education in Malawi",
      excerpt: "Explore the impact of technology on local schools and how systems like Teachers Bank are leading the charge.",
      author: "Indelible Team",
      date: "Oct 15, 2024",
      category: "Education Tech"
    },
    {
      title: "The Future of Retail: Why Inventory Management Matters",
      excerpt: "Discover how advanced POS systems are helping small to medium enterprises scale rapidly.",
      author: "Innovation Lab",
      date: "Sep 28, 2024",
      category: "Business Insights"
    },
    {
      title: "Securing Financial Cooperatives Against Cyber Threats",
      excerpt: "A deep dive into the security measures every modern SACCO needs to implement to protect member funds.",
      author: "Security Team",
      date: "Sep 10, 2024",
      category: "Cybersecurity"
    }
  ];

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
            Innovation <span className="text-secondary">Blog</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Insights, news, and perspectives from the Indelible Technologies team.
          </m.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <m.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl border border-border p-8 hover:border-secondary/50 transition-colors"
              >
                <div className="text-sm font-semibold text-accent mb-3">{post.category}</div>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
