'use client';

import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1560066985-278c9e9e0f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Corte de barba',
    title: 'Corte de Barba',
    colSpan: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-66be38e60b68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Corte de cabello',
    title: 'Estilo Moderno',
    colSpan: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1594619837397-1f0c5e2e4bfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Afeitado tradicional',
    title: 'Afeitado Clásico',
    colSpan: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1589258943863-660a8ae8c6c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Arreglo de cabello',
    title: 'Texture Cut',
    colSpan: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Barbería',
    title: 'Fade Perfect',
    colSpan: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f1cde7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Servicio premium',
    title: 'Premium Service',
    colSpan: 'col-span-1 row-span-1',
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
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium tracking-wider mb-4">
            NUESTRO TRABAJO
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Transforma tu <span className="text-amber-500">Estilo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada corte es una obra de arte. Descubre los estilos que nossos clientes han elegido
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.colSpan} ${
                index === 1 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 bg-amber-500/20 backdrop-blur-[2px]" />
                <div className="relative z-10 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-amber-400 text-sm mt-1">{image.alt}</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">¿Te inspiras? Schedule tu cita</p>
          <button
            onClick={() => {
              const phone = '573238647250';
              const message = encodeURIComponent('¡Hola! Quiero ver más trabajos y reservar una cita.');
              window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            }}
            className="bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold px-8 py-3 rounded-full hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Reservar Cita
          </button>
        </motion.div>
      </div>
    </section>
  );
}
