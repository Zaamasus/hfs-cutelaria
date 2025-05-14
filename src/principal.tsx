import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Aplicacao from './Aplicacao.tsx';
import './estilos.css';

// Verifica e aplica o modo escuro baseado nas preferências do sistema
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Observa mudanças nas preferências do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Aplicacao />
  </StrictMode>
); 