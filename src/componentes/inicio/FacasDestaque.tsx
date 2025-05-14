import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../elementos/Botao';

interface Faca {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
}

const FacasDestaque: React.FC = () => {
  const facasDestaque: Faca[] = [
    {
      id: "1",
      nome: "Faca Chef Profissional",
      descricao: "Lâmina forjada à mão em aço carbono, cabo em madeira nobre com acabamento artesanal.",
      preco: 899.90,
      imagem: "https://images.unsplash.com/photo-1593618998160-e34014e67546",
      categoria: "Cozinha"
    },
    {
      id: "2",
      nome: "Faca de Caça Rústica",
      descricao: "Ideal para atividades outdoor, com lâmina em aço inox e cabo ergonômico em micarta.",
      preco: 749.90,
      imagem: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
      categoria: "Caça"
    },
    {
      id: "3",
      nome: "Canivete Artesanal",
      descricao: "Compacto e versátil, perfeito para o dia a dia, com mecanismo de travamento seguro.",
      preco: 499.90,
      imagem: "https://images.unsplash.com/photo-1589236950461-883a2632d789",
      categoria: "Canivete"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100">Facas em Destaque</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça nossas peças mais populares, cada uma feita à mão com dedicação e expertise artesanal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facasDestaque.map((faca) => (
            <div key={faca.id} className="bg-white dark:bg-dark-300 rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={faca.imagem} 
                  alt={faca.nome}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold dark:text-gray-100">{faca.nome}</h3>
                  <span className="text-amber-800 dark:text-amber-400 font-bold">
                    {faca.preco.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{faca.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{faca.categoria}</span>
                  <Link to={`/faca/${faca.id}`}>
                    <Botao variante="contorno">Ver Detalhes</Botao>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/galeria">
            <Botao tamanho="grande">
              Ver Toda a Coleção
            </Botao>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacasDestaque; 