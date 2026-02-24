'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors } from 'lucide-react';

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black" />
          
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
                  '0 0 20px rgba(245,158,11,0.3)',
                  '0 0 40px rgba(245,158,11,0.5)',
                  '0 0 20px rgba(245,158,11,0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 via-amber-300 to-amber-600 flex items-center justify-center"
            >
              <Scissors className="w-12 h-12 text-black" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 text-center mt-8"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-amber-500 mb-3 tracking-wider">
              URUS
            </h1>
            <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase">
              Barber Studio
            </p>
            <p className="text-gray-600 text-xs mt-4">El arte de la caballerosidad</p>
          </motion.div>

          <div className="absolute bottom-12 w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.3, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"
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
