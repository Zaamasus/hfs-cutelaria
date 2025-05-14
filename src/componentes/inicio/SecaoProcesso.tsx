import React from 'react';

interface EtapaProcesso {
  titulo: string;
  descricao: string;
  icone: string;
}

const etapas: EtapaProcesso[] = [
  {
    titulo: "Design",
    descricao: "Cada faca começa com um design cuidadosamente planejado, considerando ergonomia e funcionalidade.",
    icone: "✏️"
  },
  {
    titulo: "Forjamento",
    descricao: "O aço é aquecido e forjado manualmente para criar a forma básica da lâmina.",
    icone: "🔨"
  },
  {
    titulo: "Têmpera",
    descricao: "Processo crucial que garante a dureza e resistência ideal da lâmina.",
    icone: "🔥"
  },
  {
    titulo: "Acabamento",
    descricao: "Polimento meticuloso e montagem do cabo com materiais nobres selecionados.",
    icone: "✨"
  }
];

const SecaoProcesso: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-slate-900 dark:text-white">
          Nosso Processo Artesanal
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapas.map((etapa, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{etapa.icone}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">
                {etapa.titulo}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoProcesso; 