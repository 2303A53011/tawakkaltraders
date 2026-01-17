import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface LocationSectionProps {
  className?: string;
}

const LocationSection = ({ className = '' }: LocationSectionProps) => {
  const shopDetails = {
    address: "Near MORE super Market,Ashok Nagar,Manuguru,Telangana - 507117",
    email: "tawakkaltraders@gmail.com",
    hours: {
      weekdays: "06:00 AM - 10:00 PM",
      weekends: "06:00 AM - 09:30 AM"
    },
    landmarks: [
      "Opposite Naveen Driving School",
      "Near MORE Supermarket",
      "Bside of MRF Tyres Shop"
    ]
  };

  const mapCoordinates = {
    lat: 17.93575,
    lng: 80.819917
  };

  return (
    <section className={`py-20 bg-[#FEFDF8] ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1B4332]/10 rounded-full px-6 py-2 mb-4">
            <Icon name="MapPinIcon" size={20} variant="solid" className="text-[#1B4332]" />
            <span className="font-body font-semibold text-[#1B4332]">Find Us</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[#1B4332] mb-4">
            Visit Our Shop
          </h2>
          <p className="font-body text-lg text-[#718096]">
            Located in the heart of the city, we're easy to find and always ready to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Tawakkal Traders Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapCoordinates.lat},${mapCoordinates.lng}&z=15&output=embed`}
                className="border-0"
              ></iframe>
            </div>
            
            {/* Landmarks */}
            <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MapIcon" size={20} variant="solid" className="text-[#D4A574]" />
                <span className="font-body font-semibold text-[#1B4332]">Nearby Landmarks</span>
              </div>
              <div className="space-y-2">
                {shopDetails.landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-[#38A169]" />
                    <span className="font-body text-sm text-[#718096]">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[#1B4332] to-[#2D5A3D] rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2">Our Address</h3>
                  <p className="font-body text-white/90 leading-relaxed">
                    {shopDetails.address}
                  </p>
                </div>
              </div>
              <Link
                href="/location-hours"
                className="inline-flex items-center space-x-2 text-[#D4A574] font-body font-semibold hover:text-white transition-colors duration-300"
              >
                <span>Get Directions</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </Link>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#D4A574]/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="EnvelopeIcon" size={24} variant="solid" className="text-[#1B4332]" />
                </div>
                <h4 className="font-headline text-lg font-bold text-[#1B4332] mb-2">Email Us</h4>
                <a
                  href={`mailto:${shopDetails.email}`}
                  className="font-body text-[#718096] hover:text-[#1B4332] transition-colors duration-300 break-all"
                >
                  {shopDetails.email}
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ClockIcon" size={24} variant="solid" className="text-[#D4A574]" />
                <h4 className="font-headline text-xl font-bold text-[#1B4332]">Opening Hours</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
                  <span className="font-body text-[#718096]">Monday - Friday</span>
                  <span className="font-body font-semibold text-[#1B4332]">{shopDetails.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-[#718096]">Saturday - Sunday</span>
                  <span className="font-body font-semibold text-[#1B4332]">{shopDetails.hours.weekends}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919502819518?text=Hello!%20I%20would%20like%20to%20order%20from%20Tawwakal%20Traders."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-[#FF6B35] text-white rounded-lg font-body font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contact-orders"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-[#1B4332] text-white rounded-lg font-body font-semibold hover:bg-[#2D5A3D] transition-all duration-300 shadow-lg"
              >
                <Icon name="ShoppingBagIcon" size={20} variant="outline" />
                <span>Order Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;