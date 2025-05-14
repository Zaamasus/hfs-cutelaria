import React from 'react';
import { Link } from 'react-router-dom';
import { Botao } from '../comum/Botao';

const BannerPrincipal: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        {/* Imagem de Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=2000')`,
            backgroundPosition: 'center 30%'
          }}
        />
        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Facas Artesanais com Tradição e Excelência
          </h1>
          <p className="text-xl text-slate-200 mb-8">
            Cada peça é única, forjada com paixão e atenção aos detalhes,
            combinando técnicas tradicionais com design contemporâneo.
          </p>
          <div className="flex gap-4">
            <Link to="/galeria">
              <Botao
                variante="primario"
                tamanho="grande"
              >
                Ver Galeria
              </Botao>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPrincipal; 