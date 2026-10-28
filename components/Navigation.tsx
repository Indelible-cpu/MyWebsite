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
  { title: "ShopMe", href: "https://f7ky9nc8.eyivo.com" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-sm border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Indelible Technologies home" className="flex shrink-0 items-center">
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
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            <div className="flex items-center gap-3 xl:gap-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`whitespace-nowrap text-xs xl:text-sm font-medium transition-colors hover:text-secondary ${
                    pathname === item.href ? "text-secondary font-semibold" : "text-foreground/80"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div id="mobile-navigation" className="absolute left-0 top-full w-full border-t border-border/70 bg-background shadow-xl lg:hidden">
          <div className="container mx-auto flex max-h-[calc(100dvh-5rem)] flex-col gap-2 overflow-y-auto px-4 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-lg p-3 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-secondary/10 text-secondary"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
