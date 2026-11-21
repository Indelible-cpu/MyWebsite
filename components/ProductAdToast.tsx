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
    description: "Malawi’s premier digital marketplace connecting local vendors, businesses & shoppers.",
    ctaText: "Visit IndeMarket",
    href: "https://indemarket.vercel.app/",
    isExternal: true,
    accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    icon: ShoppingBag,
  },
  {
    id: "msikaflo",
    badge: "Retail & POS System",
    name: "MsikaFlo",
    description: "Smart point-of-sale, inventory tracking, analytics, and digital storefront workflows.",
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
    description: "Streamlined student billing, fee tracking, invoices & automated reconciliations.",
    ctaText: "Explore Solution",
    href: "/solutions#teachers-bank",
    isExternal: false,
    accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-500/15 border-purple-500/30",
    badgeText: "text-purple-700 dark:text-purple-300",
    icon: GraduationCap,
  },
  {
    id: "secschoolhub",
    badge: "School Management",
    name: "SecSchoolHub",
    description: "All-in-one secondary school administration, grading, student records & reporting.",
    ctaText: "Explore Solution",
    href: "/solutions#secschoolhub",
    isExternal: false,
    accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-500/15 border-amber-500/30",
    badgeText: "text-amber-700 dark:text-amber-300",
    icon: School,
  },
];

// Intervals:
const INITIAL_DELAY_MS = 12000;       // 12s delay before first ad appears
const DISPLAY_DURATION_MS = 10000;    // Visible on screen for 10s
const REST_INTERVAL_MS = 35000;       // Hidden for 35s of quiet reading before the next ad

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

    // Initial appearance after 12s
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, INITIAL_DELAY_MS);

    return () => clearTimeout(initialTimer);
  }, []);

  // Handle visibility cycle (show for 10s -> hide -> wait 35s -> show next)
  useEffect(() => {
    if (isDismissed) return;

    if (isVisible) {
      // If visible, schedule to hide after DISPLAY_DURATION_MS unless user is hovering
      if (!isHovered) {
        hideTimerRef.current = setTimeout(() => {
          setIsVisible(false);

          // Once hidden, wait REST_INTERVAL_MS before triggering the next ad
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
          aria-label="Product Spotlight"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 280, damping: 25 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-5 left-4 sm:left-6 z-40 w-[calc(100vw-2rem)] sm:w-[350px] max-w-[350px] rounded-2xl bg-card/95 backdrop-blur-md border border-border/80 shadow-2xl p-4 text-card-foreground select-none overflow-hidden"
        >
          {/* Top Row: Badge & Dismiss Button */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${product.badgeBg} ${product.badgeText}`}
            >
              <Sparkles className="h-3 w-3" />
              {product.badge}
            </span>

            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close"
              className="h-6 w-6 rounded-md hover:bg-muted/80 flex items-center justify-center text-muted-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Product Info */}
          <div className="flex items-start gap-3 my-2">
            <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${product.accentBg}`}>
              <IconComponent className="h-5 w-5" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold tracking-tight text-foreground flex items-center gap-1.5">
                {product.name}
                {product.isExternal && (
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-muted text-muted-foreground">
                    Live
                  </span>
                )}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-2 mt-1 border-t border-border/60 flex items-center justify-end">
            {product.isExternal ? (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>{product.ctaText}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <Link
                href={product.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>{product.ctaText}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        </m.aside>
      )}
    </AnimatePresence>
  );
}
