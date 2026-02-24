'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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

  const openWhatsApp = () => {
    const phone = '573238647250';
    const message = encodeURIComponent('¡Hola! Quiero hacer una reserva en Urus Barber Studio.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg border-b border-amber-500/20 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group" aria-label="Ir al inicio">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                <Scissors className="w-5 h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-amber-500 tracking-wide">
                  URUS
                </span>
                <span className="text-[10px] text-gray-500 -mt-1 tracking-widest uppercase">
                  Barber Studio
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-gray-300 hover:text-amber-500 transition-colors duration-300 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <button
                onClick={openWhatsApp}
                className="ml-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
              >
                Reservar Cita
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-3 pb-3 border-t border-amber-500/20"
              >
                <div className="flex flex-col gap-1 pt-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-300 hover:text-amber-500 transition-colors text-left py-2 px-2 rounded-lg hover:bg-white/5"
                    >
                      {link.label}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      openWhatsApp();
                      setMobileMenuOpen(false);
                    }}
                    className="mt-2 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold px-5 py-3 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300"
                  >
                    Reservar Cita
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <div className="h-16 md:h-18" />
    </>
  );
}
