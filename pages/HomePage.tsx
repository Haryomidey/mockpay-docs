import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Globe, Zap, Bug, ArrowRight, Github } from 'lucide-react';
import { Section } from '../components/Section';
import { CodeBlock } from '../components/CodeBlock';
import { PageNavigation } from '../components/PageNavigation';
import { GITHUB_URL, VERSION } from '../constants';

export const HomePage: React.FC = () => (
  <div className="max-w-4xl">
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
        <Activity size={12} /> Version {VERSION} is live
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
        The Missing Piece for African <span className="text-emerald-600">Payments</span>.
      </h1>
      <p className="text-xl text-slate-600 leading-9 max-w-2xl">
        Local mock Paystack and Flutterwave servers for offline/local testing. Replace live gateway URLs in development to simulate outcomes, errors, and webhooks instantly.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <NavLink to="/installation" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xl shadow-slate-200 transition-all flex items-center gap-2">
          Start Mocking <ArrowRight size={18} />
        </NavLink>
        <a href={GITHUB_URL} target="_blank" className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl shadow-sm flex items-center gap-2 transition-all">
          <Github size={20} /> GitHub
        </a>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
      <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
        <div className="text-emerald-600 mb-4 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
          <Globe size={12} /> Paystack Default
        </div>
        <p className="font-mono text-sm text-slate-900 font-bold">http://localhost:4010</p>
        <p className="text-[11px] text-slate-400 mt-2">Hosted checkout: /checkout</p>
      </div>
      <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
        <div className="text-blue-600 mb-4 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
          <Globe size={12} /> Flutterwave Default
        </div>
        <p className="font-mono text-sm text-slate-900 font-bold">http://localhost:4020</p>
        <p className="text-[11px] text-slate-400 mt-2">Hosted checkout: /checkout</p>
      </div>
    </div>

    <Section title="Overview">
      <p>Mockpay is designed to help African developers build and test fintech applications faster. By running local servers that mimic Paystack and Flutterwave, you eliminate the need for constant internet access and wait times associated with live test sandboxes.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Zap size={18} className="text-amber-500" /> Instant Speed
          </h4>
          <p className="text-sm text-slate-500">Local processing means sub-millisecond response times for all API calls.</p>
        </div>
        <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Bug size={18} className="text-red-500" /> Forced Failures
          </h4>
          <p className="text-sm text-slate-500">Inject 500s, timeouts, or network drops manually via CLI to test your logic.</p>
        </div>
      </div>
    </Section>

    <Section title="Quick Start">
      <CodeBlock code="npm i -g mockpay\nmockpay start" />
      <p className="mt-4 text-sm">Once running, point your application to the local ports instead of the live API endpoints.</p>
    </Section>

    <PageNavigation next={{ label: 'Installation', to: '/installation' }} />
  </div>
);