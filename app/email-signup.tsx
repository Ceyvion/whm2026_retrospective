'use client';

import { useState, FormEvent, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_KEY = 'ak-retrospective-subscribed';
const STORAGE_EVENT = 'ak-retrospective-subscription-updated';

const getSubscriptionSnapshot = () => {
  if (typeof window === 'undefined') return false;

  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
};

const subscribeToSubscriptionStore = (onStoreChange: () => void) => {
  const onStorage = (event: StorageEvent) => {
    if (!event.key || event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };
  const onLocalUpdate = () => onStoreChange();

  window.addEventListener('storage', onStorage);
  window.addEventListener(STORAGE_EVENT, onLocalUpdate);

  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(STORAGE_EVENT, onLocalUpdate);
  };
};

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submittedInSession, setSubmittedInSession] = useState(false);
  const [error, setError] = useState('');
  const subscribed = useSyncExternalStore(
    subscribeToSubscriptionStore,
    getSubscriptionSnapshot,
    () => false
  );
  const submitted = subscribed || submittedInSession;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const normalizedEmail = email.trim();

    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, 'true');
      window.dispatchEvent(new Event(STORAGE_EVENT));
    } catch {
      // Continue without persistence in private browsing / restricted storage environments.
    }
    setSubmittedInSession(true);
    setEmail('');
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full max-w-sm text-center space-y-3"
        >
          <p className="font-serif text-2xl">Thank you.</p>
          <p className="font-sans text-sm opacity-60 tracking-wide">
            You&apos;re on the list.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4"
        >
          <div className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              className="w-full bg-transparent border-b border-current/30 py-3 px-1 font-sans text-sm tracking-wide placeholder:opacity-40 focus:outline-none focus:border-current/60 transition-colors"
              aria-label="Email address"
            />
            {error && (
              <p className="font-sans text-xs text-terracotta">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 border border-current/30 font-sans text-xs uppercase tracking-[0.2em] hover:bg-current/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </div>
          <p className="font-sans text-[10px] opacity-40 tracking-wide text-center">
            No spam. Unsubscribe anytime.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
