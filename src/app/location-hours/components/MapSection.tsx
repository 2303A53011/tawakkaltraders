import React from 'react';

interface MapSectionProps {
  latitude: string;
  longitude: string;
  placeName: string;
}

const MapSection = ({ latitude, longitude, placeName }: MapSectionProps) => {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Find Us on the Map
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Located in the heart of the neighborhood, easily accessible from all major landmarks
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-organic overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={placeName}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                className="border-0"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-organic text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-lg text-primary mb-2">Easy Access</h3>
              <p className="font-body text-sm text-text-secondary">
                Well-connected by public transport and main roads
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-organic text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-lg text-primary mb-2">Ample Parking</h3>
              <p className="font-body text-sm text-text-secondary">
                Street parking available nearby for your convenience
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-organic text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-body font-semibold text-lg text-primary mb-2">Prime Location</h3>
              <p className="font-body text-sm text-text-secondary">
                Near major landmarks and shopping areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;