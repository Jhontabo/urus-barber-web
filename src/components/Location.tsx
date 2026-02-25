'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail, Calendar } from 'lucide-react';

const schedules = [
  { day: 'Lun - Vie', hours: '9AM - 8PM', available: true },
  { day: 'Sábado', hours: '9AM - 8PM', available: true },
  { day: 'Domingo', hours: '10AM - 6PM', available: false },
];

export default function Location() {
  const openWhatsApp = () => {
    const phone = '573238647250';
    const message = encodeURIComponent('¡Hola! Quiero hacer una reserva en Urus Barber Studio.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="ubicacion" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs md:text-sm font-medium tracking-wider mb-3 md:mb-4">
            VISÍTANOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Encuéntranos <span className="text-red-600">Fácil</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            ¡Te esperamos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-xl md:rounded-2xl overflow-hidden border border-zinc-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d628.1370029412318!2d-77.0461823052438!3d1.5163383919045565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1771962397097!5m2!1ses!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-48 md:h-72 lg:h-[450px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-3 md:space-y-4"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-white">Ubicación</h3>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Cl. 2ª #1E-45</p>
                    <p className="text-gray-400 text-xs md:text-sm">San Bernardo, Pasto</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                  </div>
                  <a href="tel:+573238647250" className="text-white hover:text-red-500 transition-colors text-sm md:text-base">
                    +57 323 8647250
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-white">Horario</h3>
              </div>
              
              <div className="space-y-1 md:space-y-2">
                {schedules.map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between">
                    <span className={`text-xs md:text-sm ${schedule.available ? 'text-white' : 'text-gray-500'}`}>
                      {schedule.day}
                    </span>
                    <span className={`text-xs md:text-sm font-medium ${schedule.available ? 'text-red-500' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded-xl hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Reservar Cita
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 grid grid-cols-3 gap-2 md:gap-6"
        >
          {[
            { icon: MessageCircle, title: 'WhatsApp', action: 'Escríbenos' },
            { icon: Phone, title: 'Teléfono', action: 'Llamar' },
            { icon: Mail, title: 'Email', action: 'Enviar' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 md:p-6 text-center hover:border-red-600/30 transition-colors"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 rounded-full bg-red-600/20 flex items-center justify-center">
                <item.icon className="w-4 h-4 md:w-6 md:h-6 text-red-600" />
              </div>
              <h4 className="font-bold text-white text-xs md:text-base mb-1">{item.title}</h4>
              <button className="text-red-500 text-[10px] md:text-sm font-medium hover:text-red-400 transition-colors">
                {item.action} →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
