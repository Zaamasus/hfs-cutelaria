export interface Faca {
  id: string;
  nome: string;
  descricao: string;
  descricaoLonga?: string;
  preco: number;
  imagem: string;
  imagens?: string[];
  categoria: string;
  especificacoes: {
    comprimentoLamina: string;
    comprimentoTotal: string;
    espessura: string;
    peso: string;
    materialLamina: string;
    materialCabo: string;
    tipoLamina: string;
    durezaRockwell: string;
  };
  caracteristicas?: string[];
  emEstoque: boolean;
  tempoPreparo?: string;
  avaliacoes?: {
    pontuacao: number;
    total: number;
    comentarios: Array<{
      autor: string;
      data: string;
      texto: string;
      pontuacao: number;
    }>;
  };
}

export type CategoriaFaca = 'Cozinha' | 'Caça' | 'Bushcraft' | 'Bowie' | 'Canivete' | 'Adaga';

export interface FiltrosFaca {
  categoria?: CategoriaFaca;
  precoMin?: number;
  precoMax?: number;
  emEstoque?: boolean;
  ordenacao?: 'preco-asc' | 'preco-desc' | 'nome-asc' | 'nome-desc' | 'mais-vendidos';
} 