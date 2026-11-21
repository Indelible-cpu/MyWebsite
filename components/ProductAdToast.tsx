"use client";

import { useEffect, useState, useRef } from "react";
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
  badgeBg: string;
  badgeText: string;
  icon: typeof ShoppingBag;
}

const PRODUCT_ADS: ProductAd[] = [
  {
    id: "indemarket",
    badge: "Live Marketplace",
    name: "IndeMarket",
    description: "Malawi’s premier digital marketplace for vendors, businesses & shoppers.",
    ctaText: "Visit Store",
    href: "https://indemarket.vercel.app/",
    isExternal: true,
    accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    icon: ShoppingBag,
  },
  {
    id: "msikaflo",
    badge: "Retail & POS",
    name: "MsikaFlo",
    description: "Smart point-of-sale, inventory control, and retail storefront management.",
    ctaText: "Learn More",
    href: "/solutions#msikaflo",
    isExternal: false,
    accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-500/15 border-blue-500/30",
    badgeText: "text-blue-700 dark:text-blue-300",
    icon: Store,
  },
  {
    id: "teachers-bank",
    badge: "School Finance",
    name: "Teachers Bank",
    description: "Streamlined student billing, fee tracking & automated reconciliations.",
    ctaText: "Explore",
    href: "/solutions#teachers-bank",
    isExternal: false,
    accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-500/15 border-purple-500/30",
    badgeText: "text-purple-700 dark:text-purple-300",
    icon: GraduationCap,
  },
  {
    id: "secschoolhub",
    badge: "School Hub",
    name: "SecSchoolHub",
    description: "All-in-one secondary school administration, grading & academic records.",
    ctaText: "Explore",
    href: "/solutions#secschoolhub",
    isExternal: false,
    accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-500/15 border-amber-500/30",
    badgeText: "text-amber-700 dark:text-amber-300",
    icon: School,
  },
];

// Intervals:
const INITIAL_DELAY_MS = 12000;    // 12s initial delay so visitor reads hero first
const DISPLAY_DURATION_MS = 10000; // Visible for 10s
const REST_INTERVAL_MS = 35000;    // Hidden for 35s between ads

export function ProductAdToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const nextAdTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check session storage on initial mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = sessionStorage.getItem("indelible_ad_dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    // Initial appearance after delay
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, INITIAL_DELAY_MS);

    return () => clearTimeout(initialTimer);
  }, []);

  // Handle visibility cycle (show for 10s -> hide -> wait 35s -> show next)
  useEffect(() => {
    if (isDismissed) return;

    if (isVisible) {
      if (!isHovered) {
        hideTimerRef.current = setTimeout(() => {
          setIsVisible(false);

          // Once hidden, wait 35s of quiet reading before next product drops down
          nextAdTimerRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % PRODUCT_ADS.length);
            setIsVisible(true);
          }, REST_INTERVAL_MS);
        }, DISPLAY_DURATION_MS);
      }
    }

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isVisible, isHovered, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (nextAdTimerRef.current) clearTimeout(nextAdTimerRef.current);
    sessionStorage.setItem("indelible_ad_dismissed", "true");
  };

  const product = PRODUCT_ADS[currentIndex];
  const IconComponent = product.icon;

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <m.aside
          role="complementary"
          aria-label="Product Spotlight Banner"
          initial={{ opacity: 0, y: -30, x: "-50%", scale: 0.96 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -25, x: "-50%", scale: 0.96 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed top-20 sm:top-22 left-1/2 z-40 w-[calc(100vw-1.5rem)] sm:w-auto sm:max-w-2xl rounded-2xl sm:rounded-full bg-card/95 backdrop-blur-md border border-border/80 shadow-2xl p-3 sm:px-5 sm:py-2.5 text-card-foreground select-none"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
            {/* Left: Icon, Badge & 1-line description */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`p-1.5 rounded-lg shrink-0 ${product.accentBg}`}>
                <IconComponent className="h-4 w-4" />
              </div>

              <div className="flex items-center gap-2 min-w-0 flex-wrap sm:flex-nowrap">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 border ${product.badgeBg} ${product.badgeText}`}
                >
                  <Sparkles className="h-3 w-3" />
                  {product.name}
                </span>

                <p className="text-xs sm:text-sm text-muted-foreground truncate leading-snug">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Right: CTA & Dismiss */}
            <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-border/50">
              {product.isExternal ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>{product.ctaText}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}

              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Close notification"
                className="h-6 w-6 rounded-full hover:bg-muted/80 flex items-center justify-center text-muted-foreground transition-colors ml-1"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </m.aside>
      )}
    </AnimatePresence>
  );
}
