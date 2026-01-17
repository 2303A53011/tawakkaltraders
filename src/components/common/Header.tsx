'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Paan Menu', href: '/paan-menu', icon: 'DocumentTextIcon' },
    { label: 'Fresh Ingredients', href: '/fresh-ingredients', icon: 'SparklesIcon' },
    { label: 'Location & Hours', href: '/location-hours', icon: 'MapPinIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-organic ${className}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <Link href="/homepage" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/logo.png"
                alt="Tawakkal Traders Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-semibold text-xl lg:text-2xl text-primary leading-tight">
                Tawakkal Traders
              </span>
              <span className="font-accent text-xs text-secondary italic">
                Heritage Paan Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground hover:bg-surface hover:text-primary transition-all duration-300 font-body font-medium"
              >
                <Icon name={item.icon as any} size={20} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp CTA - Desktop */}
            <Link
              href="/contact-orders"
              className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-brand-orange-cta text-white rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300 shadow-organic hover:shadow-organic-lg"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              <span>Order Now</span>
            </Link>

            {/* Mobile WhatsApp Icon */}
            <Link
              href="/contact-orders"
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-brand-orange-cta text-white rounded-full shadow-organic"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground hover:bg-surface rounded-lg transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                variant="outline"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-card border-t border-border animate-slide-in-right">
            <div className="py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-surface hover:text-primary transition-all duration-300 font-body font-medium"
                >
                  <Icon name={item.icon as any} size={20} variant="outline" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;