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
  bannerBg: string;
  badgeBg: string;
  btnClass: string;
  iconBg: string;
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
    bannerBg: "bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 border-emerald-400/40 shadow-emerald-950/30",
    badgeBg: "bg-white/20 border-white/30 text-white",
    btnClass: "bg-white text-emerald-900 hover:bg-emerald-50",
    iconBg: "bg-white/20 text-white",
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
    bannerBg: "bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 border-blue-400/40 shadow-blue-950/30",
    badgeBg: "bg-white/20 border-white/30 text-white",
    btnClass: "bg-white text-blue-900 hover:bg-blue-50",
    iconBg: "bg-white/20 text-white",
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
    bannerBg: "bg-gradient-to-r from-purple-800 via-violet-800 to-purple-900 border-purple-400/40 shadow-purple-950/30",
    badgeBg: "bg-white/20 border-white/30 text-white",
    btnClass: "bg-white text-purple-950 hover:bg-purple-50",
    iconBg: "bg-white/20 text-white",
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
    bannerBg: "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 border-amber-300/40 shadow-orange-950/30",
    badgeBg: "bg-white/20 border-white/30 text-white",
    btnClass: "bg-white text-amber-950 hover:bg-amber-50",
    iconBg: "bg-white/20 text-white",
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
          className={`fixed top-20 sm:top-22 left-1/2 z-40 w-[calc(100vw-1.5rem)] sm:w-auto sm:max-w-2xl rounded-2xl sm:rounded-full ${product.bannerBg} border shadow-2xl p-3 sm:px-5 sm:py-2.5 text-white select-none`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
            {/* Left: Icon, Badge & 1-line description */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`p-1.5 rounded-lg shrink-0 ${product.iconBg}`}>
                <IconComponent className="h-4 w-4" />
              </div>

              <div className="flex items-center gap-2 min-w-0 flex-wrap sm:flex-nowrap">
                <span className={`font-mono inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider shrink-0 border ${product.badgeBg}`}>
                  <Sparkles className="h-3 w-3" />
                  <span className="font-display normal-case font-semibold text-xs tracking-normal">{product.name}</span>
                </span>

                <p className="font-sans text-xs sm:text-sm text-white/95 truncate leading-snug">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Right: High-Contrast CTA & Dismiss */}
            <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-white/20">
              {product.isExternal ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${product.btnClass} transition-all shadow-md active:scale-95`}
                >
                  <span>{product.ctaText}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={product.href}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${product.btnClass} transition-all shadow-md active:scale-95`}
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}

              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Close notification"
                className="h-6 w-6 rounded-full hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors ml-1"
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
