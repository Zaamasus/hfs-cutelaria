import React from 'react';
import { useParams } from 'react-router-dom';
import { Botao } from '../componentes/comum/Botao';
import { obterFaca } from '../dados/facas';
import ImagemComFallback from '../componentes/comum/ImagemComFallback';

const PaginaDetalhesFaca: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const faca = id ? obterFaca(id) : null;

  if (!faca) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Faca não encontrada
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          A faca que você está procurando não está disponível.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
            <ImagemComFallback
              src={faca.imagem}
              alt={faca.nome}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-playfair font-bold mb-4 text-slate-900 dark:text-white">
              {faca.nome}
            </h1>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-500 mb-6">
              R$ {faca.preco.toFixed(2)}
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {faca.descricaoLonga || faca.descricao}
            </p>
            
            {faca.especificacoes && (
              <>
                <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                  Especificações
                </h2>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="font-medium text-slate-600 dark:text-slate-400">Aço</dt>
                    <dd className="text-slate-900 dark:text-white">{faca.especificacoes.aco}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-slate-600 dark:text-slate-400">Comprimento da Lâmina</dt>
                    <dd className="text-slate-900 dark:text-white">{faca.especificacoes.comprimentoLamina}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-slate-600 dark:text-slate-400">Comprimento Total</dt>
                    <dd className="text-slate-900 dark:text-white">{faca.especificacoes.comprimentoTotal}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-slate-600 dark:text-slate-400">Peso</dt>
                    <dd className="text-slate-900 dark:text-white">{faca.especificacoes.peso}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-slate-600 dark:text-slate-400">Cabo</dt>
                    <dd className="text-slate-900 dark:text-white">{faca.especificacoes.cabo}</dd>
                  </div>
                </dl>
              </>
            )}

            <div className="mt-8">
              <Botao
                variante="primario"
                tamanho="grande"
                onClick={() => window.location.href = `https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre a ${faca.nome}`}
                className="w-full"
              >
                Solicitar Orçamento via WhatsApp
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaDetalhesFaca; 