import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PaanMenuInteractive from './components/PaanMenuInteractive';

export const metadata: Metadata = {
  title: 'Paan Menu - Tawwakal Traders',
  description: 'Explore our comprehensive collection of traditional and innovative paan varieties with detailed ingredient information, nutritional facts, and customization options. Fresh ingredients, authentic preparation, modern hygiene standards.',
};

export default function PaanMenuPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <PaanMenuInteractive />
      </main>
    </>
  );
}