import React, { useState, useEffect } from 'react';
import { Menu, X, PocketKnife as Faca } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Cabecalho: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolado, setRolado] = useState(false);
  const localizacao = useLocation();

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const handleScroll = () => {
      setRolado(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuAberto(false);
  }, [localizacao]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        rolado 
          ? 'bg-white dark:bg-background-secondary shadow-md dark:shadow-dark-300/20 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Faca size={28} className={`${
              rolado 
                ? 'text-amber-800 dark:text-amber-400' 
                : 'text-white'
              } mr-2`} />
            <span className={`text-2xl font-bold ${
              rolado 
                ? 'text-amber-800 dark:text-amber-400' 
                : 'text-white'
              }`}>
              HFS Cutelaria Artesanal
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              { nome: 'Início', caminho: '/' },
              { nome: 'Galeria', caminho: '/galeria' },
            ].map((item) => (
              <Link
                key={item.nome}
                to={item.caminho}
                className={`${
                  rolado 
                    ? 'text-gray-800 dark:text-gray-200' 
                    : 'text-white'
                } hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors`}
              >
                {item.nome}
              </Link>
            ))}
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            onClick={alternarMenu}
            className="md:hidden flex items-center"
            aria-label="Alternar menu"
          >
            {menuAberto ? (
              <X size={24} className={rolado ? 'text-gray-800 dark:text-gray-200' : 'text-white'} />
            ) : (
              <Menu size={24} className={rolado ? 'text-gray-800 dark:text-gray-200' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Navegação Mobile */}
      {menuAberto && (
        <div className="md:hidden bg-white dark:bg-background-secondary shadow-lg dark:shadow-dark-300/20 absolute top-full left-0 right-0 p-4 z-50">
          <nav className="flex flex-col space-y-4">
            {[
              { nome: 'Início', caminho: '/' },
              { nome: 'Galeria', caminho: '/galeria' },
            ].map((item) => (
              <Link
                key={item.nome}
                to={item.caminho}
                className="text-gray-800 dark:text-gray-200 hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors"
              >
                {item.nome}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Cabecalho; 