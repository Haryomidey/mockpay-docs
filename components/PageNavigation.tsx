import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavItem {
  label: string;
  to: string;
}

interface PageNavigationProps {
  prev?: NavItem;
  next?: NavItem;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ prev, next }) => (
  <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between gap-4">
    {prev ? (
      <NavLink to={prev.to} className="flex-1 group p-4 border border-slate-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 transition-all">
        <span className="text-xs text-slate-400 block mb-1 uppercase font-bold tracking-wider">Previous</span>
        <span className="font-semibold text-slate-900 flex items-center gap-2 group-hover:text-emerald-700">
          <ChevronLeft size={16} /> {prev.label}
        </span>
      </NavLink>
    ) : <div className="flex-1" />}
    
    {next ? (
      <NavLink to={next.to} className="flex-1 text-right group p-4 border border-slate-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50 transition-all">
        <span className="text-xs text-slate-400 block mb-1 uppercase font-bold tracking-wider">Next</span>
        <span className="font-semibold text-slate-900 flex items-center justify-end gap-2 group-hover:text-emerald-700">
          {next.label} <ChevronRight size={16} />
        </span>
      </NavLink>
    ) : <div className="flex-1" />}
  </div>
);