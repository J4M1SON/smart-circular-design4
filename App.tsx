
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TransformationTool from './components/TransformationTool';
import History from './components/History';
import Footer from './components/Footer';
import { TransformationResult } from './types';
import { dbService } from './services/dbService';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'tool' | 'history'>('landing');
  const [history, setHistory] = useState<TransformationResult[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);

  // Carregar dados iniciais
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setIsLoadingHistory(true);
    try {
      const data = await dbService.getTransformations();
      setHistory(data);
    } catch (error) {
      console.error("Falha ao carregar histórico:", error);
    } finally {
      setIsLoadingHistory(false);
    }
  };

  const handleSaveResult = async (result: TransformationResult) => {
    // Salva no banco de dados (ou fallback)
    await dbService.saveTransformation(result);
    // Atualiza o estado local para feedback imediato
    setHistory(prev => [result, ...prev]);
  };

  const navigateToTool = () => {
    setView('tool');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (newView: 'landing' | 'tool' | 'history') => {
    if (newView === 'history') {
      loadHistory(); // Recarrega para garantir sincronia
    }
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {view === 'landing' && (
          <div className="animate-fade-in">
            <Hero onStart={navigateToTool} />
            <HowItWorks />
            <Features />
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-slate-900">
               <h2 className="text-3xl font-bold text-white mb-8">O que nossos parceiros dizem</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="glass-card p-8 rounded-3xl">
                    <p className="text-slate-300 italic mb-6">"O Smart Circular Design transformou nossa linha de produção. Reduzimos o desperdício em 35% no primeiro semestre."</p>
                    <div className="flex items-center">
                      <img src="https://picsum.photos/seed/user1/40/40" className="w-10 h-10 rounded-full mr-3" alt="Avatar" />
                      <div>
                        <div className="text-white font-bold text-sm">Ricardo Mendes</div>
                        <div className="text-slate-500 text-xs">CTO, GreenLogistics</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card p-8 rounded-3xl">
                    <p className="text-slate-300 italic mb-6">"A IA de vocês é assustadoramente precisa. Ela identificou oportunidades de economia que consultores humanos levaram meses para ver."</p>
                    <div className="flex items-center">
                      <img src="https://picsum.photos/seed/user2/40/40" className="w-10 h-10 rounded-full mr-3" alt="Avatar" />
                      <div>
                        <div className="text-white font-bold text-sm">Helena Sousa</div>
                        <div className="text-slate-500 text-xs">Sustainability Lead, EcoFoods</div>
                      </div>
                    </div>
                  </div>
               </div>
            </section>
          </div>
        )}
        
        {view === 'tool' && (
          <div className="pt-24 animate-fade-in">
            <TransformationTool onSave={handleSaveResult} />
          </div>
        )}
        
        {view === 'history' && (
          <div className="pt-24 animate-fade-in">
            <History history={history} isLoading={isLoadingHistory} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
