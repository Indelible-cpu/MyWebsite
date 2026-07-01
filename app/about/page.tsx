"use client";

import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Shield, Users, Heart, Award } from "lucide-react";
import { m } from "framer-motion";

export default function About() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            About <span className="text-secondary">Indelible Technologies</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We are a youth-led technology innovation company dedicated to driving digital transformation for institutions worldwide.
          </m.p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <m.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story & Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Indelible Technologies was founded on the belief that digital solutions shouldn't be out of reach for modern institutions. We recognized a significant gap between the need for efficient management systems and the availability of affordable, localized solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to develop affordable, practical, and sustainable digital solutions that improve management, efficiency, accountability, and access to information while supporting digital transformation and youth empowerment.
              </p>
              <div className="p-6 rounded-xl border-2 border-secondary/20 bg-secondary/5 mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-secondary">
                  <Target className="h-5 w-5" /> Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To become a trusted provider of innovative digital solutions that transform communities, institutions, and businesses through technology.
                </p>
              </div>
            </m.div>
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary/80 flex items-center justify-center p-8 text-center">
                <div className="text-primary-foreground">
                  <h3 className="text-3xl font-bold mb-4">Powered by JEF Investment</h3>
                  <p className="text-primary-foreground/80 text-lg">Empowering the next generation of innovators.</p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide our innovation and operations.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Pushing boundaries to create modern, effective solutions.", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-500/10" },
              { title: "Security", desc: "Ensuring your data and systems are protected at all times.", icon: Shield, color: "text-red-500", bg: "bg-red-500/10" },
              { title: "Affordability", desc: "Providing premium technology without the exorbitant price tag.", icon: Award, color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { title: "Professionalism", desc: "Delivering world-class service and reliable support.", icon: Target, color: "text-blue-500", bg: "bg-blue-500/10" },
              { title: "Community Empowerment", desc: "Uplifting youth and local communities through tech.", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
              { title: "Customer Satisfaction", desc: "Your success is the ultimate measure of our success.", icon: Heart, color: "text-pink-500", bg: "bg-pink-500/10" }
            ].map((value, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${value.bg}`}>
                  <value.icon className={`h-6 w-6 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER & COMMUNITY IMPACT */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Impact</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Beyond building software, Indelible Technologies is deeply committed to the community. We actively invest in youth empowerment programs, digital literacy initiatives, and sustainable technology solutions that make a real difference in people's lives.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-all">
            Partner With Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
