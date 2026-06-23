"use client";

import Link from "next/link";
import { ArrowRight, Code2, Database, ShieldCheck, Zap, Layers, Activity, MonitorSmartphone, PenTool, Lightbulb } from "lucide-react";
import { m } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Premium, responsive, and high-conversion corporate websites tailored to represent your brand and engage your audience.",
      icon: MonitorSmartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom Web Applications",
      description: "Scalable and secure web applications built to automate your workflows and solve complex business challenges.",
      icon: Code2,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Business Management Systems",
      description: "Comprehensive ERP and management solutions that bring your operations, HR, and finance under one secure roof.",
      icon: Layers,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Financial & SACCO Systems",
      description: "Robust financial tracking and cooperative management software with advanced security and reporting capabilities.",
      icon: Database,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Transformation Services",
      description: "Consulting and implementation services to transition your traditional business processes into the digital age.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Technology Consulting",
      description: "Expert advice on technology strategy, infrastructure, and software architecture to ensure your business stays ahead.",
      icon: Lightbulb,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 text-center relative z-10">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-secondary">Services</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive technology solutions designed to empower your business, streamline operations, and drive growth.
          </m.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-border hover:border-secondary/50 transition-all hover:shadow-lg group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 shadow-md`}>
                  <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link href="/contact" className="text-secondary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Additional Support Services</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Beyond software development, we provide essential business support to ensure you have everything you need to operate smoothly.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-left">
              <Activity className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone Technology Solutions</h3>
              <p className="text-primary-foreground/70">Device management, mobile solutions, and enterprise mobile deployments.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-left">
              <PenTool className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Stationery & Business Support</h3>
              <p className="text-primary-foreground/70">Providing reliable supply chains for your day-to-day office needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


