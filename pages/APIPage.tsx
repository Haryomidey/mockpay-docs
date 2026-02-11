import React from 'react';
import { Section } from '../components/Section';
import { CodeBlock } from '../components/CodeBlock';
import { PageNavigation } from '../components/PageNavigation';

export const APIPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">API Coverage</h1>
    <p className="text-lg text-slate-600 mb-8">Mockpay implements the core functionality of the Paystack and Flutterwave APIs.</p>
    
    <Section title="Paystack Coverage">
      <div className="grid gap-3 mt-4">
        {[
          '/transaction/initialize',
          '/transaction/verify/:reference',
          '/transfer',
          '/banks'
        ].map(path => (
          <div key={path} className="p-3 border rounded-xl bg-slate-50 font-mono text-xs flex items-center justify-between">
            <span className="text-slate-900">{path}</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold uppercase">Mocked</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Flutterwave Coverage">
      <div className="grid gap-3 mt-4">
        {[
          '/payments',
          '/transactions/verify_by_reference?tx_ref=...',
          '/transactions/:id/verify',
          '/transfers'
        ].map(path => (
          <div key={path} className="p-3 border rounded-xl bg-slate-50 font-mono text-xs flex items-center justify-between">
            <span className="text-slate-900">{path}</span>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">Mocked</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Example: Paystack Verify">
      <CodeBlock code="curl http://localhost:4010/transaction/verify/PSK_1234567890_abcdef" />
    </Section>

    <Section title="Example: Flutterwave Verify by Reference">
      <CodeBlock code="curl 'http://localhost:4020/transactions/verify_by_reference?tx_ref=FLW_1234567890_abcdef'" />
    </Section>

    <PageNavigation 
      prev={{ label: 'CLI Commands', to: '/cli' }} 
      next={{ label: 'Webhooks', to: '/webhooks' }} 
    />
  </div>
);