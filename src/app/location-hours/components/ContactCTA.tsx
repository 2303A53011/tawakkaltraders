import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
    type: string;
    icon: string;
    label: string;
    value: string;
    action: string;
    href: string;
}

interface ContactCTAProps {
    contactMethods: ContactMethod[];
}

const ContactCTA = ({ contactMethods }: ContactCTAProps) => {
    return (
        <section className="py-12 lg:py-16 bg-gradient-to-br from-primary via-brand-dark-green to-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-headline text-3xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Visit or Order?
                    </h2>
                    <p className="font-body text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Get in touch with us through your preferred method. We&apos;re here to serve you!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.href}
                                target={method.type === 'whatsapp' ? '_blank' : undefined}
                                rel={method.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                                className="bg-white rounded-xl shadow-organic p-6 hover:shadow-organic-lg transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon name={method.icon as any} size={32} variant="solid" className="text-primary" />
                                    </div>
                                    <h3 className="font-body font-semibold text-lg text-primary mb-2">
                                        {method.label}
                                    </h3>
                                    <p className="font-body text-sm text-text-secondary mb-3">
                                        {method.value}
                                    </p>
                                    <span className="inline-flex items-center space-x-1 text-brand-orange-cta font-body font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                        <span>{method.action}</span>
                                        <Icon name="ArrowRightIcon" size={16} variant="outline" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                    <Icon name="ClockIcon" size={24} variant="solid" className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-body font-semibold text-white mb-1">Quick Response</h4>
                                    <p className="font-body text-sm text-white/80">
                                        We typically respond within 5-10 minutes during business hours
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                    <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" className="text-white" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-body font-semibold text-white mb-1">Bulk Orders Welcome</h4>
                                    <p className="font-body text-sm text-white/80">
                                        Special arrangements for events and celebrations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;