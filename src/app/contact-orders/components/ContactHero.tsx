import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary via-brand-dark-green to-secondary py-16 lg:py-24 overflow-hidden ${className}`}>
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border-2 border-accent/30">
            <Icon name="ChatBubbleLeftRightIcon" size={40} variant="solid" className="text-accent" />
          </div>

          {/* Heading */}
          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get in Touch with Us
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're craving our signature paan, planning a special event, or have questions about our fresh ingredients, we're here to serve you with warmth and tradition.
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Icon name="ClockIcon" size={32} variant="outline" className="text-accent mx-auto mb-3" />
              <p className="font-cta text-white font-semibold text-lg">Open Daily</p>
              <p className="font-body text-white/80 text-sm mt-1">10 AM - 11 PM</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Icon name="PhoneIcon" size={32} variant="outline" className="text-accent mx-auto mb-3" />
              <p className="font-cta text-white font-semibold text-lg">Quick Response</p>
              <p className="font-body text-white/80 text-sm mt-1">Within 15 Minutes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Icon name="MapPinIcon" size={32} variant="outline" className="text-accent mx-auto mb-3" />
              <p className="font-cta text-white font-semibold text-lg">Local Service</p>
              <p className="font-body text-white/80 text-sm mt-1">Neighborhood Pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;