"use client";

import { useEffect, useState, useRef, useTransition } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Store,
  GraduationCap,
  School,
  X,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface ProductAd {
  id: string;
  badge: string;
  name: string;
  description: string;
  ctaText: string;
  href: string;
  isExternal: boolean;
  accentBg: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  icon: typeof ShoppingBag;
}

const PRODUCT_ADS: ProductAd[] = [
  {
    id: "indemarket",
    badge: "Live Marketplace",
    name: "IndeMarket",
    description: "Malawi’s premier digital marketplace for local vendors, businesses & shoppers.",
    ctaText: "Visit IndeMarket",
    href: "https://indemarket.vercel.app/",
    isExternal: true,
    accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    accentText: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    icon: ShoppingBag,
  },
  {
    id: "msikaflo",
    badge: "Retail POS & Storefront",
    name: "MsikaFlo",
    description: "Point-of-sale, inventory tracking, sales analytics, and online shop workflows.",
    ctaText: "Explore MsikaFlo",
    href: "/solutions#msikaflo",
    isExternal: false,
    accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    accentText: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-500/15 border-blue-500/30",
    badgeText: "text-blue-700 dark:text-blue-300",
    icon: Store,
  },
  {
    id: "teachers-bank",
    badge: "School Finance",
    name: "Teachers Bank",
    description: "Streamline student billing, fee tracking, invoices & institutional reconciliations.",
    ctaText: "Explore Solution",
    href: "/solutions#teachers-bank",
    isExternal: false,
    accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    accentText: "text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-500/15 border-purple-500/30",
    badgeText: "text-purple-700 dark:text-purple-300",
    icon: GraduationCap,
  },
  {
    id: "secschoolhub",
    badge: "School Management",
    name: "SecSchoolHub",
    description: "All-in-one secondary school administration, grading, attendance & records.",
    ctaText: "Explore Solution",
    href: "/solutions#secschoolhub",
    isExternal: false,
    accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    accentText: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-500/15 border-amber-500/30",
    badgeText: "text-amber-700 dark:text-amber-300",
    icon: School,
  },
];

const ROTATION_INTERVAL_MS = 14000; // 14 seconds per product

export function ProductAdToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Initial delay: don't pop up immediately upon landing (wait 7 seconds)
  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("indelible_product_ad_dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Interval rotation between products
  useEffect(() => {
    if (!isVisible || isDismissed || isPaused) return;

    const interval = setInterval(() => {
      startTransition(() => {
        setCurrentIndex((prev) => (prev + 1) % PRODUCT_ADS.length);
      });
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isVisible, isDismissed, isPaused]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("indelible_product_ad_dismissed", "true");
  };

  const handleReopen = () => {
    setIsDismissed(false);
    setIsVisible(true);
    sessionStorage.removeItem("indelible_product_ad_dismissed");
  };

  const currentProduct = PRODUCT_ADS[currentIndex];
  const IconComponent = currentProduct.icon;

  return (
    <>
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <m.aside
            role="complementary"
            aria-label="Featured Product Spotlight"
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="fixed bottom-5 left-4 sm:left-6 z-40 w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] rounded-2xl bg-card/95 backdrop-blur-md border border-border/80 shadow-2xl p-4 text-card-foreground select-none overflow-hidden"
          >
            {/* Header / Badge + Controls */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${currentProduct.badgeBg} ${currentProduct.badgeText}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                  {currentProduct.badge}
                </span>
                <span className="text-[10px] text-muted-foreground/80 font-medium">
                  {currentIndex + 1} of {PRODUCT_ADS.length}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Previous button */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      (prev) => (prev - 1 + PRODUCT_ADS.length) % PRODUCT_ADS.length
                    )
                  }
                  aria-label="Previous featured solution"
                  className="h-6 w-6 rounded-md hover:bg-muted/80 flex items-center justify-center text-muted-foreground transition-colors"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>

                {/* Next button */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % PRODUCT_ADS.length)
                  }
                  aria-label="Next featured solution"
                  className="h-6 w-6 rounded-md hover:bg-muted/80 flex items-center justify-center text-muted-foreground transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>

                {/* Dismiss button */}
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Close product spotlight"
                  className="h-6 w-6 rounded-md hover:bg-muted/80 flex items-center justify-center text-muted-foreground transition-colors ml-1"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Product Body (Animated on switch) */}
            <AnimatePresence mode="wait">
              <m.div
                key={currentProduct.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 my-2"
              >
                <div
                  className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${currentProduct.accentBg}`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold tracking-tight text-foreground flex items-center gap-1.5">
                    {currentProduct.name}
                    {currentProduct.isExternal && (
                      <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-muted text-muted-foreground">
                        Live
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                    {currentProduct.description}
                  </p>
                </div>
              </m.div>
            </AnimatePresence>

            {/* Action & Dots */}
            <div className="flex items-center justify-between gap-2 pt-2.5 mt-1 border-t border-border/60">
              {/* Product Step Dots */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {PRODUCT_ADS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Show ${prod.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-4 bg-primary"
                        : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                  />
                ))}
              </div>

              {/* Call to action */}
              {currentProduct.isExternal ? (
                <a
                  href={currentProduct.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>{currentProduct.ctaText}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={currentProduct.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>{currentProduct.ctaText}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>

            {/* Subtle Progress Bar */}
            {!isPaused && (
              <m.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: ROTATION_INTERVAL_MS / 1000,
                  ease: "linear",
                }}
                className="absolute bottom-0 left-0 h-0.5 bg-primary/40"
              />
            )}
          </m.aside>
        )}
      </AnimatePresence>

      {/* Discreet Reopen Badge when dismissed */}
      {isDismissed && (
        <m.button
          type="button"
          onClick={handleReopen}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="View featured solutions"
          aria-label="Reopen featured solutions spotlight"
          className="fixed bottom-5 left-4 sm:left-6 z-40 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border/80 shadow-lg text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Products (4)</span>
        </m.button>
      )}
    </>
  );
}
