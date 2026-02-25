'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, Award, Droplets, Clock } from 'lucide-react';

const benefits = [
  { icon: Award, text: '+5 años' },
  { icon: Droplets, text: 'Premium' },
  { icon: Clock, text: 'Personalizado' },
];

export default function Hero() {
  const openWhatsApp = () => {
    const phone = '573238647250';
    const message = encodeURIComponent('¡Hola! Quiero hacer una reserva en Urus Barber Studio.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2c37e6e7c9b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Barbería profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-900/70 to-zinc-950" />
      </div>

      <div className="relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 md:mb-6"
        >
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-red-600/20 border border-red-600/40 rounded-full text-red-500 text-xs md:text-sm font-semibold tracking-widest uppercase">
            ✂️ Barbería & Estilo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight"
        >
          No eres feo, simplemente <br />
          <span className="text-red-600">tienes mal corte</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 font-light"
        >
          Transforma tu look con los mejores profesionales
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 md:gap-4 justify-center items-stretch md:items-center mb-8 md:mb-12 px-2"
        >
          <button
            onClick={openWhatsApp}
            className="group bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg px-6 py-3 md:py-4 rounded-full hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 md:min-w-[280px] w-full md:w-auto"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>¡Reservar Ahora!</span>
          </button>
          
          <button
            onClick={() => scrollToSection('#servicios')}
            className="group border-2 border-white/30 text-white font-semibold px-6 py-3 md:py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 active:scale-95 text-base md:text-lg md:min-w-[280px] w-full md:w-auto"
          >
            Ver Servicios
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center">
                <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
              </div>
              <span className="text-xs md:text-sm font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#servicios')}
            className="group flex flex-col items-center text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-[0.3em] mb-1 md:mb-2">DESCUBRIR</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
