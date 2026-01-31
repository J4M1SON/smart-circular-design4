
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#8C8955]/5 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2D472E]/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8C8955]/10 border border-[#8C8955]/20 text-[#8C8955] text-xs font-bold mb-10 animate-fade-in tracking-widest">
          <span className="flex h-2 w-2 rounded-full bg-[#8C8955] mr-3 animate-pulse"></span>
          PLATAFORMA REGENERATIVA 2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          <span className="block text-slate-100">O Futuro do Design é</span>
          <span className="block brand-gradient-text">
            Circular e Inteligente
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Nossa inteligência artificial redesenha processos industriais para eliminar desperdícios, honrando os ciclos da natureza enquanto potencializa sua rentabilidade ESG.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <button 
            onClick={onStart}
            className="group relative w-full sm:w-auto px-10 py-5 btn-brand text-white font-bold rounded-2xl overflow-hidden transition-all shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center">
              Transformar Plano agora
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          <button className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-sm">
            Explorar Ecossistema
          </button>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
          <span className="text-xl font-bold">CIRCULARITY</span>
          <span className="text-xl font-bold italic">REGEN-TECH</span>
          <span className="text-xl font-bold tracking-tighter uppercase">EcoNodes</span>
          <span className="text-xl font-bold">FUTURE-O</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
