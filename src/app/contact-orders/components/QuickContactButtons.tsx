'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
  action: string;
  bgColor: string;
  hoverColor: string;
  description: string;
}

const QuickContactButtons = () => {
  const contactMethods: ContactMethod[] = [
    {
      id: 'whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      label: 'WhatsApp Order',
      value: '',
      action: 'https://wa.me/919502819518?text=Hello%20Tawwakal%20Traders!%20I%20would%20like%20to%20place%20an%20order.',
      bgColor: 'bg-brand-orange-cta',
      hoverColor: 'hover:bg-brand-orange-cta/90',
      description: 'Instant ordering & quick replies'
    },
    {
      id: 'email',
      icon: 'EnvelopeIcon',
      label: 'Email Us',
      value: 'tawakkaltraders@gmail.com',
      action: 'mailto:tawakkaltraders@gmail.com?subject=Order%20Inquiry',
      bgColor: 'bg-secondary',
      hoverColor: 'hover:bg-secondary/90',
      description: 'For detailed inquiries'
    }
  ];

  const handleContactClick = (action: string) => {
    window.open(action, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="font-body text-text-secondary text-lg">
              We're available through multiple channels for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handleContactClick(method.action)}
                className={`${method.bgColor} ${method.hoverColor} text-white rounded-xl p-8 shadow-organic hover:shadow-organic-lg transition-all duration-300 transform hover:scale-105 text-left group`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Icon name={method.icon as any} size={28} variant="solid" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-cta text-xl font-bold mb-2">{method.label}</h3>
                    <p className="font-body text-sm opacity-90 mb-3">{method.description}</p>
                    <p className="font-body text-sm font-semibold break-all">{method.value}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end text-sm font-semibold opacity-90 group-hover:opacity-100">
                  <span className="mr-2">Connect Now</span>
                  <Icon name="ArrowRightIcon" size={16} variant="solid" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactButtons;