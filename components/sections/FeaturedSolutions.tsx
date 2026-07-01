'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const solutions = [
  {
    title: 'Teachers Bank',
    description: 'Cooperative financial management system',
    details: 'Streamline member contributions, loan management, and financial reporting. Designed for organizations and member-based groups to manage finances efficiently.',
    features: ['Member contributions & savings', 'Loan application & approval', 'Financial reports & analytics', 'Comprehensive audit trails'],
    icon: '🏦',
  },
  {
    title: 'MsikaPos',
    description: 'Powerful point-of-sale system',
    details: 'Modern POS solution for retail and food businesses. Real-time inventory management, sales analytics, and customer relationship tools.',
    features: ['Real-time inventory', 'Sales analytics', 'Customer management', 'Receipt printing'],
    icon: '🛒',
  },
];

export const FeaturedSolutions: React.FC = () => {
  return (
    <Section id="solutions" className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="info" className="mb-4">Featured Solutions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Flagship Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{solution.icon}</div>
              <CardTitle>{solution.title}</CardTitle>
              <CardDescription className="mb-3">{solution.description}</CardDescription>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{solution.details}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
