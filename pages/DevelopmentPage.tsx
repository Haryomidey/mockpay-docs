import React from 'react';
import { Section } from '../components/Section';
import { CodeBlock } from '../components/CodeBlock';
import { PageNavigation } from '../components/PageNavigation';

export const DevelopmentPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Development</h1>
    
    <Section title="Local Repository">
      <p>Clone and contribute to the Mockpay project on GitHub.</p>
      <CodeBlock code="git clone https://github.com/Haryomidey/mockpay.git\nnpm install\nnpm run dev" />
    </Section>

    <Section title="Data Storage">
      <p>Mockpay uses <strong>ChronoDB</strong> for persistence. Transactions are stored as simple files in your <code>MOCKPAY_DATA_DIR</code>.</p>
    </Section>

    <Section title="Building the Checkout">
      <p>If you're modifying the hosted checkout UI, you must build the template:</p>
      <CodeBlock code="npm --prefix template install\nnpm --prefix template run build" />
    </Section>

    <PageNavigation prev={{ label: 'Error Simulation', to: '/errors' }} />
  </div>
);