'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';

const stats = [
  {
    value: '500+',
    label: 'Active Users',
    description: 'Across multiple organizations worldwide',
  },
  {
    value: '$50M+',
    label: 'Transactions Processed',
    description: 'Securely handled through our platforms',
  },
  {
    value: '98%',
    label: 'Customer Satisfaction',
    description: 'Consistently high satisfaction ratings',
  },
  {
    value: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock technical assistance',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="info" className="mb-4 bg-white bg-opacity-20 text-white">By The Numbers</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl md:text-2xl font-semibold mb-2">{stat.label}</div>
              <p className="text-blue-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
