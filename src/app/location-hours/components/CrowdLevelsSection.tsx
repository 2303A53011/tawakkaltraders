'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  time: string;
  level: 'low' | 'moderate' | 'high';
  label: string;
}

interface CrowdLevelsSectionProps {
  timeSlots: TimeSlot[];
}

const CrowdLevelsSection = ({ timeSlots }: CrowdLevelsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
    const now = new Date();
    setCurrentHour(now.getHours());
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-success';
      case 'moderate':
        return 'bg-warning';
      case 'high':
        return 'bg-error';
      default:
        return 'bg-muted';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-success';
      case 'moderate':
        return 'text-warning';
      case 'high':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-success/10';
      case 'moderate':
        return 'bg-warning/10';
      case 'high':
        return 'bg-error/10';
      default:
        return 'bg-muted';
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-12 lg:py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
                Crowd Levels
              </h2>
              <p className="font-body text-lg text-text-secondary">
                Loading crowd information...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Real-Time Crowd Levels
            </h2>
            <p className="font-body text-lg text-text-secondary">
              Plan your visit based on typical crowd patterns throughout the day
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-organic p-8">
            <div className="space-y-4">
              {timeSlots.map((slot, index) => {
                const slotHour = parseInt(slot.time.split(':')[0]);
                const isCurrentTime = isHydrated && currentHour === slotHour;

                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      isCurrentTime ? 'bg-primary/5 border-2 border-primary' : 'bg-surface'
                    }`}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-20">
                        <span className={`font-body font-semibold ${
                          isCurrentTime ? 'text-primary' : 'text-foreground'
                        }`}>
                          {slot.time}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`font-body text-sm font-medium ${getLevelText(slot.level)}`}>
                            {slot.label}
                          </span>
                          {isCurrentTime && (
                            <span className="inline-flex items-center space-x-1 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                              <Icon name="ClockIcon" size={12} variant="solid" />
                              <span>Now</span>
                            </span>
                          )}
                        </div>

                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full ${getLevelColor(slot.level)} transition-all duration-500`}
                            style={{
                              width: slot.level === 'low' ? '33%' : slot.level === 'moderate' ? '66%' : '100%'
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`ml-4 w-10 h-10 rounded-full flex items-center justify-center ${getLevelBg(slot.level)}`}>
                      <Icon
                        name="UserGroupIcon"
                        size={20}
                        variant="solid"
                        className={getLevelText(slot.level)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full" />
                  <span className="font-body text-sm text-text-secondary">Low - Best time to visit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full" />
                  <span className="font-body text-sm text-text-secondary">Moderate - Some wait time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full" />
                  <span className="font-body text-sm text-text-secondary">High - Peak hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-accent/10 border-l-4 border-accent rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-body font-semibold text-primary mb-2">Planning Your Visit</h4>
                <p className="font-body text-sm text-text-secondary">
                  These crowd levels are typical patterns. Actual crowds may vary during festivals, special events, or weather conditions. For bulk orders or special occasions, we recommend calling ahead to ensure the best service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdLevelsSection;