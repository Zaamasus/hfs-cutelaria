import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, PocketKnife as Faca } from 'lucide-react';

const Rodape: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-background-primary border-t dark:border-dark-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Faca size={24} className="text-amber-500 dark:text-amber-400 mr-2" />
              <span className="text-xl font-bold text-white dark:text-gray-100">HFS Cutelaria</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Facas artesanais feitas com paixão e precisão, combinando técnicas tradicionais com estética moderna.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contato@hfscutelaria.com"
                className="text-gray-400 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { nome: 'Início', caminho: '/' },
                { nome: 'Galeria', caminho: '/galeria' },
              ].map((item) => (
                <li key={item.nome}>
                  <Link
                    to={item.caminho}
                    className="text-gray-400 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-dark-300 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} HFS Cutelaria. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            <Link to="/privacidade" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Política de Privacidade
            </Link>{' '}
            &bull;{' '}
            <Link to="/termos" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape; 