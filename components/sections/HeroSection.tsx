'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const HeroSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white min-h-screen flex items-center">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Empower Your Business with Technology
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Indelible Technologies delivers innovative software solutions that transform how organizations manage education, payments, and financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => {
                  const element = document.getElementById('solutions');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-white rounded-lg opacity-10 transform rotate-3"></div>
            <div className="relative z-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center text-white text-center">
              <div>
                <p className="text-6xl font-bold mb-4">∞</p>
                <p className="text-2xl font-semibold">Limitless Possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
