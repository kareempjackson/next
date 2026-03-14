'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center px-6"
      >
        <p className="text-sm font-mono text-[#3ecf8e] uppercase tracking-widest mb-6">
          new 
        </p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">new </h1>
        <p className="text-white/50 text-lg max-w-md mb-10">
          Your project is live. Time to build.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://app.ghyst.io"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3ecf8e] text-black font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Continue building with Ghyst →
          </a>
          <a
            href="/api/health"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-sm text-white/50 hover:text-white hover:border-white/20 transition-colors"
          >
            API Health ↗
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
