
import React from 'react';

const Features: React.FC = () => {
  const benefits = [
    {
      title: "Sustentabilidade Rentável",
      description: "Modelos de negócio que provam que proteger o planeta é o melhor investimento financeiro a longo prazo.",
      icon: (
        <svg className="w-6 h-6 text-[#8C8955]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Conformidade com ESG",
      description: "Sua operação totalmente alinhada às normas ambientais e sociais mais exigentes da Europa e EUA.",
      icon: (
        <svg className="w-6 h-6 text-[#2D472E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Inovação em Processos",
      description: "IA generativa focada em design cradle-to-cradle, otimizando o ciclo de vida total de cada produto.",
      icon: (
        <svg className="w-6 h-6 text-[#959278]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Excelência Circular</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Tecnologia avançada para quem entende que o desperdício é apenas falta de inteligência no design.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[2.5rem] hover:border-[#8C8955]/40 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#8C8955]/10 transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
