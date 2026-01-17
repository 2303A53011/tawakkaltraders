'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Ingredient {
  name: string;
  icon: string;
}

interface NutritionalInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  spiceLevel: string;
  sweetnessLevel: string;
  preparationTime: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  isCustomerFavorite: boolean;
  isSeasonal: boolean;
  ingredients: Ingredient[];
  allergens: string[];
  dietary: string[];
  nutritionalInfo: NutritionalInfo;
  culturalNote: string;
}

interface MenuCardProps {
  item: MenuItem;
  onOrderClick: (item: MenuItem) => void;
}

const MenuCard = ({ item, onOrderClick }: MenuCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const getSpiceLevelColor = (level: string) => {
    switch (level) {
      case 'mild':
        return 'text-success bg-success/10';
      case 'medium':
        return 'text-warning bg-warning/10';
      case 'hot':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getSweetnessIcon = (level: string) => {
    switch (level) {
      case 'low':
        return 'MinusCircleIcon';
      case 'medium':
        return 'CheckCircleIcon';
      case 'high':
        return 'PlusCircleIcon';
      default:
        return 'AdjustmentsHorizontalIcon';
    }
  };

  const getAvailabilityBadge = () => {
    switch (item.availability) {
      case 'available':
        return (
          <span className="flex items-center space-x-1 px-2 py-1 bg-success/10 text-success text-xs font-body font-medium rounded-full">
            <Icon name="CheckCircleIcon" size={14} variant="solid" />
            <span>Available</span>
          </span>
        );
      case 'limited':
        return (
          <span className="flex items-center space-x-1 px-2 py-1 bg-warning/10 text-warning text-xs font-body font-medium rounded-full">
            <Icon name="ExclamationCircleIcon" size={14} variant="solid" />
            <span>Limited Stock</span>
          </span>
        );
      case 'out-of-stock':
        return (
          <span className="flex items-center space-x-1 px-2 py-1 bg-error/10 text-error text-xs font-body font-medium rounded-full">
            <Icon name="XCircleIcon" size={14} variant="solid" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-organic overflow-hidden hover:shadow-organic-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <div className="flex flex-col space-y-2">
            {item.isCustomerFavorite && (
              <span className="flex items-center space-x-1 px-2 py-1 bg-brand-orange-cta text-white text-xs font-cta font-bold rounded-full shadow-organic">
                <Icon name="HeartIcon" size={14} variant="solid" />
                <span>Customer Favorite</span>
              </span>
            )}
            {item.isSeasonal && (
              <span className="flex items-center space-x-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-body font-medium rounded-full shadow-organic">
                <Icon name="SparklesIcon" size={14} variant="solid" />
                <span>Seasonal Special</span>
              </span>
            )}
          </div>
          {getAvailabilityBadge()}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full uppercase tracking-wide">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        {/* Header */}
        <div>
          <h3 className="font-headline text-xl text-primary mb-2">{item.name}</h3>
          <p className="font-body text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Quick Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Spice Level */}
            <div className="flex items-center space-x-1">
              <Icon name="FireIcon" size={16} variant="outline" className="text-secondary" />
              <span className={`text-xs font-body font-medium px-2 py-0.5 rounded ${getSpiceLevelColor(item.spiceLevel)}`}>
                {item.spiceLevel.charAt(0).toUpperCase() + item.spiceLevel.slice(1)}
              </span>
            </div>

            {/* Sweetness Level */}
            <div className="flex items-center space-x-1">
              <Icon name={getSweetnessIcon(item.sweetnessLevel) as any} size={16} variant="outline" className="text-accent" />
              <span className="text-xs font-body font-medium text-foreground">
                {item.sweetnessLevel.charAt(0).toUpperCase() + item.sweetnessLevel.slice(1)}
              </span>
            </div>
          </div>

          {/* Prep Time */}
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="ClockIcon" size={16} variant="outline" />
            <span className="text-xs font-body">{item.preparationTime}</span>
          </div>
        </div>

        {/* Dietary Tags */}
        {item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.dietary.map((diet, index) => (
              <span
                key={index}
                className="flex items-center space-x-1 px-2 py-1 bg-success/10 text-success text-xs font-body font-medium rounded"
              >
                <Icon name="CheckBadgeIcon" size={12} variant="solid" />
                <span>{diet}</span>
              </span>
            ))}
          </div>
        )}

        {/* Price & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-col">
            <span className="text-xs font-body text-muted-foreground">Price</span>
            <span className="font-headline text-2xl text-primary">₹{item.price.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-center w-10 h-10 bg-surface text-foreground hover:bg-muted rounded-lg transition-colors duration-300"
              aria-label="View details"
            >
              <Icon name="InformationCircleIcon" size={20} variant="outline" />
            </button>
            <button
              onClick={() => onOrderClick(item)}
              disabled={item.availability === 'out-of-stock'}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-cta font-bold transition-all duration-300 ${
                item.availability === 'out-of-stock' ?'bg-muted text-muted-foreground cursor-not-allowed' :'bg-brand-orange-cta text-white hover:bg-opacity-90 shadow-organic hover:shadow-organic-lg'
              }`}
            >
              <Icon name="ShoppingBagIcon" size={18} variant="solid" />
              <span>Order Now</span>
            </button>
          </div>
        </div>

        {/* Detailed Information (Expandable) */}
        {showDetails && (
          <div className="pt-4 border-t border-border space-y-4 animate-slide-in-right">
            {/* Ingredients */}
            <div>
              <h4 className="font-body font-semibold text-foreground text-sm mb-2 flex items-center space-x-2">
                <Icon name="SparklesIcon" size={16} variant="solid" className="text-primary" />
                <span>Fresh Ingredients</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="flex items-center space-x-1 px-2 py-1 bg-surface text-foreground text-xs font-body rounded"
                  >
                    <Icon name={ingredient.icon as any} size={12} variant="outline" />
                    <span>{ingredient.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Allergens */}
            {item.allergens.length > 0 && (
              <div>
                <h4 className="font-body font-semibold text-error text-sm mb-2 flex items-center space-x-2">
                  <Icon name="ExclamationTriangleIcon" size={16} variant="solid" />
                  <span>Allergen Warning</span>
                </h4>
                <p className="text-xs font-body text-muted-foreground">
                  Contains: {item.allergens.join(', ')}
                </p>
              </div>
            )}

            {/* Nutritional Info */}
            <div>
              <h4 className="font-body font-semibold text-foreground text-sm mb-2 flex items-center space-x-2">
                <Icon name="ChartBarIcon" size={16} variant="solid" className="text-success" />
                <span>Nutritional Information</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-body">
                <div className="flex justify-between px-2 py-1 bg-surface rounded">
                  <span className="text-muted-foreground">Calories:</span>
                  <span className="font-medium text-foreground">{item.nutritionalInfo.calories} kcal</span>
                </div>
                <div className="flex justify-between px-2 py-1 bg-surface rounded">
                  <span className="text-muted-foreground">Protein:</span>
                  <span className="font-medium text-foreground">{item.nutritionalInfo.protein}</span>
                </div>
                <div className="flex justify-between px-2 py-1 bg-surface rounded">
                  <span className="text-muted-foreground">Carbs:</span>
                  <span className="font-medium text-foreground">{item.nutritionalInfo.carbs}</span>
                </div>
                <div className="flex justify-between px-2 py-1 bg-surface rounded">
                  <span className="text-muted-foreground">Fat:</span>
                  <span className="font-medium text-foreground">{item.nutritionalInfo.fat}</span>
                </div>
              </div>
            </div>

            {/* Cultural Note */}
            {item.culturalNote && (
              <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
                <p className="text-xs font-body text-foreground italic">
                  <Icon name="BookOpenIcon" size={14} variant="outline" className="inline mr-1 text-accent" />
                  {item.culturalNote}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;