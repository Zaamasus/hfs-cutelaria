import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './componentes/estrutura/Cabecalho';
import Rodape from './componentes/estrutura/Rodape';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaGaleria from './paginas/PaginaGaleria';
import PaginaDetalhesFaca from './paginas/PaginaDetalhesFaca';
import BotaoWhatsApp from './componentes/comum/BotaoWhatsApp';

function Aplicacao() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-background-primary text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Cabecalho />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/galeria" element={<PaginaGaleria />} />
            <Route path="/faca/:id" element={<PaginaDetalhesFaca />} />
          </Routes>
        </main>
        <BotaoWhatsApp />
        <Rodape />
      </div>
    </Router>
  );
}

export default Aplicacao; 