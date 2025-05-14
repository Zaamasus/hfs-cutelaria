import React from 'react';

interface PropriedadesBotao extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'secundario' | 'contorno';
  tamanho?: 'pequeno' | 'medio' | 'grande';
  children: React.ReactNode;
}

export const Botao: React.FC<PropriedadesBotao> = ({
  variante = 'primario',
  tamanho = 'medio',
  children,
  className = '',
  ...props
}) => {
  const estilosBase = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
  
  const estilosVariante = {
    primario: 'bg-amber-600 hover:bg-amber-700 text-white',
    secundario: 'bg-slate-200 hover:bg-slate-300 text-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white',
    contorno: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-500 dark:hover:text-white'
  };

  const estilosTamanho = {
    pequeno: 'px-3 py-1.5 text-sm',
    medio: 'px-4 py-2',
    grande: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${estilosBase} ${estilosVariante[variante]} ${estilosTamanho[tamanho]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 