import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Barbers from '@/components/Barbers';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Barbers />
      <Gallery />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
