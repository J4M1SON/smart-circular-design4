
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'landing' | 'tool' | 'history') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0D110B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('landing')}
          >
            {/* Logo recriada conforme imagem fornecida */}
            <div className="relative w-10 h-10 mr-3">
              <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:rotate-12 transition-transform duration-500">
                <circle cx="50" cy="50" r="48" fill="#959278" fillOpacity="0.2" />
                <path d="M50 2 A48 48 0 0 1 98 50 L50 50 Z" fill="#8C8955" />
                <path d="M2 50 A48 48 0 0 0 50 98 L50 50 Z" fill="#2D472E" />
                <circle cx="50" cy="50" r="22" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Smart Circular <span className="text-[#8C8955]">Design</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => onNavigate('landing')} className="text-sm font-medium text-slate-400 hover:text-[#8C8955] transition-colors">Home</button>
            <button onClick={() => onNavigate('history')} className="text-sm font-medium text-slate-400 hover:text-[#8C8955] transition-colors">Histórico</button>
            <button 
              onClick={() => onNavigate('tool')}
              className="btn-brand px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#8C8955]/10"
            >
              Começar agora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
