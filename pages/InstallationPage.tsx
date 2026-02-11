import React from 'react';
import { Section } from '../components/Section';
import { CodeBlock } from '../components/CodeBlock';
import { PageNavigation } from '../components/PageNavigation';

export const InstallationPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Installation</h1>
    <p className="text-lg text-slate-600">Install Mockpay via NPM or Yarn. It is recommended to install it globally for CLI access.</p>
    
    <Section title="NPM">
      <CodeBlock code="npm install -g mockpay" />
    </Section>

    <Section title="Yarn">
      <CodeBlock code="yarn global add mockpay" />
    </Section>

    <Section title="Environment Configuration">
      <p>Mockpay can be customized using environment variables. Create a <code>.env</code> file in your project or adjust the global settings.</p>
      <CodeBlock language="env" code={`MOCKPAY_PAYSTACK_PORT=4010
MOCKPAY_FLUTTERWAVE_PORT=4020
MOCKPAY_DATA_DIR=.mockpay/data
MOCKPAY_DEFAULT_WEBHOOK_URL=http://localhost:3000/webhooks`} />
    </Section>

    <PageNavigation 
      prev={{ label: 'Introduction', to: '/' }} 
      next={{ label: 'Integration', to: '/integration' }} 
    />
  </div>
);