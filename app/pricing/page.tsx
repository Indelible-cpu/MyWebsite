"use client";

import Link from "next/link";
import { Check, Info } from "lucide-react";
import { m } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Website",
      price: "Custom",
      description: "Perfect for small businesses and organizations needing a professional online presence.",
      features: [
        "Responsive Corporate Design",
        "Up to 5 Pages (Home, About, etc.)",
        "Contact Form Integration",
        "Mobile Optimized",
        "Basic SEO Setup",
        "Post-launch support options"
      ],
      popular: false,
      buttonText: "Request Quote"
    },
    {
      name: "Professional Solution",
      price: "Custom",
      description: "Advanced website or management system tailored for growing institutions.",
      features: [
        "Advanced Custom UI/UX Design",
        "Content Management System (CMS)",
        "Database Integration",
        "User Authentication & Portals",
        "Advanced SEO & Analytics",
        "Support period agreed in the proposal",
        "Staff Training Session"
      ],
      popular: true,
      buttonText: "Request Quote"
    },
    {
      name: "Enterprise ERP",
      price: "Custom",
      description: "Comprehensive digital transformation for large schools, financial institutions, or corporations.",
      features: [
        "Full Custom Software Architecture",
        "Integration with Existing APIs",
        "Hosting options scoped to the project",
        "Security and access-control planning",
        "Mobile App Counterpart (Optional)",
        "Defined project communication and handover",
        "Ongoing support options agreed by scope"
      ],
      popular: false,
      buttonText: "Request Quote"
    }
  ];

  return (
    <>
      {/* HEADER */}
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
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We believe in affordable, value-driven solutions. Because every project is unique, we provide customized quotes based on your exact requirements.
          </m.p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {plans.map((plan, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-6 transition-shadow sm:p-8 ${plan.popular ? 'border-secondary/70 bg-background shadow-lg shadow-secondary/5' : 'border-border/70 bg-background shadow-sm'}`}
              >

                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-secondary' : 'text-accent'}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact#quote" 
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md' 
                      : 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </m.div>
            ))}
          </div>

          {/* ONLINE QUOTE GENERATOR HINT */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border/70 bg-muted/30 p-6 text-center sm:mt-16 sm:p-8">
            <Info className="h-8 w-8 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Need a precise estimate?</h3>
            <p className="text-muted-foreground mb-6">
              Every project has different needs. Tell us what you want to build and we’ll discuss scope, priorities and a suitable quote.
            </p>
            <Link href="/contact#quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
              Request a tailored quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
