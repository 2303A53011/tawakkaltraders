'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from "next/image";
interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'Paan Menu', href: '/paan-menu' },
    { label: 'Fresh Ingredients', href: '/fresh-ingredients' },
    { label: 'Gallery', href: '/gallery-experience' }
  ];

  const supportLinks = [
    { label: 'Location & Hours', href: '/location-hours' },
    { label: 'Contact Us', href: '/contact-orders' },
    { label: 'Bulk Orders', href: '/contact-orders' },

  ];

  return (
    <footer className={`bg-gradient-to-br from-[#1B4332] to-[#2D5A3D] text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/images/logo.png"
                  alt="Tawakkal Traders Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <div className="font-headline text-xl font-bold">Tawakkal Traders</div>
                <div className="font-accent text-xs italic text-[#D4A574]">Heritage Paan Excellence</div>
              </div>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              Serving authentic paan with modern hygiene standards since three generations. Where tradition meets quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 hover:text-[#D4A574] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="ChevronRightIcon" size={16} variant="outline" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 hover:text-[#D4A574] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="ChevronRightIcon" size={16} variant="outline" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPinIcon" size={20} variant="solid" className="text-[#D4A574] flex-shrink-0 mt-1" />
                <p className="font-body text-sm text-white/80">
                  Near MORE super Market,Ashok Nagar,Manuguru,Telangana - 507117
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="EnvelopeIcon" size={20} variant="solid" className="text-[#D4A574]" />
                <a href="mailto:tawakkaltraders@gmail.com" className="font-body text-sm text-white/80 hover:text-[#D4A574] transition-colors duration-300">
                  tawakkaltraders@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm text-white/60 text-center md:text-left">
              {isHydrated ? `© ${currentYear}` : '© 2026'} Tawakkal Traders. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;