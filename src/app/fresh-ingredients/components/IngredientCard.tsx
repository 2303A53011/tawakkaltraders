'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface NutritionalInfo {
    calories: string;
    protein: string;
    fiber: string;
    vitamins: string;
}

interface HealthBenefit {
    icon: string;
    benefit: string;
}

export interface Ingredient {
    id: number;
    name: string;
    hindiName: string;
    category: string;
    image: string;
    alt: string;
    origin: string;
    description: string;
    healthBenefits: HealthBenefit[];
    nutritionalInfo: NutritionalInfo;
    seasonalAvailability: string;
    storageMethod: string;
    supplierCertification: string;
    traditionalUse: string;
    flavorProfile: string;
}

interface IngredientCardProps {
    ingredient: Ingredient;
    onViewDetails: (ingredient: Ingredient) => void;
}

const IngredientCard = ({ ingredient, onViewDetails }: IngredientCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="bg-card rounded-xl shadow-organic hover:shadow-organic-lg transition-all duration-300 overflow-hidden group border border-border">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden bg-muted">
                <AppImage
                    src={ingredient.image}
                    alt={ingredient.alt}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={() => setImageLoaded(true)}
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-semibold">
                    {ingredient.category}
                </div>

                {/* Seasonal Badge */}
                <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-xs font-body font-semibold flex items-center space-x-1">
                    <Icon name="CalendarIcon" size={14} variant="solid" />
                    <span>{ingredient.seasonalAvailability}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
                {/* Name & Origin */}
                <div className="mb-3">
                    <h3 className="font-headline text-xl font-semibold text-foreground mb-1">
                        {ingredient.name}
                    </h3>
                    <p className="font-accent text-sm text-secondary italic">{ingredient.hindiName}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <Icon name="MapPinIcon" size={16} variant="solid" className="text-primary" />
                        <span className="font-body text-sm text-muted-foreground">{ingredient.origin}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-foreground/80 mb-4 line-clamp-2">
                    {ingredient.description}
                </p>

                {/* Health Benefits Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {ingredient.healthBenefits.slice(0, 2).map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-md text-xs font-body"
                        >
                            <Icon name={benefit.icon as any} size={14} variant="solid" />
                            <span>{benefit.benefit}</span>
                        </div>
                    ))}
                    {ingredient.healthBenefits.length > 2 && (
                        <div className="flex items-center space-x-1 bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-body">
                            <span>+{ingredient.healthBenefits.length - 2} more</span>
                        </div>
                    )}
                </div>

                {/* View Details Button */}
                <button
                    onClick={() => onViewDetails(ingredient)}
                    className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                    <span>View Full Details</span>
                    <Icon name="ArrowRightIcon" size={18} variant="solid" />
                </button>
            </div>
        </div>
    );
};

export default IngredientCard;