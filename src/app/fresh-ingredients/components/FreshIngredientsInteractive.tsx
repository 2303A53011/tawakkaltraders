'use client';

import React, { useState, useEffect } from 'react';
import IngredientHero from './IngredientHero';
import CategoryFilter from './CategoryFilter';
import IngredientCard from './IngredientCard';
import IngredientModal from './IngredientModal';
import QualityStandards from './QualityStandards';
import type { Ingredient } from './IngredientCard';

const FreshIngredientsInteractive = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All Ingredients');
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const ingredients: Ingredient[] = [
        {
            id: 1,
            name: 'Betel Leaves',
            hindiName: 'पान के पत्ते',
            category: 'Base Ingredients',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2e18143-1767094329347.png",
            alt: 'Fresh green betel leaves arranged on wooden surface with water droplets',
            origin: 'Karnataka, India',
            description: 'Premium quality betel leaves sourced from organic farms in Karnataka. These heart-shaped leaves form the foundation of every paan, providing a distinctive mild peppery flavor and numerous health benefits.',
            healthBenefits: [
                { icon: 'HeartIcon', benefit: 'Aids digestion' },
                { icon: 'SparklesIcon', benefit: 'Freshens breath' },
                { icon: 'ShieldCheckIcon', benefit: 'Antimicrobial properties' },
                { icon: 'BoltIcon', benefit: 'Boosts metabolism' }],

            nutritionalInfo: {
                calories: '44 kcal',
                protein: '3.1g',
                fiber: '2.3g',
                vitamins: 'A, C, B1'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Stored in cool, humid conditions wrapped in damp cloth to maintain freshness for 2-3 days.',
            supplierCertification: 'Certified organic farms with FSSAI approval and regular quality audits.',
            traditionalUse: 'Used for centuries in Ayurvedic medicine and as a digestive aid after meals in Indian culture.',
            flavorProfile: 'Mildly peppery with subtle sweetness and aromatic notes'
        },
        {
            id: 2,
            name: 'Gulkand',
            hindiName: 'गुलकंद',
            category: 'Sweet Fillings',
            image: "https://images.unsplash.com/photo-1607201394844-dcc8d762b797",
            alt: 'Rose petal preserve in glass jar with pink color and syrupy texture',
            origin: 'Maharashtra, India',
            description: 'Traditional rose petal preserve made from handpicked Damask roses. This sweet, cooling delicacy is prepared by layering rose petals with sugar and allowing them to mature naturally over several weeks.',
            healthBenefits: [
                { icon: 'FireIcon', benefit: 'Cooling effect' },
                { icon: 'HeartIcon', benefit: 'Reduces acidity' },
                { icon: 'FaceSmileIcon', benefit: 'Improves skin health' },
                { icon: 'BoltIcon', benefit: 'Energy booster' }],

            nutritionalInfo: {
                calories: '65 kcal',
                protein: '0.5g',
                fiber: '1.2g',
                vitamins: 'C, E'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Refrigerated in airtight glass containers to preserve flavor and prevent fermentation.',
            supplierCertification: 'Traditional manufacturers with heritage recipes and FSSAI food safety certification.',
            traditionalUse: 'Ayurvedic remedy for heat-related ailments and digestive issues, commonly consumed in summer months.',
            flavorProfile: 'Sweet, floral, and cooling with delicate rose essence'
        },
        {
            id: 3,
            name: 'Supari',
            hindiName: 'सुपारी',
            category: 'Base Ingredients',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba2f7d76-1767969235538.png",
            alt: 'Sliced areca nut pieces in brown color arranged in traditional brass container',
            origin: 'Karnataka, India',
            description: 'Premium areca nut slices carefully processed from mature nuts. These provide the characteristic crunch and mild stimulant effect that defines traditional paan consumption.',
            healthBenefits: [
                { icon: 'BoltIcon', benefit: 'Mild stimulant' },
                { icon: 'SparklesIcon', benefit: 'Oral health' },
                { icon: 'HeartIcon', benefit: 'Digestive aid' }],

            nutritionalInfo: {
                calories: '233 kcal',
                protein: '5.8g',
                fiber: '18.2g',
                vitamins: 'B1, B2'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Stored in dry, airtight containers away from moisture to maintain crispness.',
            supplierCertification: 'Sourced from certified plantations with quality grading and safety testing.',
            traditionalUse: 'Central ingredient in paan for over 2000 years, used in religious ceremonies and social gatherings.',
            flavorProfile: 'Mildly bitter with earthy, nutty undertones'
        },
        {
            id: 4,
            name: 'Fennel Seeds',
            hindiName: 'सौंफ',
            category: 'Aromatic Spices',
            image: "https://images.unsplash.com/photo-1542826530-6dac9c71311f",
            alt: 'Green fennel seeds in wooden spoon with aromatic appearance',
            origin: 'Gujarat, India',
            description: 'Sweet, aromatic fennel seeds that add a refreshing licorice-like flavor to paan. These seeds are known for their digestive properties and breath-freshening qualities.',
            healthBenefits: [
                { icon: 'HeartIcon', benefit: 'Aids digestion' },
                { icon: 'SparklesIcon', benefit: 'Freshens breath' },
                { icon: 'ShieldCheckIcon', benefit: 'Anti-inflammatory' },
                { icon: 'FireIcon', benefit: 'Reduces bloating' }],

            nutritionalInfo: {
                calories: '345 kcal',
                protein: '15.8g',
                fiber: '39.8g',
                vitamins: 'C, A'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Kept in sealed containers in cool, dry place to preserve aromatic oils.',
            supplierCertification: 'Premium grade fennel from certified organic farms with purity testing.',
            traditionalUse: 'Traditional mouth freshener and digestive aid consumed after meals across India.',
            flavorProfile: 'Sweet, licorice-like with refreshing aromatic notes'
        },
        {
            id: 5,
            name: 'Mukhwas',
            hindiName: 'मुखवास',
            category: 'Aromatic Spices',
            image: "https://images.unsplash.com/photo-1723771667654-9f5b20d6741d",
            alt: 'Colorful mixed mukhwas seeds and spices in decorative silver bowl',
            origin: 'Gujarat, India',
            description: 'Traditional Indian mouth freshener blend containing fennel seeds, sesame seeds, coconut, and aromatic spices. Each batch is carefully mixed to create the perfect balance of flavors.',
            healthBenefits: [
                { icon: 'SparklesIcon', benefit: 'Breath freshener' },
                { icon: 'HeartIcon', benefit: 'Digestive support' },
                { icon: 'FaceSmileIcon', benefit: 'Oral hygiene' }],

            nutritionalInfo: {
                calories: '298 kcal',
                protein: '12.4g',
                fiber: '28.5g',
                vitamins: 'E, B complex'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Stored in airtight containers to maintain crunchiness and prevent moisture absorption.',
            supplierCertification: 'Traditional manufacturers following heritage recipes with modern hygiene standards.',
            traditionalUse: 'Served at the end of meals in Indian households and restaurants for centuries.',
            flavorProfile: 'Complex blend of sweet, savory, and aromatic flavors'
        },
        {
            id: 6,
            name: 'Cashew Nuts',
            hindiName: 'काजू',
            category: 'Nuts & Seeds',
            image: "https://images.unsplash.com/photo-1493807742375-fbc46d996e8f",
            alt: 'Whole cashew nuts in cream color arranged on rustic wooden board',
            origin: 'Kerala, India',
            description: 'Premium quality cashew nuts that add a rich, buttery crunch to special paan varieties. These nuts are carefully selected for size, freshness, and flavor.',
            healthBenefits: [
                { icon: 'HeartIcon', benefit: 'Heart healthy fats' },
                { icon: 'BoltIcon', benefit: 'Energy boost' },
                { icon: 'ShieldCheckIcon', benefit: 'Rich in minerals' }],

            nutritionalInfo: {
                calories: '553 kcal',
                protein: '18.2g',
                fiber: '3.3g',
                vitamins: 'E, K, B6'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Refrigerated in sealed containers to prevent rancidity and maintain freshness.',
            supplierCertification: 'Premium grade cashews from certified processors with quality grading.',
            traditionalUse: 'Added to premium paan varieties for special occasions and celebrations.',
            flavorProfile: 'Rich, buttery, and mildly sweet with creamy texture'
        },
        {
            id: 7,
            name: 'Dates',
            hindiName: 'खजूर',
            category: 'Sweet Fillings',
            image: "https://images.unsplash.com/photo-1728487892229-101ee1d105ce",
            alt: 'Fresh brown dates with wrinkled texture arranged in traditional basket',
            origin: 'Rajasthan, India',
            description: 'Naturally sweet dates that provide a healthy alternative to refined sugar in paan. These are carefully pitted and chopped to create a smooth, sweet filling.',
            healthBenefits: [
                { icon: 'BoltIcon', benefit: 'Natural energy' },
                { icon: 'HeartIcon', benefit: 'Rich in fiber' },
                { icon: 'ShieldCheckIcon', benefit: 'Antioxidants' },
                { icon: 'FireIcon', benefit: 'Improves digestion' }],

            nutritionalInfo: {
                calories: '282 kcal',
                protein: '2.5g',
                fiber: '8g',
                vitamins: 'B6, K'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Stored in cool, dry place in sealed containers to prevent hardening.',
            supplierCertification: 'Premium quality dates from certified suppliers with hygiene compliance.',
            traditionalUse: 'Natural sweetener used in traditional Indian sweets and health preparations.',
            flavorProfile: 'Intensely sweet with caramel-like notes and chewy texture'
        },
        {
            id: 8,
            name: 'Cardamom',
            hindiName: 'इलायची',
            category: 'Aromatic Spices',
            image: "https://images.unsplash.com/photo-1701166627787-12d9fdd437cc",
            alt: 'Green cardamom pods in small pile showing natural texture and color',
            origin: 'Kerala, India',
            description: 'Premium green cardamom pods known as the "Queen of Spices". These provide an intense, sweet-spicy aroma that elevates the paan experience to luxury status.',
            healthBenefits: [
                { icon: 'SparklesIcon', benefit: 'Breath freshener' },
                { icon: 'HeartIcon', benefit: 'Digestive aid' },
                { icon: 'ShieldCheckIcon', benefit: 'Antioxidant rich' },
                { icon: 'FireIcon', benefit: 'Detoxifying' }],

            nutritionalInfo: {
                calories: '311 kcal',
                protein: '10.8g',
                fiber: '28g',
                vitamins: 'C, B complex'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Stored in airtight containers away from light to preserve essential oils.',
            supplierCertification: 'Premium grade cardamom from certified organic plantations.',
            traditionalUse: 'Used in Ayurvedic medicine and as a premium spice in Indian cuisine for millennia.',
            flavorProfile: 'Intensely aromatic with sweet, spicy, and slightly minty notes'
        },
        {
            id: 9,
            name: 'Saffron',
            hindiName: 'केसर',
            category: 'Garnishes',
            image: "https://images.unsplash.com/photo-1564057779901-11451bfca03b",
            alt: 'Red saffron threads in small glass container showing delicate strands',
            origin: 'Kashmir, India',
            description: 'The world\'s most expensive spice, Kashmiri saffron adds a luxurious golden hue and distinctive flavor to premium paan varieties. Each strand is hand-harvested from crocus flowers.',
            healthBenefits: [
                { icon: 'FaceSmileIcon', benefit: 'Mood enhancer' },
                { icon: 'ShieldCheckIcon', benefit: 'Antioxidant' },
                { icon: 'HeartIcon', benefit: 'Heart health' }],

            nutritionalInfo: {
                calories: '310 kcal',
                protein: '11.4g',
                fiber: '3.9g',
                vitamins: 'A, C, B6'
            },
            seasonalAvailability: 'Limited seasonal',
            storageMethod: 'Stored in airtight containers in cool, dark place to preserve color and aroma.',
            supplierCertification: 'Authentic Kashmiri saffron with geographical indication certification.',
            traditionalUse: 'Reserved for royal and ceremonial preparations, symbol of luxury in Indian culture.',
            flavorProfile: 'Subtle, honey-like sweetness with earthy, floral undertones'
        },
        {
            id: 10,
            name: 'Coconut Flakes',
            hindiName: 'नारियल',
            category: 'Garnishes',
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_12071c081-1766578845491.png",
            alt: 'White coconut flakes in wooden bowl showing fresh texture',
            origin: 'Kerala, India',
            description: 'Freshly grated coconut flakes that add a sweet, tropical flavor and pleasant texture to paan. These are prepared daily to ensure maximum freshness and flavor.',
            healthBenefits: [
                { icon: 'BoltIcon', benefit: 'Quick energy' },
                { icon: 'HeartIcon', benefit: 'Healthy fats' },
                { icon: 'ShieldCheckIcon', benefit: 'Antimicrobial' }],

            nutritionalInfo: {
                calories: '354 kcal',
                protein: '3.3g',
                fiber: '9g',
                vitamins: 'C, E, B'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Refrigerated in sealed containers and used within 24 hours for optimal freshness.',
            supplierCertification: 'Fresh coconuts from certified organic farms with daily processing.',
            traditionalUse: 'Essential ingredient in South Indian cuisine and religious offerings.',
            flavorProfile: 'Sweet, nutty, and tropical with soft, chewy texture'
        },
        {
            id: 11,
            name: 'Cherry',
            hindiName: 'चेरी',
            category: 'Garnishes',
            image: "https://images.unsplash.com/photo-1430411786307-2ec9ac23b843",
            alt: 'Bright red cherries with glossy appearance in decorative bowl',
            origin: 'Himachal Pradesh, India',
            description: 'Candied cherries that add a pop of color and sweet-tart flavor to paan. These are carefully preserved to maintain their vibrant color and juicy texture.',
            healthBenefits: [
                { icon: 'ShieldCheckIcon', benefit: 'Antioxidants' },
                { icon: 'HeartIcon', benefit: 'Anti-inflammatory' },
                { icon: 'FaceSmileIcon', benefit: 'Vitamin C' }],

            nutritionalInfo: {
                calories: '50 kcal',
                protein: '1g',
                fiber: '1.6g',
                vitamins: 'C, A'
            },
            seasonalAvailability: 'Seasonal (Summer)',
            storageMethod: 'Stored in sugar syrup in refrigerated conditions to maintain freshness.',
            supplierCertification: 'Premium quality cherries from certified hill station orchards.',
            traditionalUse: 'Modern addition to paan for visual appeal and flavor enhancement.',
            flavorProfile: 'Sweet-tart with juicy texture and vibrant appearance'
        },
        {
            id: 12,
            name: 'Silver Leaf',
            hindiName: 'चांदी का वर्क',
            category: 'Garnishes',
            image: "https://images.unsplash.com/photo-1587426181476-cde17184d73a",
            alt: 'Delicate silver leaf sheets showing metallic sheen on white surface',
            origin: 'Rajasthan, India',
            description: 'Edible silver leaf (vark) that adds a touch of luxury and elegance to premium paan varieties. These ultra-thin sheets are carefully applied as the final garnish.',
            healthBenefits: [
                { icon: 'SparklesIcon', benefit: 'Cooling effect' },
                { icon: 'ShieldCheckIcon', benefit: 'Antimicrobial' },
                { icon: 'FaceSmileIcon', benefit: 'Digestive aid' }],

            nutritionalInfo: {
                calories: '0 kcal',
                protein: '0g',
                fiber: '0g',
                vitamins: 'None'
            },
            seasonalAvailability: 'Year-round',
            storageMethod: 'Stored between tissue papers in airtight containers away from moisture.',
            supplierCertification: 'Food-grade silver from certified manufacturers with purity testing.',
            traditionalUse: 'Symbol of luxury and celebration in Indian sweets and special preparations.',
            flavorProfile: 'Neutral taste with luxurious visual appeal'
        }];


    const categories = ['All Ingredients', 'Base Ingredients', 'Sweet Fillings', 'Aromatic Spices', 'Nuts & Seeds', 'Garnishes'];

    const filteredIngredients = isHydrated ?
        activeCategory === 'All Ingredients' ?
            ingredients :
            ingredients.filter((ing) => ing.category === activeCategory) :
        ingredients;

    const handleCategoryChange = (category: string) => {
        if (!isHydrated) return;
        setActiveCategory(category);
    };

    const handleViewDetails = (ingredient: Ingredient) => {
        if (!isHydrated) return;
        setSelectedIngredient(ingredient);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (!isHydrated) return;
        setIsModalOpen(false);
        setTimeout(() => setSelectedIngredient(null), 300);
    };

    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-background">
                <IngredientHero />
                <div className="container mx-auto px-4 py-12">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={() => { }} />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {ingredients.slice(0, 6).map((ingredient) =>
                            <IngredientCard
                                key={ingredient.id}
                                ingredient={ingredient}
                                onViewDetails={() => { }} />

                        )}
                    </div>
                </div>
                <QualityStandards />
            </div>);

    }

    return (
        <div className="min-h-screen bg-background">
            <IngredientHero />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                {/* Category Filter */}
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange} />


                {/* Ingredients Grid */}
                <div className="mt-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-headline text-2xl lg:text-3xl font-bold text-foreground">
                            {activeCategory}
                        </h2>
                        <p className="font-body text-sm text-muted-foreground">
                            {filteredIngredients.length} {filteredIngredients.length === 1 ? 'ingredient' : 'ingredients'}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredIngredients.map((ingredient) =>
                            <IngredientCard
                                key={ingredient.id}
                                ingredient={ingredient}
                                onViewDetails={handleViewDetails} />

                        )}
                    </div>
                </div>
            </div>



            {/* Quality Standards Section */}
            <QualityStandards />

            {/* Ingredient Detail Modal */}
            <IngredientModal
                ingredient={selectedIngredient}
                isOpen={isModalOpen}
                onClose={handleCloseModal} />

        </div>);

};

export default FreshIngredientsInteractive;