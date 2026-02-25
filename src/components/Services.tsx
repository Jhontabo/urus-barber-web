'use client';

import { motion } from 'framer-motion';
import { Scissors, Shield, Sparkles, Crown, Check, Clock } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Corte',
    description: 'Corte de precisión adaptado a tu estilo.',
    price: '$12.000',
    duration: '45 min',
    features: ['Técnica precisión', 'Estilo personalizado'],
    popular: false,
  },
  {
    icon: Shield,
    title: 'Barba',
    description: 'Diseño y mantenimiento con productos premium.',
    price: '$8.000',
    duration: '30 min',
    features: ['Toalla caliente', 'Aceites premium'],
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Afeitado',
    description: 'Experiencia de spa masculino.',
    price: '$10.000',
    duration: '35 min',
    features: ['Navaja caliente', 'Masaje facial'],
    popular: false,
  },
  {
    icon: Crown,
    title: 'Combo Premium',
    description: 'Corte + Barba + Afeitado completo.',
    price: '$25.000',
    duration: '90 min',
    features: ['Todos los servicios', 'Ahorra $5.000'],
    popular: true,
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

export default function Services() {
  const openWhatsApp = (service?: string) => {
    const phone = '573238647250';
    const message = encodeURIComponent(
      service
        ? `¡Hola! Quiero reservar: ${service}`
        : '¡Hola! Quiero hacer una reserva en Urus Barber Studio.'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs md:text-sm font-medium tracking-wider mb-3 md:mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Transforma tu <span className="text-red-600">Look</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Si no te gusta el resultado, ¡no pagas!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className={`relative bg-zinc-900 border rounded-xl md:rounded-2xl p-3 md:p-6 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl ${
                service.popular
                  ? 'border-red-600/50 shadow-[0_0_20px_rgba(220,38,38,0.15)]'
                  : 'border-zinc-800 hover:border-red-600/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-2 md:px-4 py-0.5 md:py-1 rounded-full text-[10px] md:text-sm font-bold flex items-center gap-1">
                  <Crown className="w-2.5 md:w-3 h-2.5 md:h-3" /> POPULAR
                </div>
              )}

              <div className="text-center mb-2 md:mb-4">
                <div className={`w-10 h-10 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4 transition-transform duration-300 hover:scale-110 ${
                  service.popular
                    ? 'bg-red-600'
                    : 'bg-zinc-800'
                }`}>
                  <service.icon className={`w-5 h-5 md:w-8 md:h-8 ${service.popular ? 'text-white' : 'text-red-600'}`} />
                </div>

                <h3 className="font-display text-sm md:text-xl font-bold text-white mb-1 md:mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm line-clamp-2">{service.description}</p>
              </div>

              <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4 text-gray-500">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-xs">{service.duration}</span>
              </div>

              <ul className="space-y-1 md:space-y-2 mb md:mb--26">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs text-gray-500">
                    <Check className="w-2.5 md:w-3 h-2.5 md:h-3 text-red-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center mb-2 md:mb-4">
                <div className="text-xl md:text-3xl font-bold text-white">{service.price}</div>
                <div className="text-[10px] md:text-xs text-gray-500">COP</div>
              </div>

              <button
                onClick={() => openWhatsApp(service.title)}
                className={`w-full py-2 md:py-3 rounded-full font-medium text-xs md:text-sm transition-all duration-300 active:scale-95 ${
                  service.popular
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'border border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white'
                }`}
              >
                Reservar
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-gray-400 mb-3 md:mb-4 text-sm">¿Necesitas algo diferente?</p>
          <button
            onClick={() => openWhatsApp()}
            className="text-red-500 hover:text-red-400 font-medium text-sm md:text-base"
          >
            Contáctanos →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
