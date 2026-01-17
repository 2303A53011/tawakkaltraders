import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Landmark {
  name: string;
  distance: string;
  direction: string;
  image: string;
  alt: string;
  type: string;
}

interface LandmarksSectionProps {
  landmarks: Landmark[];
}

const LandmarksSection = ({ landmarks }: LandmarksSectionProps) => {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Nearby Landmarks
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Find us easily using these well-known neighborhood landmarks as reference points
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-organic overflow-hidden hover:shadow-organic-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <AppImage
                    src={landmark.image}
                    alt={landmark.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-body text-xs font-semibold text-primary">
                      {landmark.distance}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-body font-semibold text-lg text-primary flex-1">
                      {landmark.name}
                    </h3>
                    <Icon name="MapPinIcon" size={20} variant="solid" className="text-secondary flex-shrink-0 ml-2" />
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-accent" />
                    <span className="font-body text-sm text-text-secondary">
                      {landmark.direction}
                    </span>
                  </div>

                  <div className="inline-flex items-center space-x-2 bg-surface px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-body text-xs font-medium text-primary">
                      {landmark.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-card px-6 py-4 rounded-xl shadow-organic">
              <Icon name="LightBulbIcon" size={24} variant="solid" className="text-accent" />
              <p className="font-body text-sm text-text-secondary">
                <span className="font-semibold text-primary">Pro Tip:</span> Ask locals for &quot;Tawwakal Traders&quot; near any of these landmarks - we&apos;re well-known in the area!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandmarksSection;