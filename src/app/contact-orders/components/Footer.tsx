'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from "next/image";

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'Paan Menu', href: '/paan-menu' },
    { label: 'Fresh Ingredients', href: '/fresh-ingredients' },
  ];

  const contactInfo = [
    {
      icon: 'EnvelopeIcon',
      label: 'tawakkaltraders@gmail.com',
      href: 'mailto:tawakkaltraders@gmail.com',
    },
    { icon: 'MapPinIcon', label: 'Shop No. 12, Main Market Road, Mumbai', href: '/location-hours' },
  ];

  const socialLinks = [
    { icon: 'ChatBubbleLeftRightIcon', label: 'WhatsApp', href: 'https://wa.me/919502819518' },
  ];

  if (!isHydrated) {
    return (
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-body text-sm opacity-80">Loading...</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-to-br from-primary via-brand-dark-green to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
                <h3 className="font-headline text-xl font-bold">Tawwakal Traders</h3>
                <p className="font-accent text-xs italic opacity-80">Heritage Paan Excellence</p>
              </div>
            </div>
            <p className="font-body text-sm opacity-90 leading-relaxed">
              Serving authentic paan with modern hygiene standards since generations. Where
              tradition meets quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cta text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300 flex items-center space-x-2"
                  >
                    <Icon name="ChevronRightIcon" size={14} variant="solid" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cta text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="font-body text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300 flex items-start space-x-3"
                  >
                    <Icon
                      name={info.icon as any}
                      size={18}
                      variant="outline"
                      className="flex-shrink-0 mt-0.5"
                    />
                    <span className="break-all">{info.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-cta text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={20} variant="solid" />
                </a>
              ))}
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ClockIcon" size={18} variant="outline" />
                <p className="font-cta text-sm font-semibold">Opening Hours</p>
              </div>
              <p className="font-body text-xs opacity-90">Mon-Fri: 06 AM - 10 PM</p>
              <p className="font-body text-xs opacity-90">Sat-Sun: 06 AM - 09:30 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm opacity-80 text-center md:text-left">
              &copy; {currentYear} Tawwakal Traders. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
