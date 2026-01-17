import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Drink {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  category: string;
  temperature: string;
}

interface CoolDrinksSectionProps {
  className?: string;
}

const CoolDrinksSection = ({ className = '' }: CoolDrinksSectionProps) => {
  const drinks: Drink[] = [
  {
    id: 1,
    name: "Coca-Cola",
    description: "Classic cola drink. Best served ice-cold.",
    price: 30,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
    alt: "Chilled Coca-Cola bottle",
    category: "Soft Drink",
    temperature: "Cold"
  },
  {
    id: 2,
    name: "Thums Up",
    description: "Strong cola taste with high fizz.",
    price: 30,
    image: "/assets/images/Thums-Up.jpg",
    alt: "Thums Up bottle chilled",
    category: "Soft Drink",
    temperature: "Cold"
  },
  {
    id: 3,
    name: "Sprite",
    description: "Clear lemon-lime drink. Light and refreshing.",
    price: 30,
    image: "/assets/images/sprite.png",
    alt: "Sprite bottle with ice",
    category: "Soft Drink",
    temperature: "Cold"
  },
  {
    id: 4,
    name: "Fanta Orange",
    description: "Sweet and fizzy orange-flavoured drink.",
    price: 30,
    image: "/assets/images/fanta.webp",
    alt: "Fanta orange bottle chilled",
    category: "Soft Drink",
    temperature: "Cold"
  },
];



  return (
    <section className={`py-20 bg-[#F7F5F0] ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1B4332]/10 rounded-full px-6 py-2 mb-4">
            <Icon name="BeakerIcon" size={20} variant="solid" className="text-[#1B4332]" />
            <span className="font-body font-semibold text-[#1B4332]">Refreshments</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[#1B4332] mb-4">
            Cool Drinks Collection
          </h2>
          <p className="font-body text-lg text-[#718096]">
            Complement your paan with our selection of refreshing beverages. Perfect pairings for every taste.
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {drinks.map((drink) =>
          <div
            key={drink.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={drink.image}
                alt={drink.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Temperature Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Icon name="FireIcon" size={14} variant="solid" className="text-[#38A169]" />
                  <span className="font-body text-xs font-semibold text-[#1B4332]">{drink.temperature}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-[#1B4332] text-white rounded-lg px-4 py-2">
                  <span className="font-headline text-lg font-bold">₹{drink.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-xl font-bold text-[#1B4332]">
                    {drink.name}
                  </h3>
                  <span className="inline-block bg-[#D4A574]/20 text-[#1B4332] rounded-full px-3 py-1 text-xs font-body font-semibold">
                    {drink.category}
                  </span>
                </div>
                <p className="font-body text-sm text-[#718096] leading-relaxed">
                  {drink.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pairing Suggestion */}
        <div className="bg-gradient-to-r from-[#1B4332] to-[#2D5A3D] rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="LightBulbIcon" size={24} variant="solid" className="text-[#D4A574]" />
                <span className="font-body font-semibold text-[#D4A574]">Pro Tip</span>
              </div>
              <h3 className="font-headline text-3xl font-bold">
                Perfect Paan & Drink Pairings
              </h3>
              <p className="font-body text-white/80 leading-relaxed">
                Enhance your paan experience with the right beverage. Sweet paans pair beautifully with masala chaas, while spicy varieties complement fresh lime soda perfectly.
              </p>
              <Link
                href="/paan-menu"
                className="inline-flex items-center space-x-2 text-[#D4A574] font-body font-semibold hover:text-white transition-colors duration-300">

                <span>Explore Pairing Guide</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-[#38A169] mb-2" />
                <div className="font-body text-sm font-semibold mb-1">Sweet Paan</div>
                <div className="font-body text-xs text-white/70">+ Masala Chaas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-[#38A169] mb-2" />
                <div className="font-body text-sm font-semibold mb-1">Spicy Paan</div>
                <div className="font-body text-xs text-white/70">+ Lime Soda</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-[#38A169] mb-2" />
                <div className="font-body text-sm font-semibold mb-1">Chocolate Paan</div>
                <div className="font-body text-xs text-white/70">+ Mango Lassi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-[#38A169] mb-2" />
                <div className="font-body text-sm font-semibold mb-1">Kesar Paan</div>
                <div className="font-body text-xs text-white/70">+ Rose Sharbat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CoolDrinksSection;