'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MenuFiltersProps {
  selectedCategory: string;
  selectedSpiceLevel: string;
  selectedSweetness: string;
  selectedDietary: string;
  onCategoryChange: (category: string) => void;
  onSpiceLevelChange: (level: string) => void;
  onSweetnessChange: (sweetness: string) => void;
  onDietaryChange: (dietary: string) => void;
  onReset: () => void;
}

const MenuFilters = ({
  selectedCategory,
  selectedSpiceLevel,
  selectedSweetness,
  selectedDietary,
  onCategoryChange,
  onSpiceLevelChange,
  onSweetnessChange,
  onDietaryChange,
  onReset,
}: MenuFiltersProps) => {
  const categories = [
    { id: 'all', label: 'All Varieties', icon: 'Squares2X2Icon' },
    { id: 'classic', label: 'Classic', icon: 'StarIcon' },
    { id: 'premium', label: 'Premium', icon: 'SparklesIcon' },
    { id: 'special', label: 'Special', icon: 'FireIcon' },
    { id: 'seasonal', label: 'Seasonal', icon: 'SunIcon' },
  ];

  const spiceLevels = [
    { id: 'all', label: 'All Levels', icon: 'AdjustmentsHorizontalIcon' },
    { id: 'mild', label: 'Mild', icon: 'CheckCircleIcon' },
    { id: 'medium', label: 'Medium', icon: 'ExclamationCircleIcon' },
    { id: 'hot', label: 'Hot', icon: 'FireIcon' },
  ];

  const sweetnessLevels = [
    { id: 'all', label: 'All Sweetness', icon: 'AdjustmentsHorizontalIcon' },
    { id: 'low', label: 'Low Sweet', icon: 'MinusCircleIcon' },
    { id: 'medium', label: 'Medium Sweet', icon: 'CheckCircleIcon' },
    { id: 'high', label: 'High Sweet', icon: 'PlusCircleIcon' },
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Options', icon: 'AdjustmentsHorizontalIcon' },
    { id: 'vegetarian', label: 'Vegetarian', icon: 'CheckBadgeIcon' },
    { id: 'vegan', label: 'Vegan', icon: 'CheckBadgeIcon' },
    { id: 'no-tobacco', label: 'No Tobacco', icon: 'NoSymbolIcon' },
  ];

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedSpiceLevel !== 'all' ||
    selectedSweetness !== 'all' ||
    selectedDietary !== 'all';

  return (
    <div className="bg-card rounded-lg shadow-organic p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon name="FunnelIcon" size={24} variant="solid" className="text-primary" />
          <h2 className="font-headline text-xl lg:text-2xl text-primary">Filter Menu</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-body font-medium text-secondary hover:bg-surface rounded-lg transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
          Category
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-organic'
                  : 'bg-surface text-foreground hover:bg-muted'
              }`}
            >
              <Icon
                name={category.icon as any}
                size={18}
                variant={selectedCategory === category.id ? 'solid' : 'outline'}
              />
              <span className="hidden lg:inline">{category.label}</span>
              <span className="lg:hidden">{category.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Spice Level Filter */}
      <div className="space-y-3">
        <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
          Spice Level
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {spiceLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => onSpiceLevelChange(level.id)}
              className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-300 ${
                selectedSpiceLevel === level.id
                  ? 'bg-secondary text-secondary-foreground shadow-organic'
                  : 'bg-surface text-foreground hover:bg-muted'
              }`}
            >
              <Icon
                name={level.icon as any}
                size={18}
                variant={selectedSpiceLevel === level.id ? 'solid' : 'outline'}
              />
              <span>{level.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sweetness Filter */}
      <div className="space-y-3">
        <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
          Sweetness Level
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {sweetnessLevels.map((sweet) => (
            <button
              key={sweet.id}
              onClick={() => onSweetnessChange(sweet.id)}
              className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-300 ${
                selectedSweetness === sweet.id
                  ? 'bg-accent text-accent-foreground shadow-organic'
                  : 'bg-surface text-foreground hover:bg-muted'
              }`}
            >
              <Icon
                name={sweet.icon as any}
                size={18}
                variant={selectedSweetness === sweet.id ? 'solid' : 'outline'}
              />
              <span>{sweet.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dietary Filter */}
      <div className="space-y-3">
        <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
          Dietary Preferences
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {dietaryOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onDietaryChange(option.id)}
              className={`flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-300 ${
                selectedDietary === option.id
                  ? 'bg-success text-success-foreground shadow-organic'
                  : 'bg-surface text-foreground hover:bg-muted'
              }`}
            >
              <Icon
                name={option.icon as any}
                size={18}
                variant={selectedDietary === option.id ? 'solid' : 'outline'}
              />
              <span className="hidden lg:inline">{option.label}</span>
              <span className="lg:hidden">{option.label.replace(' ', '\n')}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;