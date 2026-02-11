import React from 'react';

interface SectionProps {
  title: string;
  children?: React.ReactNode;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="py-10 border-b border-slate-100 last:border-0 scroll-mt-24">
    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 group">
      <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity absolute md:relative -left-6 md:left-0">#</span>
      {title}
    </h2>
    <div className="text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);