import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LocationInteractive from './components/LocationInteractive';

export const metadata: Metadata = {
  title: 'Location & Hours - Tawwakal Traders',
  description: 'Find Tawwakal Traders paan shop with easy directions, nearby landmarks, opening hours, real-time crowd levels, and delivery coverage. Visit us for authentic fresh paan in a convenient location.',
};

export default function LocationHoursPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <LocationInteractive />
      </div>
    </main>
  );
}