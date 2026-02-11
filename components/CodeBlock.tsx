import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button 
          onClick={copyToClipboard}
          className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded text-white backdrop-blur-sm transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800">
        <div className="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{language}</span>
        </div>
        <pre className="p-5 overflow-x-auto text-sm leading-relaxed text-slate-300 sidebar-scroll">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
};