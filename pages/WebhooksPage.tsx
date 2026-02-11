import React from 'react';
import { Section } from '../components/Section';
import { CodeBlock } from '../components/CodeBlock';
import { PageNavigation } from '../components/PageNavigation';

export const WebhooksPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Webhooks</h1>
    <p className="text-lg text-slate-600">Simulate background notifications for status changes.</p>
    
    <Section title="Environment Setting">
      <p>Configure your default target URL in <code>.env</code>:</p>
      <CodeBlock code="MOCKPAY_DEFAULT_WEBHOOK_URL=http://localhost:3000/webhooks/mockpay" />
    </Section>

    <Section title="Configuration Options">
      <p>Use the CLI to test how your app handles different webhook scenarios:</p>
      <CodeBlock code="mockpay webhook config --delay 1000 --retry 2 --retry-delay 2000 --duplicate --drop" />
      <ul className="list-disc ml-6 space-y-2 mt-4 text-sm text-slate-500">
        <li><strong>--delay</strong>: Delay the initial hook send.</li>
        <li><strong>--retry</strong>: Simulate X failed attempts first.</li>
        <li><strong>--duplicate</strong>: Test idempotency by sending the same hook twice.</li>
        <li><strong>--drop</strong>: Silent failure; never send the hook.</li>
      </ul>
    </Section>

    <Section title="Last Event Resend">
      <CodeBlock code="mockpay webhook resend" />
    </Section>

    <PageNavigation 
      prev={{ label: 'API Endpoints', to: '/api' }} 
      next={{ label: 'Error Simulation', to: '/errors' }} 
    />
  </div>
);