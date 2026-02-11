import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/Section';
import { PageNavigation } from '../components/PageNavigation';

export const IntegrationPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Integration</h1>
    <p className="text-lg text-slate-600">Learn how to swap live gateway URLs for local Mockpay servers.</p>

    <Section title="Goal">
      <p>Replace these URLs in your development environment:</p>
      <ul className="space-y-4 mt-4">
        <li className="flex items-center gap-3">
          <ArrowRight size={14} className="text-emerald-500" />
          <span>Instead of <code>https://api.paystack.co</code>, use <code>http://localhost:4010</code></span>
        </li>
        <li className="flex items-center gap-3">
          <ArrowRight size={14} className="text-emerald-500" />
          <span>Instead of <code>https://api.flutterwave.com/v3</code>, use <code>http://localhost:4020</code></span>
        </li>
      </ul>
    </Section>

    <Section title="Typical Integration Flow">
      <div className="space-y-8 mt-6">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">1</div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">Initialize Transaction</h4>
            <p className="text-sm">Call <code>/transaction/initialize</code> or <code>/payments</code> from your backend.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">2</div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">Open Checkout</h4>
            <p className="text-sm">Redirect the user to the returned <code>authorization_url</code> (Paystack) or <code>link</code> (Flutterwave).</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">3</div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">Complete Mock Payment</h4>
            <p className="text-sm">On the mock checkout screen, manually trigger <strong>Success</strong>, <strong>Fail</strong>, or <strong>Cancel</strong>.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">4</div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">Verify Outcome</h4>
            <p className="text-sm">Use the standard verification endpoints to check if the payment was successful.</p>
          </div>
        </div>
      </div>
    </Section>

    <PageNavigation 
      prev={{ label: 'Installation', to: '/installation' }} 
      next={{ label: 'CLI Commands', to: '/cli' }} 
    />
  </div>
);