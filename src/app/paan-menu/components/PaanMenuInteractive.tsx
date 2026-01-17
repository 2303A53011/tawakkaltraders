'use client';

import React, { useState, useEffect } from 'react';
import MenuFilters from './MenuFilters';
import MenuCard from './MenuCard';
import OrderModal from './OrderModal';
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

const PaanMenuInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState('all');
  const [selectedSweetness, setSelectedSweetness] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Meetha Paan",
    category: "classic",
    description: "Traditional sweet paan with gulkand, coconut, cherries, and aromatic spices. A timeless favorite that melts in your mouth.",
    price: 30,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed753ccc-1768329572553.png",
    alt: "Close-up of traditional meetha paan with visible gulkand rose preserve, shredded coconut, and red cherries on fresh betel leaf",
    spiceLevel: "mild",
    sweetnessLevel: "high",
    preparationTime: "2-3 mins",
    availability: "available",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Gulkand", icon: "HeartIcon" },
    { name: "Coconut", icon: "StarIcon" },
    { name: "Cherries", icon: "SparklesIcon" },
    { name: "Fennel Seeds", icon: "StarIcon" },
    { name: "Cardamom", icon: "SparklesIcon" }],

    allergens: ["Nuts", "Coconut"],
    dietary: ["Vegetarian"],
    nutritionalInfo: {
      calories: 85,
      protein: "1.2g",
      carbs: "18g",
      fat: "2.5g"
    },
    culturalNote: "Meetha paan has been served after meals in Indian households for centuries as a digestive aid and mouth freshener."
  },
  {
    id: 2,
    name: "Banarasi Paan",
    category: "premium",
    description: "Premium paan from the holy city of Varanasi, featuring special tobacco blend, silver leaf, and exotic spices.",
    price: 80,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_184f89723-1768329574483.png",
    alt: "Luxurious Banarasi paan with visible silver leaf coating, tobacco blend, and premium spices arranged on ornate betel leaf",
    spiceLevel: "medium",
    sweetnessLevel: "medium",
    preparationTime: "4-5 mins",
    availability: "available",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Premium Betel Leaf", icon: "SparklesIcon" },
    { name: "Silver Leaf", icon: "StarIcon" },
    { name: "Tobacco", icon: "FireIcon" },
    { name: "Katha", icon: "SparklesIcon" },
    { name: "Lime", icon: "StarIcon" },
    { name: "Supari", icon: "SparklesIcon" }],

    allergens: ["Tobacco", "Nuts"],
    dietary: [],
    nutritionalInfo: {
      calories: 65,
      protein: "0.8g",
      carbs: "12g",
      fat: "1.8g"
    },
    culturalNote: "Banarasi paan is considered the king of all paans, originating from the ancient city of Varanasi with a 400-year tradition."
  },
  {
    id: 3,
    name: "Chocolate Paan",
    category: "special",
    description: "Modern fusion paan with Belgian chocolate, dry fruits, and sweet gulkand. Perfect for chocolate lovers.",
    price: 60,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3c4d9d0-1768329575403.png",
    alt: "Innovative chocolate paan showing melted Belgian chocolate drizzle over betel leaf with visible cashews and almonds",
    spiceLevel: "mild",
    sweetnessLevel: "high",
    preparationTime: "3-4 mins",
    availability: "available",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Belgian Chocolate", icon: "HeartIcon" },
    { name: "Cashews", icon: "StarIcon" },
    { name: "Almonds", icon: "SparklesIcon" },
    { name: "Gulkand", icon: "HeartIcon" },
    { name: "Coconut", icon: "StarIcon" }],

    allergens: ["Nuts", "Dairy", "Coconut"],
    dietary: ["Vegetarian"],
    nutritionalInfo: {
      calories: 120,
      protein: "2.5g",
      carbs: "22g",
      fat: "4.2g"
    },
    culturalNote: "A modern innovation that bridges traditional paan culture with contemporary chocolate indulgence."
  },
  {
    id: 4,
    name: "Fire Paan",
    category: "special",
    description: "Spicy and bold paan with extra tobacco, clove oil, and hot spices. For the adventurous palate only.",
    price: 50,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c0f634f-1768329572363.png",
    alt: "Intense fire paan with visible red chili flakes, clove oil drops, and strong tobacco blend on dark green betel leaf",
    spiceLevel: "hot",
    sweetnessLevel: "low",
    preparationTime: "3-4 mins",
    availability: "available",
    isCustomerFavorite: false,
    isSeasonal: false,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Strong Tobacco", icon: "FireIcon" },
    { name: "Clove Oil", icon: "FireIcon" },
    { name: "Red Chili", icon: "FireIcon" },
    { name: "Black Pepper", icon: "FireIcon" },
    { name: "Menthol", icon: "SparklesIcon" }],

    allergens: ["Tobacco"],
    dietary: [],
    nutritionalInfo: {
      calories: 45,
      protein: "0.5g",
      carbs: "8g",
      fat: "1.2g"
    },
    culturalNote: "Fire paan is a modern creation for those who seek an intense, bold experience with maximum heat."
  },
  {
    id: 5,
    name: "Rajwadi Paan",
    category: "premium",
    description: "Royal paan with saffron, gold leaf, premium dry fruits, and exotic spices. A truly regal experience.",
    price: 120,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19244ae8a-1768329574370.png",
    alt: "Luxurious Rajwadi paan adorned with visible gold leaf, saffron strands, pistachios, and premium rose petals on pristine betel leaf",
    spiceLevel: "mild",
    sweetnessLevel: "medium",
    preparationTime: "5-6 mins",
    availability: "limited",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Premium Betel Leaf", icon: "SparklesIcon" },
    { name: "Gold Leaf", icon: "StarIcon" },
    { name: "Saffron", icon: "SparklesIcon" },
    { name: "Pistachios", icon: "StarIcon" },
    { name: "Rose Petals", icon: "HeartIcon" },
    { name: "Gulkand", icon: "HeartIcon" }],

    allergens: ["Nuts"],
    dietary: ["Vegetarian"],
    nutritionalInfo: {
      calories: 95,
      protein: "2.8g",
      carbs: "16g",
      fat: "3.5g"
    },
    culturalNote: "Rajwadi paan was traditionally served in royal courts and palaces, symbolizing luxury and hospitality."
  },
  {
    id: 6,
    name: "Ice Paan",
    category: "special",
    description: "Refreshing cold paan with menthol crystals, mint, and cooling spices. Perfect for hot summer days.",
    price: 45,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed753ccc-1768329572553.png",
    alt: "Refreshing ice paan with visible menthol crystals, fresh mint leaves, and ice-cold ingredients on chilled betel leaf",
    spiceLevel: "mild",
    sweetnessLevel: "medium",
    preparationTime: "2-3 mins",
    availability: "available",
    isCustomerFavorite: false,
    isSeasonal: true,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Menthol Crystals", icon: "SparklesIcon" },
    { name: "Fresh Mint", icon: "StarIcon" },
    { name: "Fennel Seeds", icon: "StarIcon" },
    { name: "Coconut", icon: "StarIcon" },
    { name: "Gulkand", icon: "HeartIcon" }],

    allergens: ["Coconut"],
    dietary: ["Vegetarian", "Vegan"],
    nutritionalInfo: {
      calories: 55,
      protein: "0.8g",
      carbs: "12g",
      fat: "1.5g"
    },
    culturalNote: "Ice paan is a modern summer innovation that provides instant cooling relief while maintaining traditional flavors."
  },
  {
    id: 7,
    name: "Calcutta Paan",
    category: "classic",
    description: "Traditional Kolkata-style paan with special tobacco blend, katha, and authentic Bengali spices.",
    price: 40,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11d8b2879-1768329574829.png",
    alt: "Authentic Calcutta paan showing traditional tobacco blend, red katha paste, and Bengali spice mix on fresh betel leaf",
    spiceLevel: "medium",
    sweetnessLevel: "low",
    preparationTime: "3-4 mins",
    availability: "available",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Tobacco", icon: "FireIcon" },
    { name: "Katha", icon: "SparklesIcon" },
    { name: "Lime", icon: "StarIcon" },
    { name: "Supari", icon: "SparklesIcon" },
    { name: "Cardamom", icon: "StarIcon" }],

    allergens: ["Tobacco", "Nuts"],
    dietary: [],
    nutritionalInfo: {
      calories: 50,
      protein: "0.6g",
      carbs: "9g",
      fat: "1.5g"
    },
    culturalNote: "Calcutta paan represents the rich cultural heritage of Kolkata, where paan shops are social gathering spots."
  },
  {
    id: 8,
    name: "Mango Paan",
    category: "seasonal",
    description: "Seasonal summer special with fresh mango pulp, coconut, and sweet spices. Available only in mango season.",
    price: 55,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed753ccc-1768329572553.png",
    alt: "Vibrant mango paan with visible fresh mango pulp, shredded coconut, and yellow-orange color on green betel leaf",
    spiceLevel: "mild",
    sweetnessLevel: "high",
    preparationTime: "3-4 mins",
    availability: "limited",
    isCustomerFavorite: false,
    isSeasonal: true,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Fresh Mango Pulp", icon: "HeartIcon" },
    { name: "Coconut", icon: "StarIcon" },
    { name: "Gulkand", icon: "HeartIcon" },
    { name: "Fennel Seeds", icon: "StarIcon" },
    { name: "Cardamom", icon: "SparklesIcon" }],

    allergens: ["Coconut"],
    dietary: ["Vegetarian", "Vegan"],
    nutritionalInfo: {
      calories: 75,
      protein: "1.0g",
      carbs: "16g",
      fat: "2.0g"
    },
    culturalNote: "Mango paan celebrates India's favorite fruit during summer season, combining tradition with seasonal freshness."
  },
  {
    id: 9,
    name: "Dry Fruit Paan",
    category: "premium",
    description: "Loaded with premium cashews, almonds, pistachios, and raisins. A nutritious and delicious treat.",
    price: 70,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d366e8a9-1768329574384.png",
    alt: "Premium dry fruit paan packed with visible whole cashews, almonds, pistachios, and golden raisins on betel leaf",
    spiceLevel: "mild",
    sweetnessLevel: "medium",
    preparationTime: "3-4 mins",
    availability: "available",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Cashews", icon: "StarIcon" },
    { name: "Almonds", icon: "SparklesIcon" },
    { name: "Pistachios", icon: "StarIcon" },
    { name: "Raisins", icon: "HeartIcon" },
    { name: "Gulkand", icon: "HeartIcon" }],

    allergens: ["Nuts"],
    dietary: ["Vegetarian"],
    nutritionalInfo: {
      calories: 110,
      protein: "3.5g",
      carbs: "15g",
      fat: "5.2g"
    },
    culturalNote: "Dry fruit paan combines health benefits of nuts with traditional paan enjoyment, popular among health-conscious customers."
  },
  {
    id: 10,
    name: "Sadha Paan",
    category: "classic",
    description: "Simple traditional paan with basic ingredients. Perfect for purists who love authentic taste.",
    price: 20,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11d8b2879-1768329574829.png",
    alt: "Simple sadha paan showing basic ingredients of betel leaf, lime paste, and areca nut in traditional preparation",
    spiceLevel: "mild",
    sweetnessLevel: "low",
    preparationTime: "1-2 mins",
    availability: "available",
    isCustomerFavorite: false,
    isSeasonal: false,
    ingredients: [
    { name: "Betel Leaf", icon: "SparklesIcon" },
    { name: "Lime", icon: "StarIcon" },
    { name: "Supari", icon: "SparklesIcon" },
    { name: "Katha", icon: "StarIcon" },
    { name: "Cardamom", icon: "SparklesIcon" }],

    allergens: ["Nuts"],
    dietary: ["Vegetarian", "Vegan"],
    nutritionalInfo: {
      calories: 25,
      protein: "0.3g",
      carbs: "5g",
      fat: "0.8g"
    },
    culturalNote: "Sadha paan represents the purest form of traditional paan, unchanged for generations."
  },
  {
    id: 12,
    name: "Kesar Paan",
    category: "premium",
    description: "Luxurious paan infused with premium saffron strands, rose water, and exotic spices. A royal delicacy.",
    price: 90,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19244ae8a-1768329574370.png",
    alt: "Elegant kesar paan with visible golden saffron strands, rose petals, and premium ingredients on pristine betel leaf",
    spiceLevel: "mild",
    sweetnessLevel: "medium",
    preparationTime: "4-5 mins",
    availability: "available",
    isCustomerFavorite: true,
    isSeasonal: false,
    ingredients: [
    { name: "Premium Betel Leaf", icon: "SparklesIcon" },
    { name: "Saffron", icon: "StarIcon" },
    { name: "Rose Water", icon: "HeartIcon" },
    { name: "Gulkand", icon: "HeartIcon" },
    { name: "Pistachios", icon: "StarIcon" },
    { name: "Cardamom", icon: "SparklesIcon" }],

    allergens: ["Nuts"],
    dietary: ["Vegetarian"],
    nutritionalInfo: {
      calories: 80,
      protein: "1.8g",
      carbs: "14g",
      fat: "2.8g"
    },
    culturalNote: "Kesar paan has been a symbol of luxury and celebration in Indian culture, often served at weddings and special occasions."
  }];


  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSpiceLevel = selectedSpiceLevel === 'all' || item.spiceLevel === selectedSpiceLevel;
    const matchesSweetness = selectedSweetness === 'all' || item.sweetnessLevel === selectedSweetness;
    const matchesDietary =
    selectedDietary === 'all' ||
    selectedDietary === 'vegetarian' && item.dietary.includes('Vegetarian') ||
    selectedDietary === 'vegan' && item.dietary.includes('Vegan') ||
    selectedDietary === 'no-tobacco' && !item.allergens.includes('Tobacco');
    const matchesSearch =
    searchQuery === '' ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSpiceLevel && matchesSweetness && matchesDietary && matchesSearch;
  });

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSpiceLevel('all');
    setSelectedSweetness('all');
    setSelectedDietary('all');
    setSearchQuery('');
  };

  const handleOrderClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-surface rounded-lg w-1/3"></div>
            <div className="h-64 bg-surface rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-surface rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="font-headline text-4xl lg:text-5xl text-primary">
            Our Paan Collection
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our authentic range of traditional and innovative paan varieties, crafted with fresh ingredients and time-honored techniques. Each paan is a celebration of taste, culture, and quality.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search paan varieties by name or ingredients..."
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />

          </div>
        </div>

        {/* Filters */}
        <MenuFilters
          selectedCategory={selectedCategory}
          selectedSpiceLevel={selectedSpiceLevel}
          selectedSweetness={selectedSweetness}
          selectedDietary={selectedDietary}
          onCategoryChange={setSelectedCategory}
          onSpiceLevelChange={setSelectedSpiceLevel}
          onSweetnessChange={setSelectedSweetness}
          onDietaryChange={setSelectedDietary}
          onReset={handleResetFilters} />


        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="font-body text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredItems.length}</span> of{' '}
            <span className="font-semibold text-foreground">{menuItems.length}</span> varieties
          </p>
          {filteredItems.length === 0 &&
          <button
            onClick={handleResetFilters}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-body font-medium text-primary hover:bg-surface rounded-lg transition-colors duration-300">

              <Icon name="ArrowPathIcon" size={16} variant="outline" />
              <span>Clear All Filters</span>
            </button>
          }
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) =>
          <MenuCard key={item.id} item={item} onOrderClick={handleOrderClick} />
          )}
          </div> :

        <div className="text-center py-16 space-y-4">
            <Icon name="FaceFrownIcon" size={64} variant="outline" className="mx-auto text-muted-foreground" />
            <h3 className="font-headline text-2xl text-foreground">No Paan Varieties Found</h3>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              We couldn't find any paan varieties matching your filters. Try adjusting your search criteria or reset all filters.
            </p>
            <button
            onClick={handleResetFilters}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-opacity-90 transition-all duration-300">

              <Icon name="ArrowPathIcon" size={20} variant="outline" />
              <span>Reset All Filters</span>
            </button>
          </div>
        }

        {/* Cultural Note */}
        <div className="max-w-4xl mx-auto p-6 bg-accent/10 border-l-4 border-accent rounded-lg">
          <div className="flex items-start space-x-4">
            <Icon name="BookOpenIcon" size={24} variant="solid" className="text-accent flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-headline text-xl text-primary">About Paan Culture</h3>
              <p className="font-body text-sm text-foreground leading-relaxed">
                Paan has been an integral part of Indian culture for over 5,000 years. Traditionally served after meals as a digestive aid and mouth freshener, paan represents hospitality, celebration, and social bonding. Each region of India has developed its own unique paan varieties, reflecting local tastes and traditions. At Tawwakal Traders, we honor this rich heritage while maintaining the highest standards of hygiene and quality.
              </p>
            </div>
          </div>
        </div>

        {/* Bulk Order CTA */}
        <div className="max-w-4xl mx-auto p-6 bg-primary text-primary-foreground rounded-lg shadow-organic">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="font-headline text-2xl mb-2">Need Bulk Orders?</h3>
              <p className="font-body text-sm opacity-90">
                Planning an event or celebration? We offer special bulk order services with customization options.
              </p>
            </div>
            <a
              href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20bulk%20orders%20for%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-white text-primary rounded-lg font-cta font-bold hover:bg-opacity-90 shadow-organic transition-all duration-300">

              <Icon name="PhoneIcon" size={20} variant="solid" />
              <span>Contact for Bulk Orders</span>
            </a>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal isOpen={isModalOpen} item={selectedItem} onClose={handleCloseModal} />
    </div>);

};

export default PaanMenuInteractive;