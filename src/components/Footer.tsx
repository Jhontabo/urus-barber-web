'use client';

import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
];

const services = [
  { href: '#servicios', label: 'Corte de Cabello' },
  { href: '#servicios', label: 'Arreglo de Barba' },
  { href: '#servicios', label: 'Afeitado Tradicional' },
  { href: '#servicios', label: 'Combo Premium' },
];

const schedule = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 8:00 PM' },
  { day: 'Sábado', hours: '9:00 AM - 8:00 PM' },
  { day: 'Domingo', hours: '10:00 AM - 6:00 PM' },
];

export default function Footer() {
  const openWhatsApp = (service?: string) => {
    const phone = '573238647250';
    const message = encodeURIComponent(
      service
        ? `¡Hola! Quiero información sobre: ${service}`
        : '¡Hola! Quiero hacer una reserva en Urus Barber Studio.'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 via-amber-200 to-amber-500 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-amber-500 block">
                  URUS
                </span>
                <span className="text-gray-500 text-xs tracking-widest uppercase">
                  Barber Studio
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              El arte de la caballerosidad. Más de 5 años ofreciendo servicios de barbería de lujo con los mejores profesionales de la ciudad.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button
                onClick={() => openWhatsApp()}
                className="w-10 h-10 rounded-full bg-green-600 border border-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Cl. 2ª #1E-45, San Bernardo<br />
                  Nariño, Colombia
                </span>
              </li>
              <li>
                <button
                  onClick={() => openWhatsApp()}
                  className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  +57 323 8647250
                </button>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm space-y-1">
                  {schedule.map((s) => (
                    <p key={s.day}>{s.day}: {s.hours}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 mb-4">¿Listo para verte increíble?</p>
          <button
            onClick={() => openWhatsApp()}
            className="bg-gradient-to-r from-amber-500 via-amber-200 to-amber-500 text-black font-bold px-8 py-3 rounded-full hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Reservar Ahora
          </button>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Urus Barber Studio. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <button className="text-gray-500 hover:text-amber-500 transition-colors">
                Privacidad
              </button>
              <span className="text-gray-700">|</span>
              <button className="text-gray-500 hover:text-amber-500 transition-colors">
                Términos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
