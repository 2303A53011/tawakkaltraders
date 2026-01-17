'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
    const categoryIcons: Record<string, string> = {
        'All Ingredients': 'Squares2X2Icon',
        'Base Ingredients': 'BeakerIcon',
        'Sweet Fillings': 'CakeIcon',
        'Aromatic Spices': 'SparklesIcon',
        'Nuts & Seeds': 'CubeIcon',
        Garnishes: 'StarIcon',
    };

    return (
        <div className="bg-card rounded-xl shadow-organic p-4 lg:p-6 border border-border">
            <h2 className="font-headline text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="FunnelIcon" size={24} variant="solid" className="text-primary" />
                <span>Filter by Category</span>
            </h2>

            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-body font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-primary text-primary-foreground shadow-organic'
                                : 'bg-muted text-foreground hover:bg-surface'
                            }`}
                    >
                        <Icon
                            name={(categoryIcons[category] as any) || 'TagIcon'}
                            size={18}
                            variant={activeCategory === category ? 'solid' : 'outline'}
                        />
                        <span className="text-sm">{category}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
