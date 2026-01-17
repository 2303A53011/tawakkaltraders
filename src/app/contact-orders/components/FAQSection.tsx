'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string>('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 'faq1',
      question: 'What is the minimum order quantity for bulk orders?',
      answer: 'Our minimum bulk order quantity varies by package type. Wedding packages start at 100 pieces, corporate packages at 50 pieces, festival packages at 75 pieces, and party packages at 30 pieces. We can accommodate smaller custom orders on request.',
      category: 'Bulk Orders'
    },
    {
      id: 'faq2',
      question: 'How far in advance should I place my order?',
      answer: 'For regular orders, we recommend ordering at least 2-3 hours in advance. For bulk orders and event catering, please book 3-7 days ahead to ensure availability and allow time for customization. Last-minute orders may be accommodated based on availability.',
      category: 'Ordering'
    },
    {
      id: 'faq3',
      question: 'Do you offer delivery services?',
      answer: 'Yes! We offer free delivery within a 5km radius of our shop. For locations beyond 5km, delivery charges apply based on distance. We also provide on-site preparation services for large events with advance booking.',
      category: 'Delivery'
    },
    {
      id: 'faq4',
      question: 'Can I customize the ingredients in my paan?',
      answer: 'Absolutely! We pride ourselves on customization. You can choose your preferred ingredients, adjust sweetness levels, and even create your own unique combination. Our staff will guide you through the options to create your perfect paan.',
      category: 'Customization'
    },
    {
      id: 'faq5',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, UPI payments (Google Pay, PhonePe, Paytm), credit/debit cards, and bank transfers. For bulk orders, we require 50% advance payment with the balance due on delivery.',
      category: 'Payment'
    },
    {
      id: 'faq6',
      question: 'Are your ingredients fresh and hygienic?',
      answer: 'Quality and hygiene are our top priorities. We source fresh ingredients daily from trusted suppliers, maintain strict hygiene standards in preparation, and follow all food safety protocols. Our preparation area is regularly sanitized and staff wear gloves during preparation.',
      category: 'Quality'
    },
    {
      id: 'faq7',
      question: 'Do you cater to dietary restrictions?',
      answer: 'Yes, we can accommodate various dietary preferences. We offer sugar-free options, nut-free preparations, and can adjust ingredients based on allergies or dietary restrictions. Please inform us of any specific requirements when ordering.',
      category: 'Dietary'
    },
    {
      id: 'faq8',
      question: 'Can I get a tasting session before placing a bulk order?',
      answer: 'Absolutely! We offer complimentary tasting sessions for bulk orders above 100 pieces. This allows you to sample different varieties and finalize your selection. Please schedule an appointment at least 3 days before your event.',
      category: 'Bulk Orders'
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? '' : id);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto mb-8"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Icon name="QuestionMarkCircleIcon" size={32} variant="solid" className="text-primary" />
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-text-secondary text-lg">
              Find answers to common questions about our services and ordering process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card rounded-xl shadow-organic overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-300"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-cta font-semibold rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-cta text-lg font-bold text-foreground">{faq.question}</h3>
                  </div>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                    <Icon name="ChevronDownIcon" size={24} variant="outline" className="text-primary" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="font-body text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary to-brand-dark-green rounded-2xl p-8 text-center">
            <Icon name="ChatBubbleLeftRightIcon" size={48} variant="solid" className="text-accent mx-auto mb-4" />
            <h3 className="font-headline text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="font-body text-white/90 mb-6 max-w-2xl mx-auto">
              Our friendly team is here to help! Reach out via WhatsApp, phone, or email and we'll respond promptly.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%20Tawwakal%20Traders!%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-orange-cta hover:bg-brand-orange-cta/90 text-white font-cta font-bold px-8 py-4 rounded-lg shadow-organic hover:shadow-organic-lg transition-all duration-300"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;