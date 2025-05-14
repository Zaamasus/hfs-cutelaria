import React, { useState } from 'react';

interface PropsImagemComFallback extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ImagemComFallback: React.FC<PropsImagemComFallback> = ({ src, alt, ...props }) => {
  const [erro, setErro] = useState(false);

  return (
    <img
      src={erro ? '/imagens/facas/imagem-indisponivel.svg' : src}
      alt={alt}
      onError={() => setErro(true)}
      {...props}
    />
  );
};

export default ImagemComFallback; 