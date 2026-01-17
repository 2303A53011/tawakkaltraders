import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface DeliveryArea {
  area: string;
  distance: string;
  estimatedTime: string;
  available: boolean;
}

interface DeliveryRadiusSectionProps {
  deliveryAreas: DeliveryArea[];
}

const DeliveryRadiusSection = ({ deliveryAreas }: DeliveryRadiusSectionProps) => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Delivery Coverage
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              We deliver fresh paan to your doorstep within our service radius
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl shadow-organic p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="TruckIcon" size={24} variant="solid" className="text-primary" />
                </div>
                <h3 className="font-body font-semibold text-xl text-primary">
                  Delivery Areas
                </h3>
              </div>

              <div className="space-y-3">
                {deliveryAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      area.available ? 'bg-surface' : 'bg-muted/50'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`font-body font-medium ${
                          area.available ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {area.area}
                        </span>
                        {area.available && (
                          <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success" />
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <span className="flex items-center space-x-1">
                          <Icon name="MapPinIcon" size={14} variant="outline" />
                          <span>{area.distance}</span>
                        </span>
                        {area.available && (
                          <span className="flex items-center space-x-1">
                            <Icon name="ClockIcon" size={14} variant="outline" />
                            <span>{area.estimatedTime}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-brand-dark-green rounded-2xl shadow-organic p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-white" />
                </div>
                <h3 className="font-body font-semibold text-xl">
                  Delivery Information
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CurrencyRupeeIcon" size={20} variant="solid" className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold mb-1">Minimum Order</h4>
                    <p className="text-sm text-white/80">
                      ₹200 minimum order value for delivery service
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="ClockIcon" size={20} variant="solid" className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold mb-1">Delivery Hours</h4>
                    <p className="text-sm text-white/80">
                      Same as shop hours: 10:00 AM - 11:00 PM daily
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold mb-1">Freshness Guarantee</h4>
                    <p className="text-sm text-white/80">
                      All paan prepared fresh upon order for maximum quality
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold mb-1">Order via WhatsApp</h4>
                    <p className="text-sm text-white/80 mb-3">
                      Quick and easy ordering through our WhatsApp number
                    </p>
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20place%20a%20delivery%20order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-brand-orange-cta text-white px-4 py-2 rounded-lg font-body font-semibold hover:bg-opacity-90 transition-all duration-300"
                    >
                      <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
                      <span>Order Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warning/10 border-l-4 border-warning rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Icon name="ExclamationTriangleIcon" size={24} variant="solid" className="text-warning flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-body font-semibold text-primary mb-2">Outside Delivery Zone?</h4>
                <p className="font-body text-sm text-text-secondary">
                  If your area is not listed, please contact us via WhatsApp or phone. We may be able to arrange special delivery for bulk orders or discuss pickup options from our shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryRadiusSection;