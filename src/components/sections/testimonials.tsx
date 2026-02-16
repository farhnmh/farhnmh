'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import IconButton from '@/components/general/icon-button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  return (
    <Container id="testimonials" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Nice things people have said about me:
        </Typography>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS?.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TestimonialDetails {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <IconButton onClick={goToPrevious} aria-label="Previous testimonial">
            <ChevronLeft />
          </IconButton>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gray-900'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <IconButton onClick={goToNext} aria-label="Next testimonial">
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
