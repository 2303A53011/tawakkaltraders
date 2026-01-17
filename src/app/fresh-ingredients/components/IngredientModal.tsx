'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import type { Ingredient } from './IngredientCard';

interface IngredientModalProps {
    ingredient: Ingredient | null;
    isOpen: boolean;
    onClose: () => void;
}

const IngredientModal = ({ ingredient, isOpen, onClose }: IngredientModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !ingredient) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-card rounded-2xl shadow-organic-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
                    <div>
                        <h2 className="font-headline text-2xl font-bold text-foreground">{ingredient.name}</h2>
                        <p className="font-accent text-sm text-secondary italic">{ingredient.hindiName}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300"
                        aria-label="Close modal"
                    >
                        <Icon name="XMarkIcon" size={24} variant="solid" className="text-foreground" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Image & Basic Info */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-8">
                        <div className="relative h-80 rounded-xl overflow-hidden bg-muted">
                            <AppImage
                                src={ingredient.image}
                                alt={ingredient.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            {/* Category & Origin */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
                                    <Icon name="TagIcon" size={18} variant="solid" />
                                    <span className="font-body text-sm font-semibold">{ingredient.category}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-lg">
                                    <Icon name="MapPinIcon" size={18} variant="solid" />
                                    <span className="font-body text-sm font-semibold">{ingredient.origin}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">About</h3>
                                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                                    {ingredient.description}
                                </p>
                            </div>

                            {/* Flavor Profile */}
                            <div>
                                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Flavor Profile</h3>
                                <p className="font-body text-sm text-foreground/80">{ingredient.flavorProfile}</p>
                            </div>

                            {/* Traditional Use */}
                            <div>
                                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">Traditional Use</h3>
                                <p className="font-body text-sm text-foreground/80">{ingredient.traditionalUse}</p>
                            </div>
                        </div>
                    </div>

                    {/* Health Benefits */}
                    <div className="mb-8">
                        <h3 className="font-headline text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                            <Icon name="HeartIcon" size={24} variant="solid" className="text-error" />
                            <span>Health Benefits</span>
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {ingredient.healthBenefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 bg-success/5 border border-success/20 p-4 rounded-lg"
                                >
                                    <Icon name={benefit.icon as any} size={20} variant="solid" className="text-success mt-0.5" />
                                    <span className="font-body text-sm text-foreground">{benefit.benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nutritional Information */}
                    <div className="mb-8">
                        <h3 className="font-headline text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                            <Icon name="ChartBarIcon" size={24} variant="solid" className="text-primary" />
                            <span>Nutritional Information</span>
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-muted p-4 rounded-lg text-center">
                                <p className="font-body text-xs text-muted-foreground mb-1">Calories</p>
                                <p className="font-headline text-2xl font-bold text-foreground">{ingredient.nutritionalInfo.calories}</p>
                            </div>
                            <div className="bg-muted p-4 rounded-lg text-center">
                                <p className="font-body text-xs text-muted-foreground mb-1">Protein</p>
                                <p className="font-headline text-2xl font-bold text-foreground">{ingredient.nutritionalInfo.protein}</p>
                            </div>
                            <div className="bg-muted p-4 rounded-lg text-center">
                                <p className="font-body text-xs text-muted-foreground mb-1">Fiber</p>
                                <p className="font-headline text-2xl font-bold text-foreground">{ingredient.nutritionalInfo.fiber}</p>
                            </div>
                            <div className="bg-muted p-4 rounded-lg text-center">
                                <p className="font-body text-xs text-muted-foreground mb-1">Vitamins</p>
                                <p className="font-headline text-2xl font-bold text-foreground">{ingredient.nutritionalInfo.vitamins}</p>
                            </div>
                        </div>
                    </div>

                    {/* Quality & Storage */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Storage Method */}
                        <div className="bg-surface p-5 rounded-xl border border-border">
                            <h3 className="font-headline text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                                <Icon name="ArchiveBoxIcon" size={20} variant="solid" className="text-primary" />
                                <span>Storage Method</span>
                            </h3>
                            <p className="font-body text-sm text-foreground/80">{ingredient.storageMethod}</p>
                        </div>

                        {/* Seasonal Availability */}
                        <div className="bg-surface p-5 rounded-xl border border-border">
                            <h3 className="font-headline text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                                <Icon name="CalendarIcon" size={20} variant="solid" className="text-accent" />
                                <span>Seasonal Availability</span>
                            </h3>
                            <p className="font-body text-sm text-foreground/80">{ingredient.seasonalAvailability}</p>
                        </div>

                        {/* Supplier Certification */}
                        <div className="bg-surface p-5 rounded-xl border border-border lg:col-span-2">
                            <h3 className="font-headline text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                                <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
                                <span>Supplier Certification</span>
                            </h3>
                            <p className="font-body text-sm text-foreground/80">{ingredient.supplierCertification}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientModal;