'use client';

import { motion } from 'motion/react';
import { type ReactNode, Children } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function SignupReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="z-10 max-w-md w-full flex flex-col items-center text-center space-y-7"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      {Children.map(children, (child) => (
        <motion.div variants={fadeUp} className="w-full flex flex-col items-center">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
