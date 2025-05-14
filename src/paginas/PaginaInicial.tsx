import React from 'react';
import { Link } from 'react-router-dom';
import BannerPrincipal from '../componentes/inicio/BannerPrincipal';
import SecaoProcesso from '../componentes/inicio/SecaoProcesso';
import BotaoWhatsApp from '../componentes/comum/BotaoWhatsApp';
import ImagemComFallback from '../componentes/comum/ImagemComFallback';
import { facas } from '../dados/facas';
import { Botao } from '../componentes/comum/Botao';

const PaginaInicial: React.FC = () => {
  return (
    <div>
      <BannerPrincipal />

      {/* Seção de Facas em Destaque */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-slate-900 dark:text-white">
            Nossas Facas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facas.map((faca) => (
              <div key={faca.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
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

      {/* Seção de Processo */}
      <SecaoProcesso />

      {/* Seção de Chamada para Ação */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Pronto para ter sua faca artesanal?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp para discutir seu projeto ou conhecer nossas peças disponíveis.
          </p>
          <div className="flex justify-center">
            <BotaoWhatsApp 
              mensagem="Olá! Vi seu site e gostaria de saber mais sobre as facas artesanais."
              className="animate-bounce-subtle"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicial; 