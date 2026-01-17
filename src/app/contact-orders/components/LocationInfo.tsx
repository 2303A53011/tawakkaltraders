import React from 'react';
import Icon from '@/components/ui/AppIcon';

const LocationInfo = () => {
  const locationDetails = {
    address: 'Near MORE super Market,Ashok Nagar,Manuguru,Telangana - 507117',
    landmarks: [
      'Opposite Naveen Driving School',
      'Next to MRF tryes Showroom',
    ],
    hours: {
      weekdays: '6:00 AM - 10:00 PM',
      weekends: '6:00 AM - 9:30 PM'
    },
    coordinates: {
      lat: 17.93575,
      lng: 80.819917
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Visit Our Shop
            </h2>
            <p className="font-body text-text-secondary text-lg">
              Experience the authentic taste of tradition at our welcoming location
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-card rounded-2xl shadow-organic overflow-hidden h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Tawwakal Traders Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${locationDetails?.coordinates?.lat},${locationDetails?.coordinates?.lng}&z=15&output=embed`}
                className="border-0"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl shadow-organic p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-cta text-xl font-bold text-primary mb-2">Our Address</h3>
                    <p className="font-body text-foreground leading-relaxed">{locationDetails?.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-organic p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="MapIcon" size={24} variant="solid" className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-cta text-xl font-bold text-primary mb-3">Nearby Landmarks</h3>
                    <ul className="space-y-2">
                      {locationDetails?.landmarks?.map((landmark, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="ChevronRightIcon" size={16} variant="solid" className="text-secondary" />
                          <span className="font-body text-foreground">{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-organic p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Icon name="ClockIcon" size={24} variant="solid" className="text-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-cta text-xl font-bold text-primary mb-3">Opening Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-body text-foreground font-semibold">Monday - Friday:</span>
                        <span className="font-body text-text-secondary">{locationDetails?.hours?.weekdays}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-body text-foreground font-semibold">Saturday - Sunday:</span>
                        <span className="font-body text-text-secondary">{locationDetails?.hours?.weekends}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${locationDetails?.coordinates?.lat},${locationDetails?.coordinates?.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-brand-dark-green text-white font-cta font-bold py-4 rounded-lg shadow-organic hover:shadow-organic-lg transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="MapIcon" size={20} variant="solid" />
                  <span>Get Directions</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;