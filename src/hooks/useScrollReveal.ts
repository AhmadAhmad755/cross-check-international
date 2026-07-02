import { useEffect } from 'react';

/**
 * Progressively reveals elements carrying the `.reveal` class as they enter the
 * viewport, using a single IntersectionObserver. Each element animates in once
 * and is then unobserved, so scrolling back up never re-triggers it.
 *
 * Respects `prefers-reduced-motion: reduce` — matching users get the final
 * state immediately with no transition. Also degrades gracefully if
 * IntersectionObserver is unavailable.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (elements.length === 0) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
