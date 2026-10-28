"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { m } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      price: "Custom quote",
      description: "For small businesses and organisations that need a clear, professional online presence.",
      features: [
        "Responsive website design",
        "Up to 5 pages",
        "Contact form integration",
        "Mobile-friendly layout",
        "Basic search-engine optimisation",
        "Optional post-launch support"
      ],
      popular: false
    },
    {
      name: "Professional Solution",
      price: "Custom quote",
      description: "For organisations that need a website or a workflow-focused management system.",
      features: [
        "Custom user interface and experience",
        "Content management where required",
        "Database integration where required",
        "User accounts and access control where required",
        "Analytics and search optimisation where applicable",
        "Staff handover or training",
        "Support period defined in the proposal"
      ],
      popular: true
    },
    {
      name: "Enterprise Software",
      price: "Custom quote",
      description: "For complex operations requiring tailored software, integrations or multiple user roles.",
      features: [
        "Custom software architecture",
        "Integration with existing services or APIs",
        "Security and access-control planning",
        "Hosting and deployment planning",
        "Project documentation and handover",
        "Optional mobile application if needed",
        "Ongoing support defined by scope"
      ],
      popular: false
    }
  ];

  return (
    <>
      <section className="bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Project <span className="text-accent">Pricing</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Every project is scoped individually. Choose the closest starting point and request a quote; the final scope, timeline and cost will be agreed before work begins.
          </m.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {plans.map((plan, i) => (
              <m.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-6 transition-shadow sm:p-8 ${plan.popular ? "border-secondary/70 bg-background shadow-lg shadow-secondary/5" : "border-border/70 bg-background shadow-sm"}`}
              >
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold">{plan.name}</h2>
                  <p className="min-h-12 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                </div>
                <ul className="mb-8 flex-grow space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.popular ? "text-secondary" : "text-accent"}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?subject=${encodeURIComponent(plan.name)}#quote`}
                  className={`w-full rounded-lg py-3 text-center font-semibold transition-all ${plan.popular ? "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90" : "border border-border bg-muted text-foreground hover:bg-muted/80"}`}
                >
                  Request a quote
                </Link>
              </m.div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
            Features are examples, not a fixed bundle. We will confirm what is necessary for your project before quoting, so you do not pay for unnecessary functionality.
          </p>
        </div>
      </section>
    </>
  );
}
