
import React, { useState } from 'react';
import { transformPlanToCircular } from '../services/geminiService';
import { TransformationResult } from '../types';
import { jsPDF } from 'jspdf';

interface TransformationToolProps {
  onSave: (result: TransformationResult) => void;
}

const TransformationTool: React.FC<TransformationToolProps> = ({ onSave }) => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleTransform = async () => {
    if (!idea.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const circularPlan = await transformPlanToCircular(idea);
      setResult(circularPlan);
      
      const newResult: TransformationResult = {
        id: Math.random().toString(36).substring(7),
        originalIdea: idea,
        circularPlan,
        createdAt: Date.now(),
        benefits: {
          regeneration: "Alta",
          wasteElimination: "Completa",
          productCirculation: "Otimizada"
        }
      };
      onSave(newResult);
    } catch (err) {
      setError('Falha na comunicação com a rede neural. Tente novamente em instantes.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!result) return;
    
    setIsExporting(true);
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      // Cabeçalho
      doc.setFillColor(140, 137, 85); // Cor oliva da marca
      doc.rect(0, 0, pageWidth, 40, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('Smart Circular Design', margin, 20);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('RELATÓRIO DE ESTRATÉGIA REGENERATIVA', margin, 30);
      doc.text(`Data: ${new Date().toLocaleDateString()}`, pageWidth - margin - 40, 30);

      // Conteúdo
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Ideia Original:', margin, 55);
      
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(10);
      const ideaText = doc.splitTextToSize(idea, contentWidth);
      doc.text(ideaText, margin, 62);
      
      let currentY = 62 + (ideaText.length * 5) + 15;
      
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, currentY - 5, pageWidth - margin, currentY - 5);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(45, 71, 46); // Verde floresta da marca
      doc.text('Estratégia Circular Proposta', margin, currentY);
      
      currentY += 10;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      
      // Limpeza simples de Markdown para o PDF
      const cleanResult = result
        .replace(/###/g, '')
        .replace(/\*\*/g, '')
        .replace(/---/g, '');

      const lines = doc.splitTextToSize(cleanResult, contentWidth);
      
      // Gerenciar quebra de página
      lines.forEach((line: string) => {
        if (currentY > 280) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(line, margin, currentY);
        currentY += 6;
      });

      // Rodapé do PDF
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text('Este documento foi gerado por IA através da plataforma Smart Circular Design.', margin, 290);

      doc.save(`plano-circular-${new Date().getTime()}.pdf`);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      alert('Houve um erro ao gerar o arquivo PDF.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="glass-card rounded-[3rem] overflow-hidden border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
        <div className="p-10 md:p-16">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 mr-4">
               <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 2 A48 48 0 0 1 98 50 L50 50 Z" fill="#8C8955" />
                  <path d="M2 50 A48 48 0 0 0 50 98 L50 50 Z" fill="#2D472E" />
                  <circle cx="50" cy="50" r="22" fill="white" />
                </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Laboratório Circular</h2>
          </div>
          <p className="text-slate-400 mb-10 text-lg">Descreva seu processo atual ou nova ideia para receber a arquitetura regenerativa.</p>
          
          <div className="space-y-8">
            <div className="relative group">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Ex: Minha empresa de moda utiliza algodão convencional e tem alto descarte de sobras têxteis..."
                className="w-full h-56 bg-white/[0.02] border border-white/10 rounded-3xl p-8 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8C8955]/30 focus:border-[#8C8955]/50 transition-all resize-none text-lg leading-relaxed"
              />
              <div className="absolute bottom-6 right-8 text-xs font-mono text-slate-500 uppercase tracking-widest">
                Input: {idea.length} bytes
              </div>
            </div>
            
            <button
              onClick={handleTransform}
              disabled={loading || !idea}
              className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center transition-all duration-300 ${
                loading || !idea 
                ? 'bg-white/5 text-slate-600 cursor-not-allowed' 
                : 'btn-brand shadow-2xl'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-6 w-6 mr-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Redesenhando Fluxos...
                </>
              ) : 'Processar Circularidade'}
            </button>
            
            {error && (
              <div className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}
          </div>
        </div>

        {result && (
          <div className="border-t border-white/5 bg-[#12160f] p-10 md:p-16 animate-fade-in">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-white border-l-4 border-[#8C8955] pl-6">Estratégia Regenerativa Final</h3>
              <div className="flex gap-4">
                <button 
                  onClick={handleDownloadPDF}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 transition-all border border-white/5 font-semibold text-sm group"
                  title="Exportar para PDF"
                >
                  {isExporting ? (
                    <svg className="animate-spin h-5 w-5 text-[#8C8955]" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#8C8955] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {isExporting ? 'Gerando...' : 'Exportar PDF'}
                </button>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-[#8C8955] whitespace-pre-wrap text-lg leading-relaxed">
              {result}
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="text-[10px] font-bold text-[#8C8955] uppercase tracking-[0.2em] mb-2">Pilar I</div>
                <div className="text-base text-slate-100 font-semibold">Regeneração do Capital Natural</div>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="text-[10px] font-bold text-[#2D472E] uppercase tracking-[0.2em] mb-2">Pilar II</div>
                <div className="text-base text-slate-100 font-semibold">Otimização de Ciclos Técnicos</div>
              </div>
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="text-[10px] font-bold text-[#959278] uppercase tracking-[0.2em] mb-2">Pilar III</div>
                <div className="text-base text-slate-100 font-semibold">Eliminação de Externaidades</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransformationTool;
