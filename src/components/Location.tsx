'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail, Calendar } from 'lucide-react';

const schedules = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 8:00 PM', available: true },
  { day: 'Sábado', hours: '9:00 AM - 8:00 PM', available: true },
  { day: 'Domingo', hours: '10:00 AM - 6:00 PM', available: false },
  { day: 'Festivos', hours: '10:00 AM - 6:00 PM', available: false },
];

export default function Location() {
  const openWhatsApp = () => {
    const phone = '573238647250';
    const message = encodeURIComponent('¡Hola! Quiero hacer una reserva en Urus Barber Studio.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="ubicacion" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium tracking-wider mb-4">
            VISÍTANOS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Encuéntranos <span className="text-amber-500">Fácil</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos ubicados en una zona privilegiada con fácil acceso. ¡Te esperamos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-neutral-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1769722746936!6m8!1m7!1sjxdt47NfEhWFSya8A2y2Og!2m2!1d1.515728134577144!2d-77.04487964153793!3f334.89989609479284!4f-11.14610633047812!5f0.7820865974627469"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Ubicación</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Cl. 2ª #1E-45</p>
                    <p className="text-gray-400 text-sm">San Bernardo, Nariño</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <a href="tel:+573238647250" className="text-white hover:text-amber-500 transition-colors">
                    +57 323 8647250
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Horario</h3>
              </div>
              
              <div className="space-y-2">
                {schedules.map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between">
                    <span className={`text-sm ${schedule.available ? 'text-white' : 'text-gray-500'}`}>
                      {schedule.day}
                    </span>
                    <span className={`text-sm font-medium ${schedule.available ? 'text-amber-500' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Reservar Cita
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: MessageCircle, title: 'WhatsApp', desc: 'Responemos en minutos', action: 'Escríbenos' },
            { icon: Phone, title: 'Teléfono', desc: 'Atención personalizada', action: 'Llamar ahora' },
            { icon: Mail, title: 'Email', desc: 'Para consultas formales', action: 'Enviar email' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center hover:border-amber-500/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-amber-500" />
              </div>
              <h4 className="font-bold text-white mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
              <button className="text-amber-500 text-sm font-medium hover:text-amber-400 transition-colors">
                {item.action} →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
