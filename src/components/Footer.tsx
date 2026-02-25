'use client';

import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#barberos', label: 'Barberos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
];

const services = [
  { href: '#servicios', label: 'Corte' },
  { href: '#servicios', label: 'Barba' },
  { href: '#servicios', label: 'Afeitado' },
  { href: '#servicios', label: 'Combo' },
];

export default function Footer() {
  const openWhatsApp = () => {
    const phone = '573238647250';
    const message = encodeURIComponent('¡Hola! Quiero hacer una reserva en Urus Barber Studio.');
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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-12 pb-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
              <svg 
                viewBox="0 0 64 64" 
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="32" cy="32" r="28" />
                <path d="M20 24c4-8 16-8 20 0" />
                <circle cx="24" cy="20" r="3" fill="currentColor" />
                <circle cx="40" cy="20" r="3" fill="currentColor" />
                <path d="M28 28l8 4" />
                <path d="M18 32c2 4 6 6 12 6 8 0 14-4 16-12" />
                <path d="M18 44c0-8 8-16 24-16" />
              </svg>
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white block">URUS</span>
              <span className="text-gray-500 text-[10px] tracking-widest uppercase">Barber Studio</span>
            </div>
          </div>
          <button
            onClick={openWhatsApp}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Reservar Ahora
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="font-display text-sm font-bold text-white mb-3">Enlaces</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollToSection(link.href)} className="text-gray-400 hover:text-red-500 text-xs transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold text-white mb-3">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <button onClick={() => scrollToSection(service.href)} className="text-gray-400 hover:text-red-500 text-xs transition-colors">
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-display text-sm font-bold text-white mb-3">Contacto</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-red-600" />
                Cl. 2ª #1E-45, San Bernardo
              </li>
              <li>
                <button onClick={openWhatsApp} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  <Phone className="w-3 h-3 text-red-600" />
                  +57 323 8647250
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-red-600" />
                Lun-Vie: 9AM-8PM
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
            <Facebook className="w-4 h-4" />
          </a>
          <button onClick={openWhatsApp} className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300">
            <Phone className="w-4 h-4" />
          </button>
        </div>

        <div className="border-t border-zinc-800 pt-4">
          <p className="text-gray-500 text-[10px] text-center">
            © {new Date().getFullYear()} Urus Barber Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
