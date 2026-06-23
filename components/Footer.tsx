"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Indelible Technologies Logo"
                width={72}
                height={72}
                className="rounded-full object-cover"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-2 leading-relaxed">
              Digital Transformation & Innovation Partner. Developing affordable, secure, innovative and practical digital solutions for businesses and communities.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="Facebook">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="X (Twitter)">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-primary-foreground/80 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio & Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing & Quotes</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Innovation Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Our Ecosystem</h4>
            <ul className="flex flex-col gap-2 text-primary-foreground/80 text-sm">
              <li><Link href="/solutions#education" className="hover:text-accent transition-colors">Teachers Bank</Link></li>
              <li><Link href="/solutions#retail" className="hover:text-accent transition-colors">MsikaPos</Link></li>
              <li><Link href="/solutions#finance" className="hover:text-accent transition-colors">EduPayTrack</Link></li>
              <li><Link href="/solutions#business" className="hover:text-accent transition-colors">Business Management</Link></li>
              <li><Link href="/solutions#community" className="hover:text-accent transition-colors">Community Solutions</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Mangochi, Malawi</span>
              </li>
              <li>
                <a href="https://wa.me/265993732694" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <FaWhatsapp className="w-4 h-4 text-accent shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="tel:+265885892269" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>Call</span>
                </a>
              </li>
              <li>
                <a href="mailto:indelibletechnologiesmw@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-medium text-sm mb-2 text-primary-foreground">Subscribe to our newsletter</h5>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button type="submit" className="bg-accent hover:bg-accent/90 text-primary-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {currentYear} Indelible Technologies. Powered by JEF Investment.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
