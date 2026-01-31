
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D110B] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-8 group cursor-default">
              {/* Logo recriada fiel à imagem fornecida */}
              <div className="relative w-12 h-12 mr-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#959278" fillOpacity="0.1" />
                  <path d="M50 2 A48 48 0 0 1 98 50 L50 50 Z" fill="#8C8955" />
                  <path d="M2 50 A48 48 0 0 0 50 98 L50 50 Z" fill="#2D472E" />
                  <circle cx="50" cy="50" r="22" fill="white" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Smart Circular <span className="text-[#8C8955]">Design</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Liderando a transição para uma economia global regenerativa. Nossa inteligência artificial transforma o desperdício em valor e o lucro em impacto positivo.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#8C8955]/20 hover:text-[#8C8955] transition-all border border-white/5">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#8C8955]/20 hover:text-[#8C8955] transition-all border border-white/5">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Tecnologia</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Cradle-to-Cradle IA</a></li>
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Métricas ESG</a></li>
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Análise de Ciclo de Vida</a></li>
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Integração ERP</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Recursos</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Manifesto Circular</a></li>
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Estudos de Caso</a></li>
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Documentação API</a></li>
              <li><a href="#" className="hover:text-[#8C8955] transition-colors">Whitepapers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-medium tracking-tight">
            &copy; {new Date().getFullYear()} Smart Circular Design. Arquitetura de impacto regenerativo.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Privacidade de Dados</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Políticas de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
