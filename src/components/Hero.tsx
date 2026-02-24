'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, Sparkles, Award, Clock } from 'lucide-react';

const benefits = [
  { icon: Award, text: '+5 años de experiencia' },
  { icon: Sparkles, text: 'Productos premium' },
  { icon: Clock, text: 'Atención personalizada' },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2c37e6e7c9b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Barbería profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium tracking-wider">
            ✂️ BARBERÍA DE LUJO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
        >
          Urus <span className="text-amber-500">Barber</span> Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-3 font-light"
        >
          El arte de la caballerosidad
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Donde la tradición Meets la modernidad. Experimenta el cuidado masculino en su máxima expresión
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={openWhatsApp}
            className="group bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-bold text-lg px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 min-w-[300px]"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Reservar Ahora</span>
          </button>
          
          <button
            onClick={() => scrollToSection('#servicios')}
            className="group border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 min-w-[300px]"
          >
            Ver Servicios
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-3 text-gray-400"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-sm font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#servicios')}
            className="group flex flex-col items-center text-gray-500 hover:text-amber-500 transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-[0.3em] mb-2">DESCUBRIR</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 group-hover:scale-125 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
