"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Solutions", href: "/solutions" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-sm border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Indelible Technologies Logo"
              width={56}
              height={56}
              priority
              className="rounded-full object-cover"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    pathname === item.href ? "text-secondary font-semibold" : "text-foreground/80"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/contact"
                className="bg-primary hover:bg-secondary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Consultation
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/50 absolute top-full left-0 w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium p-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-secondary/10 text-secondary"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground text-center px-5 py-3 rounded-md text-sm font-medium mt-2"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
