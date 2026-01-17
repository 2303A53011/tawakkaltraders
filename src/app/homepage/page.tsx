import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FeaturedPaanSection from './components/FeaturedPaanSection';
import WhyChooseSection from './components/WhyChooseSection';
import CoolDrinksSection from './components/CoolDrinksSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - Tawwakal Traders',
  description: 'Experience authentic paan with modern hygiene standards at Tawwakal Traders. Premium ingredients, traditional recipes, and exceptional service in the heart of Bangalore.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#FEFDF8]">
      <Header />
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <FeaturedPaanSection />
        <WhyChooseSection />
        <CoolDrinksSection />
        <TestimonialsSection />
        <LocationSection />
        <Footer />
      </div>
    </main>
  );
}