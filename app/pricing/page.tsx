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
        "1 Month Free Support"
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
        "3 Months Free Support",
        "Staff Training Session"
      ],
      popular: true,
      buttonText: "Request Quote"
    },
    {
      name: "Enterprise ERP",
      price: "Custom",
      description: "Comprehensive digital transformation for large schools, SACCOs, or corporations.",
      features: [
        "Full Custom Software Architecture",
        "Integration with Existing APIs",
        "High-Availability Cloud Hosting",
        "Advanced Security & Auditing",
        "Mobile App Counterpart (Optional)",
        "Dedicated Account Manager",
        "24/7 Priority Support"
      ],
      popular: false,
      buttonText: "Request Quote"
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
            Transparent <span className="text-accent">Pricing</span>
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
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl border ${plan.popular ? 'border-secondary shadow-xl scale-105 z-10 bg-background' : 'border-border glass'} p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-accent text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                
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
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`} 
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
          <div className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-2xl glass border border-border">
            <Info className="h-8 w-8 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Need a precise estimate?</h3>
            <p className="text-muted-foreground mb-6">
              Use our interactive online quotation generator to get an instant estimate for your specific software needs.
            </p>
            <Link href="/contact#quote" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
              Go to Quote Generator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
