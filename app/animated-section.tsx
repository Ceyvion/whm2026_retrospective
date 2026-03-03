'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface SectionData {
  title: string;
  narrative: string;
  bg: string;
  text: string;
  subtitle?: string;
  era?: string;
  fact?: string;
  image?: string;
  highlight?: string;
  pauseAndThink?: string;
}

interface Props {
  card: SectionData;
  index: number;
  sectionNumber?: number;
  showChevron?: boolean;
}

/* ── Motion variants ── */

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

/* Image uses CSS opacity — no motion wrapper.
   Animating opacity from 0 conflicts with the browser's
   lazy-load heuristic, which deprioritises images in
   invisible containers. Keeping a static 15% opacity
   ensures the browser fetches them reliably. */

/* ── Component ── */

export default function AnimatedSection({
  card,
  index,
  sectionNumber,
  showChevron = true,
}: Props) {
  const isHero = !!card.subtitle;
  const v = isHero ? heroFade : fadeUp;

  return (
    <section
      data-section-index={index}
      className={`h-[100dvh] w-full snap-start flex flex-col justify-center items-center p-6 md:p-12 relative overflow-hidden ${card.bg} ${card.text}`}
    >
      {/* Background image from local static assets.
          Using a CSS background keeps the visual treatment
          lightweight and avoids extra image component overhead. */}
      {card.image && (
        <div
          className="absolute inset-0 z-0 opacity-20 grayscale"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="presentation"
        />
      )}

      {/* Section number */}
      {sectionNumber !== undefined && (
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
          <span className="font-sans text-[10px] tracking-[0.2em] opacity-20">
            {String(sectionNumber).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* Content with staggered reveals */}
      <motion.div
        className="z-10 max-w-md w-full flex flex-col items-center text-center space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        {/* Era label */}
        {card.era && (
          <motion.span
            variants={v}
            className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50"
          >
            {card.era}
          </motion.span>
        )}

        {/* Hero vs standard layout */}
        {isHero ? (
          <>
            <motion.h1
              variants={v}
              className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.05]"
            >
              {card.title}
            </motion.h1>
            <motion.p
              variants={v}
              className="font-sans text-xs uppercase tracking-[0.3em] opacity-60"
            >
              {card.subtitle}
            </motion.p>
            <motion.div variants={v} className="flex items-center gap-3 my-2">
              <span className="w-8 h-[1px] bg-current opacity-20" />
              <span className="w-1.5 h-1.5 rotate-45 border border-current/20" />
              <span className="w-8 h-[1px] bg-current opacity-20" />
            </motion.div>
            <motion.p
              variants={v}
              className="font-sans text-base md:text-lg font-light leading-relaxed tracking-wide opacity-80"
            >
              {card.narrative}
            </motion.p>
          </>
        ) : (
          <>
            <motion.h2
              variants={v}
              className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.1]"
            >
              {card.title}
            </motion.h2>
            <motion.div variants={v} className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-current opacity-20" />
              <span className="w-1.5 h-1.5 rotate-45 border border-current/20" />
              <span className="w-8 h-[1px] bg-current opacity-20" />
            </motion.div>
            <motion.p
              variants={v}
              className="font-sans text-sm md:text-base font-light leading-relaxed tracking-wide opacity-90"
            >
              {card.narrative}
            </motion.p>
          </>
        )}

        {/* Album highlight */}
        {card.highlight && (
          <motion.p
            variants={v}
            className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40"
          >
            {card.highlight}
          </motion.p>
        )}

        {/* Pause and think — blockquote style */}
        {card.pauseAndThink && (
          <motion.div
            variants={v}
            className="mt-2 py-4 pl-5 border-l-2 border-current/20 w-full text-left"
          >
            <p className="font-serif italic text-sm opacity-70">
              {card.pauseAndThink}
            </p>
          </motion.div>
        )}

        {/* Quick fact */}
        {card.fact && (
          <motion.div
            variants={v}
            className="w-full pt-5 mt-2 border-t border-current/15 flex flex-col items-center"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">
              Quick Fact
            </span>
            <p className="font-serif italic text-xs md:text-sm opacity-75">
              {card.fact}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {showChevron && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
          <ChevronDown size={20} strokeWidth={1} />
        </div>
      )}
    </section>
  );
}
