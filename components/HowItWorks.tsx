
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Insira seu Plano",
      desc: "Conte-nos sua ideia de negócio ou processo atual de forma simples."
    },
    {
      num: "02",
      title: "Processamento por IA",
      desc: "Nossos algoritmos analisam pontos de desperdício e oportunidades de circularidade."
    },
    {
      num: "03",
      title: "Receba sua Estratégia",
      desc: "Um roteiro completo com design regenerativo e eliminação de resíduos."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fluxo de Transformação</h2>
            <p className="text-slate-400">Do linear para o circular em três etapas simplificadas, impulsionadas por tecnologia de ponta.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-24 right-24 h-[2px] bg-slate-800 -z-10"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border-2 border-slate-800 flex items-center justify-center text-2xl font-bold text-indigo-400 mb-6 group-hover:border-indigo-500 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
