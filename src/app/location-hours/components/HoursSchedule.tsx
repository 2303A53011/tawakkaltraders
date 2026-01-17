import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface DaySchedule {
  day: string;
  hours: string;
  isToday: boolean;
  isOpen: boolean;
}

interface HoursScheduleProps {
  schedule: DaySchedule[];
}

const HoursSchedule = ({ schedule }: HoursScheduleProps) => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Opening Hours
            </h2>
            <p className="font-body text-lg text-text-secondary">
              We&apos;re here to serve you fresh paan and cool drinks throughout the week
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-organic overflow-hidden">
            <div className="divide-y divide-border">
              {schedule.map((day, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 transition-colors duration-300 ${
                    day.isToday ? 'bg-primary/5' : 'hover:bg-surface'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {day.isToday && (
                      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                        <Icon name="CalendarIcon" size={20} variant="solid" className="text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className={`font-body font-semibold text-lg ${
                        day.isToday ? 'text-primary' : 'text-foreground'
                      }`}>
                        {day.day}
                        {day.isToday && (
                          <span className="ml-2 text-sm font-normal text-primary">(Today)</span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`font-body font-medium ${
                      day.isOpen ? 'text-success' : 'text-error'
                    }`}>
                      {day.hours}
                    </span>
                    {day.isOpen && (
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-accent/10 border-l-4 border-accent rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-body font-semibold text-primary mb-2">Special Hours Notice</h4>
                <p className="font-body text-sm text-text-secondary mb-2">
                  During major festivals like Diwali, Eid, and Holi, we may have extended hours or special timings. Please call ahead or check our WhatsApp status for festival-specific hours.
                </p>
                <p className="font-body text-sm text-text-secondary">
                  We also accommodate bulk orders for cultural events and celebrations with advance notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSchedule;