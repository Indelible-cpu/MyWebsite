"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Code2, Database, Zap, Layers, Activity, ChevronDown } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden"><div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" /><div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" /><div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" /></div>
        <div className="container mx-auto px-4 md:px-6"><div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-2xl">
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-2 text-sm font-semibold text-secondary"><Zap className="h-4 w-4" /><span>Digital products · Software · Web experiences</span></m.div>
            <m.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }} className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">Practical technology.<span className="mt-1 block bg-gradient-to-r from-secondary via-blue-500 to-accent bg-clip-text text-transparent">Built for real work.</span></m.h1>
            <m.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="mb-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">We design and build useful digital products, websites and custom software that help businesses, schools and organisations work with greater clarity.</m.p>
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }} className="flex flex-col gap-3 sm:flex-row">
              <Link href="/portfolio" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">Explore our work <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-background/80 px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-secondary/50 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">Discuss a project</Link>
            </m.div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Based in Malawi</span><span className="hidden h-1 w-1 rounded-full bg-border sm:block" /><span>Designed around real workflows</span></div>
          </div>
          <m.div initial={{ opacity: 0, scale: 0.97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/95 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-md"><Layers className="h-5 w-5" /></div><div><p className="font-semibold tracking-tight">Indelible Technologies</p><p className="text-xs text-muted-foreground">A connected digital ecosystem</p></div></div><span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">Built for people</span></div>
              <div className="py-6"><p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">What we build</p><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ideas into useful tools.</h2><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">Purposeful interfaces backed by practical systems, shaped around the needs of each organisation.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group rounded-2xl border border-border bg-muted/40 p-4 transition-colors hover:border-emerald-500/40"><div className="mb-5 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><MonitorSmartphone className="h-5 w-5" /></div><span className="text-xs font-medium text-muted-foreground">Retail systems</span></div><p className="font-semibold">MsikaFlo</p><p className="mt-1 text-sm leading-5 text-muted-foreground">Sales, stock and shop workflows.</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-emerald-500/10"><div className="h-full w-3/4 rounded-full bg-emerald-500/70" /></div></div>
                <div className="group rounded-2xl border border-border bg-muted/40 p-4 transition-colors hover:border-violet-500/40"><div className="mb-5 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400"><Activity className="h-5 w-5" /></div><span className="text-xs font-medium text-muted-foreground">Online storefront</span></div><p className="font-semibold">ShopMe</p><p className="mt-1 text-sm leading-5 text-muted-foreground">A clear path from browsing to business.</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-violet-500/10"><div className="h-full w-2/3 rounded-full bg-violet-500/70" /></div></div>
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background p-4 sm:col-span-2"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Code2 className="h-5 w-5" /></div><div className="min-w-0 flex-1"><p className="font-semibold">Custom digital solutions</p><p className="mt-1 text-sm text-muted-foreground">Websites, data systems and software shaped around your workflow.</p></div><ArrowRight className="h-4 w-4 shrink-0 text-secondary" /></div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-primary-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /><p className="text-sm font-medium">Thoughtful design. Useful functionality. Clear communication.</p></div>
            </div>
            <div className="absolute -bottom-5 -left-3 -z-10 h-24 w-24 rounded-full border border-secondary/20 sm:-left-6" /><div className="absolute -right-3 -top-5 -z-10 h-16 w-16 rotate-12 rounded-2xl border border-accent/30 sm:-right-6" />
          </m.div>
        </div></div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="border-y border-border/70 bg-muted/35 py-6 sm:py-7"><div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left"><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Technology for everyday progress</p><div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-foreground/80 sm:justify-end"><span className="inline-flex items-center gap-2"><Code2 className="h-4 w-4 text-secondary" /> Web & software</span><span className="inline-flex items-center gap-2"><Database className="h-4 w-4 text-secondary" /> Data systems</span><span className="inline-flex items-center gap-2"><MonitorSmartphone className="h-4 w-4 text-secondary" /> Digital products</span></div></div></section>

      {/* INNOVATION ECOSYSTEM */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Innovation Ecosystem</h2>
            <p className="text-lg text-muted-foreground">Discover our flagship products designed to streamline operations, enhance financial management, and drive digital transformation.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {[
              { title: "Teachers Bank", desc: "A financial management solution concept for organisations and member-based groups.", icon: Activity, color: "from-blue-500 to-cyan-500", href: "/solutions#teachersbank", external: false },
              { title: "MsikaFlo", desc: "Retail management tools for sales, inventory and everyday shop workflows.", icon: MonitorSmartphone, color: "from-emerald-500 to-teal-500", href: "/solutions#msikaflo", external: false },
              { title: "ShopMe", desc: "Browse phone accessories, stationery, PhoneTech support and digital services from ShopMe.", icon: MonitorSmartphone, color: "from-violet-500 to-fuchsia-500", href: "https://f7ky9nc8.eyivo.com", external: true },
            ].map((product, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border/70 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 sm:p-8"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} p-0.5 mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.desc}</p>
                <Link href={product.href ?? `/solutions#${product.title.toLowerCase().replace(" ", "")}`} target={product.external ? "_blank" : undefined} rel={product.external ? "noopener noreferrer" : undefined} className="text-secondary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  {product.external ? "Visit ShopMe" : "Learn more"} <ArrowRight className="h-4 w-4" />
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / SERVICES OVERVIEW */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Indelible Technologies?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                We don't just build websites; we engineer digital solutions. Our approach focuses on affordability, security, and true digital transformation tailored to your unique context.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Tailored Custom Software Development",
                  "Secure Financial Management Systems",
                  "Affordable Solutions for Organizations",
                  "Dedicated Support & Maintenance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-accent/20 p-1 rounded-full text-accent">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about" className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
                  Our Story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Web Development", icon: Code2 },
                { title: "Custom Software", icon: Layers },
                { title: "Database Systems", icon: Database },
                { title: "Tech Consulting", icon: Zap }
              ].map((service, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <service.icon className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-bold text-lg">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-border/50 bg-muted/30 py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">A clear, transparent process from first conversation to final delivery and beyond.</p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary opacity-30" />
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                { step: "01", title: "Consult", desc: "We start with a free consultation to understand your goals, challenges, and requirements.", color: "from-blue-500 to-cyan-500" },
                { step: "02", title: "Plan", desc: "We design a clear roadmap with timelines, features, and cost breakdown — no surprises.", color: "from-indigo-500 to-purple-500" },
                { step: "03", title: "Build", desc: "Our team engineers your solution with clean code, best practices, and regular progress updates.", color: "from-emerald-500 to-teal-500" },
                { step: "04", title: "Deploy", desc: "We launch and configure your system, ensuring everything works perfectly in your environment.", color: "from-orange-500 to-amber-500" },
                { step: "05", title: "Support", desc: "Post-launch, we provide training, maintenance, and responsive support whenever you need us.", color: "from-pink-500 to-rose-500" },
              ].map((phase, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg relative z-10`}>
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-10 md:p-16 text-center border border-border/50 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the growing number of institutions that trust Indelible Technologies to handle their digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Request a Quote
              </Link>
              <Link href="/contact" className="bg-background text-foreground border border-border hover:bg-muted px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1">
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
      q: "How long does it take to build a custom system?",
      a: "It depends on the complexity of the project. Simple websites typically take 1–2 weeks. Custom software systems like POS or management platforms typically take 4–12 weeks. We always provide a detailed timeline before we begin.",
    },
    {
      q: "Do you offer ongoing support after delivery?",
      a: "Yes. All our systems come with an initial support period. We also offer ongoing maintenance plans to ensure your system stays updated, secure, and running smoothly.",
    },
    {
      q: "Can I request modifications after the project is done?",
      a: "Absolutely. We understand that business needs evolve. We offer post-delivery change requests and version upgrades at reasonable rates.",
    },
    {
      q: "What makes Indelible Technologies different from other developers?",
      a: "We are a youth-led team that builds practical, real-world solutions \u2014 not generic templates. We focus on affordability, long-term support, and truly understanding your unique needs before writing a single line of code.",
    },
    {
      q: "Do I own the software after it is built?",
      a: "For custom-built solutions, yes \u2014 you own the final product. For our flagship products (Teachers Bank, MsikaFlo), we operate on a licensing model. Full details are outlined in our Terms of Service.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Got questions? We have answers.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-semibold text-foreground hover:bg-muted/50 transition-colors"
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <m.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                </m.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
