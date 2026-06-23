'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Card, CardContent, CardTitle } from '../ui/Card';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions built to your exact specifications',
    icon: '💻',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure setup',
    icon: '☁️',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    icon: '📱',
  },
  {
    title: 'API Integration',
    description: 'Seamless third-party system integration',
    icon: '🔗',
  },
  {
    title: 'Consulting & Strategy',
    description: 'Expert guidance on digital transformation',
    icon: '🎯',
  },
  {
    title: 'Support & Maintenance',
    description: '24/7 technical support and system maintenance',
    icon: '🛠️',
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consulting to implementation, we provide end-to-end services for your technology needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardContent>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
