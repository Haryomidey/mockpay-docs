import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Box, Github, BookOpen } from 'lucide-react';
import { GITHUB_URL, SEARCH_PAGES, VERSION } from '../constants';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : SEARCH_PAGES.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowResults(false);
        inputRef.current?.blur();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectResult = (path: string) => {
    navigate(path);
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-[60] flex items-center px-4 md:px-8">
      <button onClick={toggleSidebar} className="p-2 mr-4 md:hidden text-slate-600 hover:bg-slate-100 rounded-lg">
        <Menu size={24} />
      </button>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
          <Box size={22} />
        </div>
        <span className="text-xl font-black tracking-tighter text-slate-900 hidden sm:block">Mockpay</span>
      </div>

      <div className="ml-8 relative hidden md:block w-64 lg:w-96" ref={searchRef}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input 
          ref={inputRef}
          type="text" 
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Quick search..." 
          className="w-full bg-slate-100 border-transparent focus:bg-white focus:border-emerald-200 focus:ring-4 focus:ring-emerald-50 rounded-xl py-2 pl-10 pr-4 text-sm transition-all outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <span className="text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">⌘ K</span>
        </div>

        {showResults && filteredResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-h-96 overflow-y-auto sidebar-scroll p-2">
              {filteredResults.map((result) => (
                <button
                  key={result.path}
                  onClick={() => handleSelectResult(result.path)}
                  className="w-full text-left p-3 hover:bg-emerald-50 rounded-lg transition-colors group flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-800">{result.title}</div>
                    <div className="text-xs text-slate-400 group-hover:text-emerald-600 line-clamp-1">{result.description}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="bg-slate-50 p-2 border-t border-slate-100 flex justify-between items-center px-4">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{filteredResults.length} results found</span>
              <span className="text-[10px] text-slate-300">Esc to close</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-500 mr-6">
          <a href={GITHUB_URL} target="_blank" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
            <Github size={16} /> Source
          </a>
          <div className="h-4 w-px bg-slate-200"></div>
          <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border border-emerald-100">v{VERSION}</span>
        </div>
      </div>
    </header>
  );
};