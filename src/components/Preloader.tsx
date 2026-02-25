'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950" />
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 20px rgba(220,38,38,0.3)',
                  '0 0 40px rgba(220,38,38,0.5)',
                  '0 0 20px rgba(220,38,38,0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-red-600 flex items-center justify-center"
            >
              <svg 
                viewBox="0 0 64 64" 
                className="w-14 h-14 md:w-16 md:h-16 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="32" cy="32" r="28" />
                <path d="M20 24c4-8 16-8 20 0" />
                <circle cx="24" cy="20" r="3" fill="currentColor" />
                <circle cx="40" cy="20" r="3" fill="currentColor" />
                <path d="M28 28l8 4" />
                <path d="M18 32c2 4 6 6 12 6 8 0 14-4 16-12" />
                <path d="M18 44c0-8 8-16 24-16" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 text-center mt-8"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3 tracking-wider">
              URUS
            </h1>
            <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase">
              Barber Studio
            </p>
          </motion.div>

          <div className="absolute bottom-12 w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.3, ease: 'easeInOut' }}
              className="h-full bg-red-600"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            className="absolute bottom-6 text-gray-500 text-xs tracking-widest"
          >
            CARGANDO
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
