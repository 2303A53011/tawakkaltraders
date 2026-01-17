'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
  rating: number;
  comment: string;
  date: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Regular Customer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c45de680-1763295122064.png",
    alt: "Middle-aged Indian man with mustache wearing white kurta smiling warmly",
    rating: 5,
    comment: "Best paan in the city! The quality of ingredients is exceptional, and the hygiene standards are impressive. I've been coming here for 3 years now, and they never disappoint. The meetha paan is absolutely divine!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Food Blogger",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c48da832-1763299032357.png",
    alt: "Young Indian woman with long black hair in traditional red saree smiling at camera",
    rating: 5,
    comment: "As a food blogger, I've tried paan from many places, but Tawwakal Traders stands out. Their chocolate paan is a game-changer! The staff is friendly, and the preparation is done right in front of you. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Mohammed Iqbal",
    role: "Business Owner",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_191d4b638-1763295605065.png",
    alt: "Professional Indian man in navy blue suit with beard looking confident",
    rating: 5,
    comment: "I order bulk paan for my business events, and Tawwakal Traders always delivers on time with consistent quality. Their fire paan is a hit among my guests. Excellent service and great taste!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Anita Desai",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1617593461584-4d51cc5cff4c",
    alt: "Elderly Indian woman with gray hair in green saree with warm smile",
    rating: 5,
    comment: "The traditional taste reminds me of my childhood. The gulkand they use is authentic, and you can taste the quality in every bite. My whole family loves their paan. Keep up the great work!",
    date: "1 week ago"
  }];


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-white ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-[#F7F5F0] rounded-full px-6 py-2 mb-4">
              <span className="font-body font-semibold text-[#1B4332]">Loading testimonials...</span>
            </div>
          </div>
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D4A574]/10 rounded-full px-6 py-2 mb-4">
            <Icon name="ChatBubbleLeftEllipsisIcon" size={20} variant="solid" className="text-[#D4A574]" />
            <span className="font-body font-semibold text-[#1B4332]">Customer Love</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[#1B4332] mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg text-[#718096]">
            Real experiences from real people who love our paan and service.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1B4332] to-[#2D5A3D] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.5 0 0 13.5 0 30s13.5 30 30 30 30-13.5 30-30S46.5 0 30 0zm0 55C16.2 55 5 43.8 5 30S16.2 5 30 5s25 11.2 25 25-11.2 25-25 25z' fill='%23D4A574'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-[#D4A574]/20 rounded-full flex items-center justify-center">
                  <Icon name="ChatBubbleLeftEllipsisIcon" size={32} variant="solid" className="text-[#D4A574]" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center space-y-6">
                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, index) =>
                  <Icon key={index} name="StarIcon" size={24} variant="solid" className="text-[#D4A574]" />
                  )}
                </div>

                {/* Comment */}
                <p className="font-body text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                  "{currentTestimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex flex-col items-center space-y-4 pt-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#D4A574]">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="font-headline text-xl font-bold text-white">
                      {currentTestimonial.name}
                    </div>
                    <div className="font-body text-sm text-white/70">
                      {currentTestimonial.role} • {currentTestimonial.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeftIcon" size={24} variant="outline" className="text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#D4A574] w-8' : 'bg-white/30'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRightIcon" size={24} variant="outline" className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="font-headline text-4xl font-bold text-[#1B4332] mb-2">500+</div>
              <div className="font-body text-sm text-[#718096]">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-4xl font-bold text-[#1B4332] mb-2">4.8★</div>
              <div className="font-body text-sm text-[#718096]">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-4xl font-bold text-[#1B4332] mb-2">3+</div>
              <div className="font-body text-sm text-[#718096]">Years Serving</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;