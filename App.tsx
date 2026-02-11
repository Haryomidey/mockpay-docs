import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, Twitter, Github } from 'lucide-react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { InstallationPage } from './pages/InstallationPage';
import { IntegrationPage } from './pages/IntegrationPage';
import { CLIPage } from './pages/CLIPage';
import { APIPage } from './pages/APIPage';
import { WebhooksPage } from './pages/WebhooksPage';
import { ErrorSimulationPage } from './pages/ErrorSimulationPage';
import { DevelopmentPage } from './pages/DevelopmentPage';
import { NPM_URL, GITHUB_URL, TWITTER_URL } from './constants';

export const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      
      <main className="pt-16 md:pl-72">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-12 md:py-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/installation" element={<InstallationPage />} />
            <Route path="/integration" element={<IntegrationPage />} />
            <Route path="/cli" element={<CLIPage />} />
            <Route path="/api" element={<APIPage />} />
            <Route path="/webhooks" element={<WebhooksPage />} />
            <Route path="/errors" element={<ErrorSimulationPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <footer className="md:pl-72 border-t border-slate-100 py-16 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 font-bold mb-4">
                <Box size={24} className="text-emerald-600" /> Mockpay
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed mx-auto md:mx-0">
                The open-source local server for African payment gateway integration. Speed up your fintech development cycles.
              </p>
            </div>
            <div>
              <h6 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Official Links</h6>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li><a href={NPM_URL} target="_blank" className="hover:text-emerald-600 transition-colors">NPM Package</a></li>
                <li><a href={GITHUB_URL} target="_blank" className="hover:text-emerald-600 transition-colors">GitHub</a></li>
                <li><a href="https://paystack.com" target="_blank" className="hover:text-emerald-600 transition-colors">Paystack API</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Community</h6>
              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li><a href={GITHUB_URL + "/issues"} target="_blank" className="hover:text-emerald-600 transition-colors">Issue Tracker</a></li>
                <li><a href={GITHUB_URL + "/discussions"} target="_blank" className="hover:text-emerald-600 transition-colors">Discussions</a></li>
                <li><a href={TWITTER_URL} target="_blank" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <Twitter size={14} /> Twitter (X)
                </a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
            <p>© {new Date().getFullYear()} Mockpay. Released under MIT License.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};