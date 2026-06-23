"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Zap, CheckCircle2 } from "lucide-react";
import { m } from "framer-motion";
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold mb-6"
          >
            Get In Touch
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Reach out for any inquiries, quotes, or collaboration ideas. We’ll respond within 24 hours.
          </m.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
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
                    <p className="text-muted-foreground group-hover:text-green-600 transition-colors">+265 993 732 694</p>
                  </div>
                </a>

                <a href="tel:+265885892269" className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-accent/10 p-3 rounded-xl text-accent mt-1 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">Phone / Calls</h4>
                    <p className="text-muted-foreground group-hover:text-accent transition-colors">+265 885 892 269</p>
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
              


                <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                    <FaInstagram className="w-4 h-4" />
                  </a>
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
                    <p>Thank you for reaching out to Indelible Technologies. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-emerald-600 font-semibold underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                        <input required id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                        <input required id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <input required id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="inquiryType" className="text-sm font-medium">Inquiry Type</label>
                      <select id="inquiryType" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all">
                        <option>General Inquiry</option>
                        <option>Website Development Quote</option>
                        <option>Software System Demo</option>
                        <option>Teachers Bank Implementation</option>
                        <option>MsikaPos Setup</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button disabled={isSubmitting} type="submit" className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </m.div>

          </div>
        </div>
      </section>
    </>
  );
}


