// components/PageSection.tsx
import { ReactNode } from 'react';

interface PageSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageSection({ title, subtitle, children }: PageSectionProps) {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-400">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}