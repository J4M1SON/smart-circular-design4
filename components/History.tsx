
import React from 'react';
import { TransformationResult } from '../types';

interface HistoryProps {
  history: TransformationResult[];
  isLoading?: boolean;
}

const History: React.FC<HistoryProps> = ({ history, isLoading }) => {
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-8">
          <svg className="animate-spin h-12 w-12 text-[#8C8955]" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Recuperando Arquivos Seguros</h2>
        <p className="text-slate-500">Sincronizando com a base de dados distribuída...</p>
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-slate-700">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Arquivo Vazio</h2>
        <p className="text-slate-500">Inicie uma transformação para povoar sua base de conhecimento.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-white tracking-tight">Cofre de Inovação</h2>
        <span className="bg-[#8C8955]/10 text-[#8C8955] text-xs font-bold px-4 py-1.5 rounded-full border border-[#8C8955]/20">
          {history.length} ENTRADAS
        </span>
      </div>
      
      <div className="space-y-8">
        {history.map((item) => (
          <div key={item.id} className="glass-card rounded-[2rem] p-10 border-white/5 hover:border-[#8C8955]/30 transition-all group cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] text-[#8C8955] font-bold uppercase tracking-[0.3em]">REF_LOG: {item.id}</span>
                <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-[#8C8955] transition-colors">{item.originalIdea}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-600 block">{new Date(item.createdAt).toLocaleDateString()}</span>
                <span className="text-xs font-mono text-slate-600 block">{new Date(item.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
              </div>
            </div>
            
            <div className="text-slate-400 line-clamp-3 mb-10 bg-black/20 p-6 rounded-2xl border-l-4 border-[#2D472E] italic text-base">
              "{item.circularPlan.substring(0, 300)}..."
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-xl bg-[#2D472E]/10 text-[#2D472E] text-[10px] font-black border border-[#2D472E]/20 uppercase tracking-widest">REGEN_CERTIFIED</span>
              <span className="px-4 py-1.5 rounded-xl bg-[#8C8955]/10 text-[#8C8955] text-[10px] font-black border border-[#8C8955]/20 uppercase tracking-widest">ESG_ALIGNED</span>
              <span className="px-4 py-1.5 rounded-xl bg-white/5 text-slate-500 text-[10px] font-black border border-white/10 uppercase tracking-widest">DATABASE_SYNC</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
