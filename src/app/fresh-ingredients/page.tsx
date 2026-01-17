import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import FreshIngredientsInteractive from './components/FreshIngredientsInteractive';

export const metadata: Metadata = {
    title: 'Fresh Ingredients - Tawwakal Traders',
    description: 'Discover the premium quality ingredients that make our paan exceptional. From fresh betel leaves to aromatic spices, explore our commitment to quality, transparency, and traditional sourcing methods.',
};

export default function FreshIngredientsPage() {
    return (
        <>
            <Header />
            <main className="pt-16 lg:pt-20">
                <FreshIngredientsInteractive />
            </main>
        </>
    );
}