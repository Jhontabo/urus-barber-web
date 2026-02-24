'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const openWhatsApp = () => {
    const phone = '573238647250';
    const message = encodeURIComponent('¡Hola! Quiero hacer una reserva en Urus Barber Studio.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: 100 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(34,197,94,0.4)] transition-all duration-300 flex items-center justify-center group"
        aria-label="Reservar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </span>
        
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
        >
          ¡Reserva tu cita!
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-neutral-900" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
