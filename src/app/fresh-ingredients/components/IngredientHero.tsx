import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface IngredientHeroProps {
    className?: string;
}

const IngredientHero = ({ className = '' }: IngredientHeroProps) => {
    return (
        <section className={`relative bg-gradient-to-br from-primary via-brand-dark-green to-secondary py-20 lg:py-32 overflow-hidden ${className}`}>
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border-2 border-accent/30">
                        <Icon name="SparklesIcon" size={40} variant="solid" className="text-accent" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-headline text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                        Premium Fresh Ingredients
                    </h1>

                    {/* Subheading */}
                    <p className="font-body text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Discover the authentic flavors behind every paan. We source only the finest ingredients from trusted suppliers across India, ensuring quality, freshness, and traditional taste in every bite.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                        <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
                            <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-success" />
                            <span className="font-body text-sm text-primary-foreground font-medium">100% Natural</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
                            <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
                            <span className="font-body text-sm text-primary-foreground font-medium">Quality Certified</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
                            <Icon name="TruckIcon" size={20} variant="solid" className="text-success" />
                            <span className="font-body text-sm text-primary-foreground font-medium">Daily Fresh Supply</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IngredientHero;