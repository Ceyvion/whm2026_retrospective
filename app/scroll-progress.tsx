'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress({ total }: { total: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-index]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(
              Number(entry.target.getAttribute('data-section-index') ?? 0)
            );
          }
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Story progress"
      className="fixed right-3 md:right-7 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-2.5"
    >
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to section ${i + 1}`}
          aria-current={i === active ? 'true' : undefined}
          onClick={() => {
            const target = document.querySelector(`[data-section-index="${i}"]`);
            if (!target) return;

            const prefersReducedMotion = window.matchMedia(
              '(prefers-reduced-motion: reduce)'
            ).matches;

            target.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
              block: 'start',
            });
          }}
          className="group p-1 -m-1 cursor-pointer"
        >
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === active
                ? 'w-2 h-2 bg-white/80'
                : 'w-1.5 h-1.5 bg-white/25 group-hover:bg-white/40'
            }`}
            style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.12)' }}
          />
        </button>
      ))}
    </nav>
  );
}
