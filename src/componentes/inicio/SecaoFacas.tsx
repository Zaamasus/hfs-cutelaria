import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Botao } from '../comum/Botao';
import ImagemComFallback from '../comum/ImagemComFallback';
import { facas } from '../../dados/facas';

const SecaoFacas: React.FC = () => {
  // Estado para controlar quais facas estão visíveis
  const [facasVisiveis, setFacasVisiveis] = useState(facas);
  // Estado para controlar a ordem atual das facas
  const [ordemAtual, setOrdemAtual] = useState(0);

  // Efeito para rotacionar as facas a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      // Calcula a nova ordem das facas
      const novaOrdem = (ordemAtual + 1) % facas.length;
      setOrdemAtual(novaOrdem);
      
      // Reorganiza as facas na ordem desejada
      const novasFacas = [
        ...facas.slice(novaOrdem),
        ...facas.slice(0, novaOrdem)
      ];
      
      // Atualiza o estado com a nova ordem
      setFacasVisiveis(novasFacas);
    }, 5000); // Intervalo de 5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, [ordemAtual]);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-slate-900 dark:text-white">
          Nossas Facas
        </h2>
        
        {/* Grid de facas com animação de fade */}
        <div className="grid md:grid-cols-3 gap-8">
          {facasVisiveis.map((faca) => (
            <div 
              key={faca.id} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
            >
              <Link to={`/faca/${faca.id}`} className="block">
                <div className="relative h-48">
                  <ImagemComFallback
                    src={faca.imagem}
                    alt={faca.nome}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {faca.nome}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                    {faca.descricao}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-600 dark:text-amber-500">
                      R$ {faca.preco.toFixed(2)}
                    </span>
                    <Botao
                      variante="primario"
                      tamanho="pequeno"
                    >
                      Ver Detalhes
                    </Botao>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoFacas; 