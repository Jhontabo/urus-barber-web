'use client';

import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1560066985-278c9e9e0f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Corte de barba', title: 'Corte' },
  { src: 'https://images.unsplash.com/photo-1585747860715-66be38e60b68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Corte de cabello', title: 'Estilo' },
  { src: 'https://images.unsplash.com/photo-1594619837397-1f0c5e2e4bfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Afeitado', title: 'Afeitado' },
  { src: 'https://images.unsplash.com/photo-1589258943863-660a8ae8c6c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Arreglo', title: 'Texture' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Barbería', title: 'Fade' },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f1cde7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Servicio', title: 'Premium' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs md:text-sm font-medium tracking-wider mb-3 md:mb-4">
            NUESTRO TRABAJO
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Transforma tu <span className="text-red-600">Estilo</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Cada corte es una obra de arte
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 bg-red-600/30 backdrop-blur-[1px]" />
                <div className="relative z-10 text-center">
                  <h3 className="font-display text-sm md:text-lg font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <button
            onClick={() => {
              const phone = '573238647250';
              const message = encodeURIComponent('¡Hola! Quiero reservar una cita.');
              window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 md:px-8 md:py-3 rounded-full hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 active:scale-95 text-sm md:text-base"
          >
            Reservar Cita
          </button>
        </motion.div>
      </div>
    </section>
  );
}
