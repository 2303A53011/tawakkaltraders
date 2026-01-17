import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PaanVariety {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  ingredients: string[];
  popular: boolean;
  category: string;
}

interface FeaturedPaanSectionProps {
  className?: string;
}

const FeaturedPaanSection = ({ className = '' }: FeaturedPaanSectionProps) => {
  const featuredPaans: PaanVariety[] = [
  {
    id: 1,
    name: "Classic Meetha Paan",
    description: "Traditional sweet paan with gulkand, coconut, and premium mukhwas. A timeless favorite that melts in your mouth.",
    price: 30,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed753ccc-1768329572553.png",
    alt: "Traditional meetha paan wrapped in fresh betel leaf with visible gulkand rose preserve and coconut shavings",
    ingredients: ["Fresh Betel Leaf", "Gulkand", "Coconut", "Mukhwas", "Fennel Seeds"],
    popular: true,
    category: "Sweet"
  },
{
  id: 2,
  name: "Sada Paan",
  description: "Classic traditional paan made with fresh betel leaf, chuna, and kattha. Strong, authentic, and timeless.",
  price: 10,
  image: "/assets/images/sada_paan.webp",
  alt: "Traditional sada paan with betel leaf, lime paste, and catechu",
  ingredients: ["Betel Leaf", "Chuna", "Kattha"],
  popular: false,
  category: "Traditional"
},
{
  id: 3,
  name: "Mint (Pudina) Paan",
  description: "Refreshing paan with fresh mint, saunf, and mild sweet notes. Light, cooling, and digestive.",
  price: 20,
  image: "/assets/images/mint.webp",
  alt: "Mint paan with fresh pudina leaves and fennel seeds on betel leaf",
  ingredients: ["Betel Leaf", "Mint", "Saunf", "Gulkand"],
  popular: true,
  category: "Flavored"
},
{
  id: 4,
  name: "Zarda Paan",
  description: "Strong and bold paan prepared with zarda, supari, and traditional masala for experienced paan lovers.",
  price: 25,
  image: "/assets/images/zarda.jpg",
  alt: "Zarda paan with tobacco mixture, supari, and spices on betel leaf",
  ingredients: ["Betel Leaf", "Zarda", "Supari", "Kattha", "Masala"],
  popular: false,
  category: "Strong"
},];


  return (
    <section className={`py-20 bg-[#FEFDF8] ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4A574]/10 rounded-full px-6 py-2 mb-4">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-[#D4A574]" />
            <span className="font-body font-semibold text-[#1B4332]">Our Specialties</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[#1B4332] mb-4">
            Featured Paan Varieties
          </h2>
          <p className="font-body text-lg text-[#718096]">
            Handcrafted with love, prepared with the finest ingredients, and served with pride. Each paan is a masterpiece of flavor and tradition.
          </p>
        </div>

        {/* Paan Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredPaans.map((paan) =>
          <div
            key={paan.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={paan.image}
                alt={paan.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Popular Badge */}
                {paan.popular &&
              <div className="absolute top-4 right-4 bg-[#FF6B35] text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
                    <Icon name="FireIcon" size={16} variant="solid" />
                    <span className="font-body text-xs font-bold">Popular</span>
                  </div>
              }

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B4332] rounded-full px-4 py-2">
                  <span className="font-body text-xs font-semibold">{paan.category}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-[#D4A574] text-white rounded-lg px-4 py-2">
                  <span className="font-headline text-xl font-bold">₹{paan.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-headline text-2xl font-bold text-[#1B4332]">
                  {paan.name}
                </h3>
                <p className="font-body text-sm text-[#718096] leading-relaxed">
                  {paan.description}
                </p>

                {/* Ingredients */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="SparklesIcon" size={16} variant="outline" className="text-[#D4A574]" />
                    <span className="font-body text-xs font-semibold text-[#1B4332]">Key Ingredients:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paan.ingredients.slice(0, 3).map((ingredient, index) =>
                  <span
                    key={index}
                    className="inline-block bg-[#F7F5F0] text-[#1B4332] rounded-full px-3 py-1 text-xs font-body">

                        {ingredient}
                      </span>
                  )}
                    {paan.ingredients.length > 3 &&
                  <span className="inline-block bg-[#D4A574]/20 text-[#1B4332] rounded-full px-3 py-1 text-xs font-body">
                        +{paan.ingredients.length - 3} more
                      </span>
                  }
                  </div>
                </div>

                {/* Order Button */}
                <button className="w-full bg-[#1B4332] text-white rounded-lg py-3 font-body font-semibold hover:bg-[#2D5A3D] transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Icon name="ShoppingBagIcon" size={20} variant="outline" />
                  <span>Quick Order</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/paan-menu"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#1B4332] text-white rounded-lg font-body font-semibold text-lg hover:bg-[#2D5A3D] transition-all duration-300 shadow-lg hover:shadow-xl">

            <span>Explore Full Menu</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedPaanSection;