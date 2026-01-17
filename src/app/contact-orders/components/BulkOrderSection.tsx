'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Package {
    id: string;
    name: string;
    icon: string;
    minQuantity: number;
    features: string[];
    idealFor: string;
    priceRange: string;
}

const BulkOrderSection = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<string>('');

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const packages: Package[] = [
        {
            id: 'wedding',
            name: 'Wedding Package',
            icon: 'HeartIcon',
            minQuantity: 100,
            features: [
                'Assorted premium paan varieties',
                'Elegant presentation boxes',
                'Dedicated service staff',
                'Custom flavor combinations',
                'Complimentary tasting session'
            ],
            idealFor: 'Weddings, Receptions, Sangeet',
            priceRange: '₹50 - ₹150 per piece'
        },
        {
            id: 'corporate',
            name: 'Corporate Package',
            icon: 'BuildingOfficeIcon',
            minQuantity: 50,
            features: [
                'Professional packaging',
                'Timely delivery guarantee',
                'Customizable menu options',
                'Bulk order discounts',
                'Monthly subscription available'
            ],
            idealFor: 'Office Events, Conferences, Client Meetings',
            priceRange: '₹40 - ₹100 per piece'
        },
        {
            id: 'festival',
            name: 'Festival Package',
            icon: 'SparklesIcon',
            minQuantity: 75,
            features: [
                'Traditional festive varieties',
                'Decorative gift packaging',
                'Seasonal special flavors',
                'Flexible delivery slots',
                'Advance booking discounts'
            ],
            idealFor: 'Diwali, Eid, Holi, Family Gatherings',
            priceRange: '₹45 - ₹120 per piece'
        },
        {
            id: 'party',
            name: 'Party Package',
            icon: 'CakeIcon',
            minQuantity: 30,
            features: [
                'Mixed variety platters',
                'On-site preparation option',
                'Beverage pairing suggestions',
                'Party-friendly packaging',
                'Last-minute order support'
            ],
            idealFor: 'Birthday Parties, Anniversaries, Social Events',
            priceRange: '₹35 - ₹90 per piece'
        }
    ];

const handleWhatsAppInquiry = (packageName: string) => {
    const message = `Hello Tawwakal Traders! I'm interested in the ${packageName} for bulk ordering. Please share more details.`;
    const whatsappUrl = `https://wa.me/919502819518?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};


    if (!isHydrated) {
        return (
            <section className="py-16 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="animate-pulse space-y-8">
                        <div className="h-10 bg-muted rounded w-1/2 mx-auto"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-96 bg-muted rounded-xl"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                            <Icon name="CubeIcon" size={32} variant="solid" className="text-accent" />
                        </div>
                        <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-4">
                            Bulk Order & Event Catering
                        </h2>
                        <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
                            Make your special occasions memorable with our premium paan catering services. Custom packages designed for every celebration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`bg-card rounded-2xl shadow-organic hover:shadow-organic-lg transition-all duration-300 overflow-hidden border-2 ${selectedPackage === pkg.id ? 'border-accent' : 'border-transparent'
                                    }`}
                            >
                                <div className="bg-gradient-to-br from-primary to-brand-dark-green p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                                <Icon name={pkg.icon as any} size={24} variant="solid" className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-headline text-2xl font-bold text-white">{pkg.name}</h3>
                                                <p className="font-body text-sm text-white/80">Min. {pkg.minQuantity} pieces</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-body text-white/90 text-sm">
                                        <span className="font-semibold">Ideal for:</span> {pkg.idealFor}
                                    </p>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6">
                                        <p className="font-cta text-2xl font-bold text-primary mb-2">{pkg.priceRange}</p>
                                        <p className="font-body text-sm text-text-secondary">Pricing varies by quantity and customization</p>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {pkg.features.map((feature, index) => (
                                            <div key={`${pkg.id}-feature-${index}`} className="flex items-start space-x-3">
                                                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                                                <p className="font-body text-sm text-foreground">{feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedPackage(pkg.id);
                                            handleWhatsAppInquiry(pkg.name);
                                        }}
                                        className="w-full bg-brand-orange-cta hover:bg-brand-orange-cta/90 text-white font-cta font-bold py-3 rounded-lg shadow-organic hover:shadow-organic-lg transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                                        <span>Inquire on WhatsApp</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Information */}
                    <div className="bg-card rounded-2xl shadow-organic p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-success/10 rounded-full mb-4">
                                    <Icon name="ClockIcon" size={28} variant="outline" className="text-success" />
                                </div>
                                <h4 className="font-cta text-lg font-bold text-primary mb-2">Advance Booking</h4>
                                <p className="font-body text-sm text-text-secondary">
                                    Book 3-7 days in advance for best availability and customization options
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-warning/10 rounded-full mb-4">
                                    <Icon name="TruckIcon" size={28} variant="outline" className="text-warning" />
                                </div>
                                <h4 className="font-cta text-lg font-bold text-primary mb-2">Delivery Options</h4>
                                <p className="font-body text-sm text-text-secondary">
                                    Free delivery within 5km radius. Extended delivery available on request
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                                    <Icon name="CurrencyRupeeIcon" size={28} variant="outline" className="text-accent" />
                                </div>
                                <h4 className="font-cta text-lg font-bold text-primary mb-2">Flexible Payment</h4>
                                <p className="font-body text-sm text-text-secondary">
                                    50% advance, balance on delivery. Multiple payment methods accepted
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BulkOrderSection;