import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contatoConfig } from '../../config/contato';

interface PropsBotaoWhatsApp {
  className?: string;
  mensagem?: string;
}

const BotaoWhatsApp: React.FC<PropsBotaoWhatsApp> = ({ className = '', mensagem }) => {
  const mensagemFormatada = encodeURIComponent(mensagem || contatoConfig.mensagemPadrao);
  const linkWhatsApp = `https://wa.me/${contatoConfig.whatsapp}?text=${mensagemFormatada}`;

  return (
    <a
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-green-600 hover:bg-green-700 
        text-white shadow-lg
        transform transition-all duration-300
        hover:scale-110
        ${className}
      `}
      aria-label="Fale Conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default BotaoWhatsApp; 