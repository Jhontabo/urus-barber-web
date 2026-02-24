'use client';

import { motion } from 'framer-motion';
import { Scissors, Shield, Sparkles, Crown, Check, Clock } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Corte de Cabello',
    description: 'Corte de precisión con técnicas modernas y clásicas, adaptado a tu estilo personal.',
    price: '$12.000',
    duration: '45 min',
    features: ['Técnica de precisión', 'Estilo personalizado', 'Consulta previa'],
    popular: false,
  },
  {
    icon: Shield,
    title: 'Arreglo de Barba',
    description: 'Diseño y mantenimiento de barba con toalla caliente y aceites premium.',
    price: '$8.000',
    duration: '30 min',
    features: ['Toalla caliente', 'Aceites premium', 'Diseño personalizado'],
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Afeitado Tradicional',
    description: 'Experiencia de spa masculino con navaja caliente y productos artesanales.',
    price: '$10.000',
    duration: '35 min',
    features: ['Navaja caliente', 'Productos artesanales', 'Masaje facial'],
    popular: false,
  },
  {
    icon: Crown,
    title: 'Combo Premium',
    description: 'La experiencia completa: Corte + Barba + Afeitado tradicional.',
    price: '$25.000',
    duration: '90 min',
    features: ['Todos los servicios', 'Ahorra $5.000', 'Experiencia VIP'],
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
    <section id="servicios" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium tracking-wider mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Transforma tu <span className="text-amber-500">Look</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tratamientos exclusivos diseñados para el caballero moderno que exige excelencia
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className={`relative bg-neutral-900 border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                service.popular
                  ? 'border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]'
                  : 'border-neutral-800 hover:border-amber-500/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Crown className="w-3 h-3" /> MÁS POPULAR
                </div>
              )}

              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 ${
                  service.popular
                    ? 'bg-gradient-to-br from-amber-500 to-amber-300'
                    : 'bg-neutral-800'
                }`}>
                  <service.icon className={`w-8 h-8 ${service.popular ? 'text-black' : 'text-amber-500'}`} />
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-4 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-xs">{service.duration}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Check className="w-3 h-3 text-amber-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-white">{service.price}</div>
                <div className="text-xs text-gray-500">COP</div>
              </div>

              <button
                onClick={() => openWhatsApp(service.title)}
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 active:scale-95 ${
                  service.popular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                    : 'border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black'
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
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">¿Necesitas algo diferente?</p>
          <button
            onClick={() => openWhatsApp()}
            className="text-amber-500 hover:text-amber-400 font-medium underline underline-offset-4 transition-colors"
          >
            Contáctanos para servicios personalizados
          </button>
        </motion.div>
      </div>
    </section>
  );
}
