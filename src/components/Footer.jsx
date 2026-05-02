import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 px-4 flex flex-col items-center border-t transition-all duration-300 ${
      darkMode 
        ? 'bg-[#0B0E14] text-slate-400 border-white/10' 
        : 'bg-slate-50 text-slate-600 border-slate-200'
    }`}>
      
      {/* Logo Section - Identik dengan Navbar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
          <Leaf className="w-6 h-6 text-white" />
        </div>
        <div className="text-left">
          <span className="text-xl font-bold bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent block leading-tight">
            Agri-Smart
          </span>
          <p className="text-[10px] uppercase tracking-wider font-medium opacity-70">
           
          </p>
        </div>
      </div>

      <p className="text-sm text-center max-w-2xl mb-8 leading-relaxed">
        © 2026 Agri-Smart. Dikembangkan dengan penuh amanah untuk ketahanan pangan Indonesia.
      </p>

      {/* Social Icons - Menggunakan SVG Manual */}
      <div className="flex gap-4">
        {/* GitHub SVG */}
        <div className={`p-3 rounded-full border transition-all duration-300 ${
          darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-200'
        }`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={darkMode ? 'text-white' : 'text-slate-900'}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
        
        {/* Email SVG */}
        <div className={`p-3 rounded-full border transition-all duration-300 ${
          darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-200'
        }`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={darkMode ? 'text-white' : 'text-slate-900'}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;