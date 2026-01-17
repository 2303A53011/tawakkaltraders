import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import QuickContactButtons from './components/QuickContactButtons';
import BulkOrderSection from './components/BulkOrderSection';
import LocationInfo from './components/LocationInfo';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
    title: 'Contact & Orders - Tawwakal Traders',
    description: 'Get in touch with Tawwakal Traders for paan orders, bulk catering, and event services. Multiple contact channels including WhatsApp, phone, and email for your convenience.',
};

export default function ContactOrdersPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-16 lg:pt-20">
                <ContactHero />
                <QuickContactButtons />
                <BulkOrderSection />
                <LocationInfo />
                <FAQSection />
            </main>

            <Footer />
        </div>
    );
}