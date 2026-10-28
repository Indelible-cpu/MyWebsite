"use client";

import Link from "next/link";
import { ArrowRight, Code2, Database, Lightbulb, MonitorSmartphone } from "lucide-react";
import { m } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Responsive, accessible websites that explain your offer clearly and help customers take the next step.",
      icon: MonitorSmartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom Software & Web Applications",
      description: "Purpose-built applications that automate workflows, manage records and support the way your organisation works.",
      icon: Code2,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Business & Financial Management Systems",
      description: "Integrated tools for operational records, inventory, member management, financial tracking and reporting, scoped to your actual needs.",
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Technology Consulting & Digital Planning",
      description: "Practical help choosing technology, prioritising features and planning a realistic, maintainable path from manual processes to digital tools.",
      icon: Lightbulb,
      color: "from-orange-500 to-rose-500"
    }
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container mx-auto px-4 text-center relative z-10">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Our <span className="text-secondary">Services</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl"
          >
            Four clear service areas, tailored to your goals, budget and workflow.
          </m.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {services.map((service, i) => (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass group rounded-2xl border border-border p-7 transition-all hover:border-secondary/50 hover:shadow-lg sm:p-8"
              >
                <div className={`mb-6 h-14 w-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shadow-md`}>
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <h2 className="mb-3 text-xl font-bold sm:text-2xl">{service.title}</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
                <Link
                  href={`/contact?subject=${encodeURIComponent(service.title)}#quote`}
                  className="inline-flex items-center gap-1 font-medium text-secondary transition-all group-hover:gap-2"
                >
                  Discuss this service <ArrowRight className="h-4 w-4" />
                </Link>
              </m.div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
            Explore the live MsikaFlo storefront to see how our digital products connect with real-world business needs. We keep this page focused on our technology services so each offer has a clear place.
          </p>
          <div className="mt-5 text-center">
            <a
              href="https://f7ky9nc8.eyivo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold transition-colors hover:border-secondary/50 hover:bg-muted"
            >
              Visit ShopMe <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
