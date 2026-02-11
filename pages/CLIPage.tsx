import React from 'react';
import { Terminal } from 'lucide-react';
import { Section } from '../components/Section';
import { Alert } from '../components/Alert';
import { PageNavigation } from '../components/PageNavigation';

const COMMANDS = [
  { cmd: 'mockpay start', desc: 'Starts both Paystack (4010) and Flutterwave (4020) servers.' },
  { cmd: 'mockpay stop', desc: 'Stops all active mock servers.' },
  { cmd: 'mockpay status', desc: 'Checks running status and configured ports.' },
  { cmd: 'mockpay pay success|fail|cancel', desc: 'Determines the outcome of the NEXT payment session.' },
  { cmd: 'mockpay error 500|timeout|network', desc: 'Forces the NEXT API request to fail with specified error.' },
  { cmd: 'mockpay webhook resend', desc: 'Resends the last recorded webhook event.' },
  { cmd: 'mockpay webhook config', desc: 'Configure webhook behavior like delay, retry, or drops.' },
  { cmd: 'mockpay logs', desc: 'Streams live server logs (SSE).' },
  { cmd: 'mockpay reset', desc: 'Clears all transaction data from ChronoDB.' },
];

export const CLIPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">CLI Commands</h1>
    <p className="text-lg text-slate-600 mb-10">Control every aspect of your local mock environment.</p>
    
    <div className="grid gap-6">
      {COMMANDS.map((item, i) => (
        <div key={i} className="group p-6 border border-slate-200 rounded-2xl hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={18} className="text-emerald-500" />
            <code className="text-lg font-bold text-slate-900">{item.cmd}</code>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>

    <Alert type="info">
      Note: Commands like <code>pay</code> and <code>error</code> only apply to the <strong>next</strong> transaction/request, then revert to their defaults.
    </Alert>

    <PageNavigation 
      prev={{ label: 'Integration', to: '/integration' }} 
      next={{ label: 'API Endpoints', to: '/api' }} 
    />
  </div>
);