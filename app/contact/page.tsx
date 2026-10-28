"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";
import { m } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [inquiryType, setInquiryType] = useState("General Inquiry");

  useEffect(() => {
    const requestedSubject = new URLSearchParams(window.location.search).get("subject");
    if (requestedSubject?.trim()) setInquiryType(requestedSubject.trim().slice(0, 160));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const name = `${firstName} ${lastName}`.trim();
    const email = formData.get('email') as string;
    const subject = inquiryType;
    const message = formData.get('message') as string;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('We could not send your message just now. Please try again or contact us directly.');
      }
    } catch (error) {
      setSubmitError('A connection problem prevented your message from sending. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <section className="bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Get In Touch
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Reach out with a question, quote request or collaboration idea. We’ll get back to you as soon as we can.
          </m.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            
            {/* Contact Info */}
            <m.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Head Office</h4>
                    <p className="text-muted-foreground">Mangochi, Malawi</p>
                  </div>
                </div>

                <a href="https://wa.me/265993732694" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-green-500/10 p-3 rounded-xl text-green-600 mt-1 group-hover:bg-green-500/20 transition-colors">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-green-600 transition-colors">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-green-600 transition-colors">Chat with us on WhatsApp</p>
                  </div>
                </a>

                <a href="tel:+265885892269" className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-accent/10 p-3 rounded-xl text-accent mt-1 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">Phone / Calls</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">Tap to call us directly</p>
                  </div>
                </a>

                <a href="mailto:indelibletechnologiesmw@gmail.com" className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500 mt-1 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-blue-500 transition-colors">Email</h4>
                    <p className="text-muted-foreground group-hover:text-blue-500 transition-colors">indelibletechnologiesmw@gmail.com</p>
                  </div>
                </a>
                

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-500 mt-1">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM<br/>Saturday & Sunday: Closed</p>
                  </div>
                </div>
              


                <h4 className="mb-4 text-lg font-bold">Explore our work</h4>
                <div className="flex flex-wrap gap-3">
                  <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold transition-colors hover:border-secondary/50 hover:text-secondary">Portfolio <ArrowUpRight className="h-4 w-4" /></Link>
                  <a href="https://f7ky9nc8.eyivo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold transition-colors hover:border-secondary/50 hover:text-secondary">ShopMe <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </div>
            </m.div>

            {/* Contact Form / Quote Generator */}
            <m.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="quote"
            >
              <div className="glass p-8 md:p-10 rounded-3xl border border-border shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                </div>

                {submitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-6 rounded-xl text-center">
                    <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-emerald-500" />
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for reaching out to Indelible Technologies. We’ll review your message and get back to you as soon as we can.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-emerald-600 font-semibold underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    {submitError && <p role="alert" className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm leading-6 text-red-600 dark:text-red-400">{submitError}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                        <input name="firstName" required id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                        <input name="lastName" required id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <input name="email" required id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="inquiryType" className="text-sm font-medium">Inquiry Type</label>
                      <select name="inquiryType" id="inquiryType" value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                        {!["General Inquiry", "Website Development Quote", "Software System Demo", "Teachers Bank Implementation", "MsikaFlo Setup"].includes(inquiryType) && <option value={inquiryType}>{inquiryType}</option>}
                        <option>General Inquiry</option>
                        <option>Website Development Quote</option>
                        <option>Software System Demo</option>
                        <option>Teachers Bank Implementation</option>
                        <option>MsikaFlo Setup</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea name="message" required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button disabled={isSubmitting} type="submit" className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                    </button>
                    </form>
                  </>
                )}
              </div>
            </m.div>

          </div>
        </div>
      </section>
    </>
  );
}


