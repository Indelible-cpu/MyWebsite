'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card, CardContent } from '../ui/Card';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Finance Director, Global Education Institute',
    text: 'Teachers Bank has transformed how we manage school finances. The automation saved us countless hours every month.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Retail Manager, Urban Market',
    text: 'MsikaPos streamlined our entire POS operations. Customer support is exceptional and responsive.',
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'Academic Administrator, Technology University',
    text: 'EduPayTrack made student payments incredibly simple. The reporting features are outstanding.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Operations Head, Retail Chain',
    text: 'The integration capabilities of MsikaPos were exactly what we needed for our multi-location setup.',
    rating: 5,
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="info" className="mb-4 bg-blue-500 text-white">Client Success Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from organizations that have transformed their operations with our solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonials[currentIndex].text}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              onClick={prev}
            >
              ← Previous
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              onClick={next}
            >
              Next →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
