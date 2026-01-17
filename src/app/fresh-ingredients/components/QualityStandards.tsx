import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QualityStandard {
    icon: string;
    title: string;
    description: string;
}

interface QualityStandardsProps {
    className?: string;
}

const QualityStandards = ({ className = '' }: QualityStandardsProps) => {
    const standards: QualityStandard[] = [
        {
            icon: 'TruckIcon',
            title: 'Daily Fresh Supply',
            description: 'Direct sourcing from verified suppliers ensures ingredients arrive fresh every morning.',
        },
        {
            icon: 'ClipboardDocumentCheckIcon',
            title: 'Traceability',
            description: 'Complete documentation from farm to shop, ensuring transparency in our supply chain.',
        },
        {
            icon: 'HomeModernIcon',
            title: 'Hygienic Storage',
            description: 'Temperature-controlled storage facilities maintain ingredient freshness and prevent contamination.',
        },
        {
            icon: 'UserGroupIcon',
            title: 'Trained Staff',
            description: 'Our team receives regular training on food safety, hygiene protocols, and quality standards.',
        },
    ];

    return (
        <section className={`bg-gradient-to-br from-primary/5 via-surface to-accent/5 py-16 lg:py-24 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                            <Icon name="CheckBadgeIcon" size={32} variant="solid" className="text-success" />
                        </div>
                        <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Our Quality Standards
                        </h2>
                        <p className="font-body text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                            We maintain the highest standards of quality, safety, and hygiene at every step of our ingredient sourcing and preparation process.
                        </p>
                    </div>

                    {/* Standards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {standards.map((standard, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-xl shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <Icon name={standard.icon as any} size={24} variant="solid" className="text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                                            {standard.title}
                                        </h3>
                                        <p className="font-body text-sm text-foreground/80 leading-relaxed">
                                            {standard.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certification Badges */}
                    <div className="mt-12 bg-card p-8 rounded-2xl shadow-organic border border-border">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left">
                                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                                    Certified & Trusted
                                </h3>
                                <p className="font-body text-sm text-muted-foreground">
                                    Our commitment to quality is backed by official certifications and regular audits.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="flex items-center space-x-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-lg border border-accent/20">
                                    <Icon name="StarIcon" size={20} variant="solid" />
                                    <span className="font-body text-sm font-semibold">5-Star Hygiene</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityStandards;