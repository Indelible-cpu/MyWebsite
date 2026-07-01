"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Code2, Database, Zap, Layers, Activity } from "lucide-react";
import { m } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px]" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-secondary/20 text-secondary mb-6 text-sm font-medium"
            >
              <Zap className="h-4 w-4" />
              <span>Innovate. Build. Empower.</span>
            </m.div>
            
            <m.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            >
              Engineering Digital Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Power Businesses, Schools & Communities.</span>
            </m.h1>
            
            <m.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              We are a youth-led technology innovation company developing affordable, secure, and practical digital solutions for modern institutions.
            </m.p>
            
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/portfolio" className="glass hover:bg-white/10 dark:hover:bg-slate-800/50 text-foreground border border-border px-8 py-4 rounded-lg text-base font-semibold transition-all flex items-center justify-center">
                View Portfolio
              </Link>
            </m.div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-10 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Built for modern organizations & institutions</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="text-xl font-bold font-serif">Education Sector</div>
            <div className="text-xl font-bold font-sans">Retail Businesses</div>
            <div className="text-xl font-bold font-mono">Financial Institutions</div>
          </div>
        </div>
      </section>

      {/* INNOVATION ECOSYSTEM */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Innovation Ecosystem</h2>
            <p className="text-lg text-muted-foreground">Discover our flagship products designed to streamline operations, enhance financial management, and drive digital transformation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Teachers Bank", desc: "Comprehensive financial management system for organizations and member-based groups.", icon: Activity, color: "from-blue-500 to-cyan-500" },
              { title: "MsikaPos", desc: "Advanced Point of Sale and Inventory Management System for modern retail businesses.", icon: MonitorSmartphone, color: "from-emerald-500 to-teal-500" },
            ].map((product, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-border/50 hover:border-secondary/50 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} p-0.5 mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.desc}</p>
                <Link href={`/solutions#${product.title.toLowerCase().replace(" ", "")}`} className="text-secondary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / SERVICES OVERVIEW */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
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

      {/* CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
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
