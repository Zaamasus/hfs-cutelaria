import React from 'react';

interface PropriedadesBotao {
  children: React.ReactNode;
  variante?: 'primario' | 'secundario' | 'contorno';
  tamanho?: 'pequeno' | 'medio' | 'grande';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Botao: React.FC<PropriedadesBotao> = ({
  children,
  variante = 'primario',
  tamanho = 'medio',
  className = '',
  onClick,
  type = 'button',
}) => {
  const estilosBase = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-200';
  
  const variantes = {
    primario: 'bg-amber-800 text-white hover:bg-amber-900 focus-visible:ring-amber-500 dark:bg-amber-700 dark:hover:bg-amber-800',
    secundario: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500 dark:bg-dark-400 dark:text-gray-100 dark:hover:bg-dark-500',
    contorno: 'border border-amber-800 text-amber-800 hover:bg-amber-50 focus-visible:ring-amber-500 dark:border-amber-500 dark:text-amber-400 dark:hover:bg-dark-400/50'
  };
  
  const tamanhos = {
    pequeno: 'h-9 px-3 text-sm',
    medio: 'h-10 px-4',
    grande: 'h-12 px-6 text-lg'
  };
  
  return (
    <button
      type={type}
      className={`${estilosBase} ${variantes[variante]} ${tamanhos[tamanho]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Botao; 