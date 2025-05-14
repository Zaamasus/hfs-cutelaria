export interface Faca {
  id: string;
  nome: string;
  descricao: string;
  descricaoLonga?: string;
  imagem: string;
  preco: number;
  especificacoes?: {
    aco: string;
    comprimentoLamina: string;
    comprimentoTotal: string;
    peso: string;
    cabo: string;
  };
}

export const facas: Faca[] = [
  {
    id: "1",
    nome: "Faca Artesanal Clássica",
    descricao: "Lâmina forjada em aço carbono com cabo em madeira nobre, perfeita para uso geral na cozinha.",
    descricaoLonga: "Uma faca versátil desenvolvida para atender às diversas necessidades culinárias. Combina equilíbrio perfeito, ergonomia excepcional e durabilidade superior.",
    imagem: "/imagens/facas/faca-classica.jpg",
    preco: 389.90,
    especificacoes: {
      aco: "Aço carbono 1095",
      comprimentoLamina: "20cm",
      comprimentoTotal: "33cm",
      peso: "280g",
      cabo: "Madeira Ipê com pinos de latão"
    }
  },
  {
    id: "2",
    nome: "Faca Outdoor Premium",
    descricao: "Robusta e versátil, ideal para atividades ao ar livre e uso cotidiano.",
    imagem: "/imagens/facas/faca-outdoor.jpg",
    preco: 429.90,
    especificacoes: {
      aco: "Aço D2",
      comprimentoLamina: "15cm",
      comprimentoTotal: "28cm",
      peso: "250g",
      cabo: "Micarta verde com liner em G10"
    }
  },
  {
    id: "3",
    nome: "Faca Gourmet Elite",
    descricao: "Design elegante com lâmina fina e precisa, ideal para cortes delicados.",
    imagem: "/imagens/facas/faca-gourmet.jpg",
    preco: 299.90,
    especificacoes: {
      aco: "Aço inox VG-10",
      comprimentoLamina: "18cm",
      comprimentoTotal: "31cm",
      peso: "220g",
      cabo: "Madeira estabilizada roxa"
    }
  },
  {
    id: "4",
    nome: "Faca Chef Profissional",
    descricao: "Lâmina balanceada com excelente retenção de fio, perfeita para uso profissional.",
    imagem: "/imagens/facas/faca-chef.jpg",
    preco: 449.90,
    especificacoes: {
      aco: "Aço CPM-154",
      comprimentoLamina: "21cm",
      comprimentoTotal: "35cm",
      peso: "260g",
      cabo: "Madeira Jatobá com spacers em G10"
    }
  },
  {
    id: "5",
    nome: "Faca Bushcraft Tática",
    descricao: "Robusta e versátil, ideal para atividades de sobrevivência e camping.",
    imagem: "/imagens/facas/faca-tatica.jpg",
    preco: 249.90,
    especificacoes: {
      aco: "Aço O1",
      comprimentoLamina: "12cm",
      comprimentoTotal: "24cm",
      peso: "230g",
      cabo: "Micarta preta com detalhe em latão"
    }
  },
  {
    id: "6",
    nome: "Faca Santoku Premium",
    descricao: "Design japonês moderno, perfeita para cortes precisos de legumes e peixes.",
    imagem: "/imagens/facas/faca-santoku.jpg",
    preco: 349.90,
    especificacoes: {
      aco: "Aço Damascus VG-10",
      comprimentoLamina: "17cm",
      comprimentoTotal: "30cm",
      peso: "210g",
      cabo: "Pakkawood com detalhes em aço inox"
    }
  }
];

export const obterFaca = (id: string): Faca | undefined => {
  return facas.find(faca => faca.id === id);
}; 