import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
    color: string;
}

interface WhyChooseSectionProps {
    className?: string;
}

const WhyChooseSection = ({ className = '' }: WhyChooseSectionProps) => {
    const features: Feature[] = [
        {
            id: 1,
            icon: "ShieldCheckIcon",
            title: "Hygiene First",
            description: "Certified hygiene standards with gloved preparation and sanitized workspace. Your health is our priority.",
            color: "text-[#38A169]"
        },
        {
            id: 2,
            icon: "SparklesIcon",
            title: "Premium Ingredients",
            description: "Only the finest betel leaves, authentic gulkand, and fresh ingredients sourced daily from trusted suppliers.",
            color: "text-[#D4A574]"
        },
        {
            id: 3,
            icon: "ClockIcon",
            title: "Fresh Daily",
            description: "Every paan is prepared fresh to order. No pre-made items, ensuring maximum freshness and flavor.",
            color: "text-[#FF6B35]"
        },
        {
            id: 4,
            icon: "UserGroupIcon",
            title: "Family Tradition",
            description: "Three generations of paan-making expertise passed down through our family. Authentic recipes, modern standards.",
            color: "text-[#8B2635]"
        },
        {
            id: 5,
            icon: "HeartIcon",
            title: "Customer Love",
            description: "Over 500 satisfied customers and counting. Rated 4.8/5 for taste, quality, and service excellence.",
            color: "text-[#E53E3E]"
        },
        {
            id: 6,
            icon: "ChatBubbleLeftRightIcon",
            title: "Easy Ordering",
            description: "Order via WhatsApp, phone, or walk-in. Quick service, friendly staff, and convenient location.",
            color: "text-[#1B4332]"
        }
    ];

    return (
        <section className={`py-20 bg-gradient-to-br from-[#1B4332] to-[#2D5A3D] relative overflow-hidden ${className}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0zm0 75C20.7 75 5 59.3 5 40S20.7 5 40 5s35 15.7 35 35-15.7 35-35 35z' fill='%23D4A574'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
            }}></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                        <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-[#D4A574]" />
                        <span className="font-body font-semibold text-white">Our Promise</span>
                    </div>
                    <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white mb-4">
                        Why Choose Tawwakal Traders?
                    </h2>
                    <p className="font-body text-lg text-white/80">
                        We combine traditional paan-making artistry with modern hygiene standards to deliver an unmatched experience.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon name={feature.icon as any} size={32} variant="solid" className={feature.color} />
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="font-body text-white/80 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-[#D4A574]/30">
                        <div className="flex-1 text-left">
                            <h3 className="font-headline text-2xl font-bold text-white mb-2">
                                Experience the Difference Today
                            </h3>
                            <p className="font-body text-white/80">
                                Visit us or order online to taste the authentic flavors of tradition.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20order%20from%20Tawwakal%20Traders."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                        >
                            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
                            <span>Order Now</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;