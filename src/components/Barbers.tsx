'use client';

import { motion } from 'framer-motion';
import { Star, Instagram, MessageCircle } from 'lucide-react';

const barbers = [
  {
    name: 'Juan Carlos',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    specialties: ['Cortes modernos', 'Fade'],
    rating: 4.9,
    reviews: 234,
  },
  {
    name: 'Miguel Ángel',
    role: 'Estilista',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    specialties: ['Cortes clásicos', 'Afeitado'],
    rating: 4.8,
    reviews: 189,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Barber',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    specialties: ['Texture cut', 'Skin fade'],
    rating: 4.9,
    reviews: 156,
  },
  {
    name: 'Andrés Felipe',
    role: 'Barber Jr',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f1cde7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    specialties: ['Cortes juveniles', 'Barba'],
    rating: 4.7,
    reviews: 98,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Barbers() {
  const openWhatsApp = (barber?: string) => {
    const phone = '573238647250';
    const message = encodeURIComponent(
      barber
        ? `¡Hola! Quiero que ${barber} me atienda en Urus Barber Studio.`
        : '¡Hola! Quiero hacer una reserva en Urus Barber Studio.'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="barberos" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs md:text-sm font-medium tracking-wider mb-3 md:mb-4">
            NUESTRO EQUIPO
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Conoce a <span className="text-red-600">Nuestros Barberos</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Profesionales comprometidos con tu estilo
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {barbers.map((barber) => (
            <motion.div
              key={barber.name}
              variants={item}
              className="group relative bg-zinc-950 border border-zinc-800 rounded-xl md:rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10"
            >
              <div className="relative h-40 md:h-56 lg:h-72 overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                
                <div className="absolute top-2 md:top-4 right-2 md:right-4">
                  <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-900/80 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <Instagram className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>

                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                  <div className="flex items-center gap-0.5 md:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(barber.rating) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
                      />
                    ))}
                    <span className="text-white text-[10px] md:text-sm ml-1 font-medium">{barber.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-2 md:p-5">
                <h3 className="font-display text-sm md:text-xl font-bold text-white mb-0.5 md:mb-1">
                  {barber.name}
                </h3>
                <p className="text-red-500 text-[10px] md:text-sm font-medium mb-2 md:mb-3">
                  {barber.role}
                </p>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                  {barber.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 md:px-3 md:py-1 bg-zinc-900 text-gray-400 text-[10px] md:text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openWhatsApp(barber.name)}
                  className="w-full py-1.5 md:py-2.5 bg-zinc-800 hover:bg-red-600 text-white font-medium text-[10px] md:text-sm rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center gap-1 md:gap-2"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden md:inline">Reservar con {barber.name.split(' ')[0]}</span>
                  <span className="md:hidden">Reservar</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
