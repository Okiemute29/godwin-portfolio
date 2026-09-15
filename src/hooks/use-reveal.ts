import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal hook. Attaches an IntersectionObserver to the
 * returned ref and flips `isVisible` once the element enters the viewport.
 * No animation library — pairs with the .reveal / .reveal-scale utility
 * classes in index.css, which also respect prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
