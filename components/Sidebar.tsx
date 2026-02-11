import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, Box, BookOpen, Cpu, Layers, Terminal, Code, Webhook, Bug, Settings, Github, Package 
} from 'lucide-react';
import { GITHUB_URL, NPM_URL } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const SidebarLink = ({ to, children, icon: Icon, onClick }: { to: string; children?: React.ReactNode; icon: any; onClick?: () => void }) => (
  <NavLink 
    to={to} 
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all group
      ${isActive 
        ? 'bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100/50' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
    `}
  >
    {({ isActive }: { isActive: boolean }) => (
      <>
        <Icon size={18} className={`${isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'} transition-colors`} />
        {children}
      </>
    )}
  </NavLink>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => (
  <>
    {isOpen && (
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-40 md:hidden" onClick={closeSidebar} />
    )}
    
    <aside className={`
      fixed top-0 bottom-0 left-0 w-72 bg-white border-r border-slate-200 z-50 transform transition-all duration-300 md:translate-x-0 md:top-16
      ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
    `}>
      <div className="flex items-center justify-between p-6 md:hidden">
        <div className="flex items-center gap-2">
          <Box size={24} className="text-emerald-600" />
          <span className="font-extrabold text-slate-900 tracking-tight">Mockpay</span>
        </div>
        <button onClick={closeSidebar} className="p-2 hover:bg-slate-100 rounded-lg">
          <X size={20} />
        </button>
      </div>

      <nav className="p-6 space-y-8 sidebar-scroll overflow-y-auto h-full pb-32">
        <div>
          <h5 className="px-4 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Start</h5>
          <div className="space-y-1">
            <SidebarLink to="/" icon={BookOpen} onClick={closeSidebar}>Overview</SidebarLink>
            <SidebarLink to="/installation" icon={Cpu} onClick={closeSidebar}>Installation</SidebarLink>
            <SidebarLink to="/integration" icon={Layers} onClick={closeSidebar}>Integration</SidebarLink>
          </div>
        </div>

        <div>
          <h5 className="px-4 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Execution</h5>
          <div className="space-y-1">
            <SidebarLink to="/cli" icon={Terminal} onClick={closeSidebar}>CLI Commands</SidebarLink>
            <SidebarLink to="/api" icon={Code} onClick={closeSidebar}>API Coverage</SidebarLink>
            <SidebarLink to="/webhooks" icon={Webhook} onClick={closeSidebar}>Webhooks</SidebarLink>
            <SidebarLink to="/errors" icon={Bug} onClick={closeSidebar}>Error Simulation</SidebarLink>
          </div>
        </div>

        <div>
          <h5 className="px-4 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Project</h5>
          <div className="space-y-1">
            <SidebarLink to="/development" icon={Settings} onClick={closeSidebar}>Development</SidebarLink>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 mt-auto">
          <a href={GITHUB_URL} target="_blank" className="flex items-center gap-3 px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors">
            <Github size={16} /> GitHub Repository
          </a>
          <a href={NPM_URL} target="_blank" className="flex items-center gap-3 px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors">
            <Package size={16} /> NPM Package
          </a>
        </div>
      </nav>
    </aside>
  </>
);