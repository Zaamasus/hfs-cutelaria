import React from 'react';
import { Link } from 'react-router-dom';
import { Botao } from '../componentes/comum/Botao';
import ImagemComFallback from '../componentes/comum/ImagemComFallback';
import { facas } from '../dados/facas';

const PaginaGaleria: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Banner superior */}
      <div className="relative h-64 bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-playfair font-bold text-center text-white">
            Nossa Galeria de Facas
          </h1>
        </div>
      </div>

      {/* Conteúdo da galeria */}
      <div className="container mx-auto px-4 py-16 -mt-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {facas.map((faca) => (
              <Link to={`/faca/${faca.id}`} key={faca.id} className="block">
                <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 h-full">
                  <div className="relative h-48">
                    <ImagemComFallback
                      src={faca.imagem}
                      alt={faca.nome}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {faca.nome}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaGaleria; 