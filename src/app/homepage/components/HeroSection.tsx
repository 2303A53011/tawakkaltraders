'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);

      // Shop hours: 10:00 AM to 11:00 PM
      setIsOpen(hours >= 6 && hours < 21);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const whatsappMessage = encodeURIComponent('Hello! I would like to order fresh paan from Tawwakal Traders.');
  const whatsappLink = `https://wa.me/919502819518?text=${whatsappMessage}`;

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#2D5A3D] to-[#1B4332]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.5 0 0 13.5 0 30s13.5 30 30 30 30-13.5 30-30S46.5 0 30 0zm0 55C16.2 55 5 43.8 5 30S16.2 5 30 5s25 11.2 25 25-11.2 25-25 25z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Live Status Badge */}
            {isHydrated &&
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-[#D4A574]/30">
                <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-[#38A169]' : 'bg-[#E53E3E]'} animate-pulse`}></div>
                <span className="font-body font-medium">
                  {isOpen ? `Open Now • ${currentTime}` : `Closed • Opens at 10:00 AM`}
                </span>
              </div>
            }

            {/* Main Headline */}
            <h1 className="font-headline text-5xl lg:text-7xl font-bold leading-tight">
              Fresh Paan,
              <span className="block text-[#D4A574]">Timeless Tradition</span>
            </h1>

            <p className="font-body text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              Experience the authentic taste of premium paan crafted with the finest ingredients and modern hygiene standards. Where heritage meets quality in every bite.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-[#38A169]" />
                <span className="font-body text-sm">100% Fresh Ingredients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-[#38A169]" />
                <span className="font-body text-sm">Hygiene Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="SparklesIcon" size={24} variant="solid" className="text-[#D4A574]" />
                <span className="font-body text-sm">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">

                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                <span>Order on WhatsApp</span>
              </a>
              <Link
                href="/paan-menu"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-body font-semibold text-lg border-2 border-[#D4A574] hover:bg-white/20 transition-all duration-300">

                <Icon name="DocumentTextIcon" size={24} variant="outline" />
                <span>View Menu</span>
              </Link>
            </div>

            {/* Social Proof */}
            {isHydrated &&
            <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
                <div>
                  <div className="font-headline text-3xl font-bold text-[#D4A574]">500+</div>
                  <div className="font-body text-sm text-white/80">Happy Customers</div>
                </div>
                <div>
                  <div className="font-headline text-3xl font-bold text-[#D4A574]">15+</div>
                  <div className="font-body text-sm text-white/80">Paan Varieties</div>
                </div>
                <div>
                  <div className="font-headline text-3xl font-bold text-[#D4A574]">4.8★</div>
                  <div className="font-body text-sm text-white/80">Customer Rating</div>
                </div>
              </div>
            }
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 to-transparent z-10"></div>
              <AppImage
                src="/assets/images/image_hero.jpeg"
                alt="Fresh betel leaves arranged artistically with traditional paan ingredients including gulkand, supari, and fennel seeds on marble counter"
                className="w-full h-[600px] object-cover" />

              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-[#D4A574]/30">
                  <div className="flex items-center space-x-3">
                    <Icon name="SparklesIcon" size={20} variant="solid" className="text-[#D4A574]" />
                    <span className="font-body font-semibold">Today's Special: Sweet Paan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-[#8B2635] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl border-4 border-white">
              <span className="font-headline text-2xl font-bold">₹30</span>
              <span className="font-body text-xs">Starting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-white/60" />
      </div>
    </section>);

};


export default HeroSection;
