import React from 'react';
import { Section } from '../components/Section';
import { Alert } from '../components/Alert';
import { PageNavigation } from '../components/PageNavigation';

export const ErrorSimulationPage: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Error Simulation</h1>
    <p className="text-lg text-slate-600">Ensure your application fails gracefully by injecting errors manually.</p>

    <Section title="CLI Method">
      <p>Run these before your next API request to trigger the corresponding failure:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded-xl bg-red-50 border-red-100">
          <code className="block font-bold text-red-700 mb-1">error 500</code>
          <p className="text-xs text-red-600/80">Internal Server Error response.</p>
        </div>
        <div className="p-4 border rounded-xl bg-amber-50 border-amber-100">
          <code className="block font-bold text-amber-700 mb-1">error timeout</code>
          <p className="text-xs text-amber-600/80">15s wait then 504 Gateway Timeout.</p>
        </div>
        <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
          <code className="block font-bold text-slate-700 mb-1">error network</code>
          <p className="text-xs text-slate-500">Kills the socket without response.</p>
        </div>
      </div>
    </Section>

    <PageNavigation 
      prev={{ label: 'Webhooks', to: '/webhooks' }} 
      next={{ label: 'Development', to: '/development' }} 
    />
  </div>
);