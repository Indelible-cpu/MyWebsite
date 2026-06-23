import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ className = '', children, ...props }) => {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${className}`} {...props}>
      {children}
    </section>
  );
};
