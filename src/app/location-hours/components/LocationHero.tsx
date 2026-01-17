import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationHeroProps {
  isOpen: boolean;
  nextOpenTime?: string;
}

const LocationHero = ({ isOpen, nextOpenTime }: LocationHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-dark-green to-secondary py-16 lg:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-success animate-pulse' : 'bg-error'}`} />
            <span className="text-white font-body font-semibold">
              {isOpen ? 'Open Now' : `Opens ${nextOpenTime}`}
            </span>
          </div>

          <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6">
            Visit Our Heritage Shop
          </h1>
          
          <p className="font-body text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience authentic paan-making traditions in the heart of the neighborhood. Easy to find, convenient to visit, and always welcoming.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919502819518?text=Hello%2C%20I%20would%20like%20to%20know%20your%20location"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-orange-cta text-white px-8 py-4 rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300 shadow-organic hover:shadow-organic-lg"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;