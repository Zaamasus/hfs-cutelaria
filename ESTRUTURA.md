# Estrutura do Projeto HFS Cutelaria Artesanal

## Arquivos Principais
- `App.tsx` -> `Aplicacao.tsx`: Componente principal da aplicação
- `main.tsx` -> `principal.tsx`: Ponto de entrada da aplicação
- `index.css` -> `estilos.css`: Estilos globais da aplicação

## Páginas (/pages -> /paginas)
- `HomePage.tsx` -> `PaginaInicial.tsx`: Página inicial do site
- `GalleryPage.tsx` -> `PaginaGaleria.tsx`: Galeria de produtos
- `AboutPage.tsx` -> `PaginaSobre.tsx`: Página sobre a empresa
- `ContactPage.tsx` -> `PaginaContato.tsx`: Página de contato
- `KnifeDetailPage.tsx` -> `PaginaDetalhesFaca.tsx`: Detalhes do produto

## Componentes (/components -> /componentes)
### Layout (/layout -> /estrutura)
- `Header.tsx` -> `Cabecalho.tsx`: Cabeçalho do site
- `Footer.tsx` -> `Rodape.tsx`: Rodapé do site

### Página Inicial (/home -> /inicio)
- `Hero.tsx` -> `BannerPrincipal.tsx`: Banner principal da página inicial
- `FeaturedKnives.tsx` -> `FacasDestaque.tsx`: Seção de facas em destaque
- `ProcessSection.tsx` -> `SecaoProcesso.tsx`: Seção do processo de fabricação
- `TestimonialSection.tsx` -> `SecaoDepoimentos.tsx`: Seção de depoimentos
- `ContactSection.tsx` -> `SecaoContato.tsx`: Seção de contato

### Galeria (/gallery -> /galeria)
- `KnifeGrid.tsx` -> `GradeFacas.tsx`: Grade de exibição das facas
- `KnifeCard.tsx` -> `CartaoFaca.tsx`: Cartão individual de cada faca

### Elementos UI (/ui -> /elementos)
- `Button.tsx` -> `Botao.tsx`: Componente de botão
- `Input.tsx` -> `CampoTexto.tsx`: Componente de entrada de texto
- `Card.tsx` -> `Cartao.tsx`: Componente de cartão

### Detalhes da Faca (/knife -> /faca)
- `KnifeDetails.tsx` -> `DetalhesFaca.tsx`: Detalhes completos da faca
- `KnifeGallery.tsx` -> `GaleriaFaca.tsx`: Galeria de imagens da faca
- `KnifeSpecs.tsx` -> `EspecificacoesFaca.tsx`: Especificações técnicas da faca

## Dados (/data -> /dados)
- `knives.ts` -> `facas.ts`: Dados das facas
- `testimonials.ts` -> `depoimentos.ts`: Dados dos depoimentos
- `process.ts` -> `processo.ts`: Dados do processo de fabricação

## Tipos (/types -> /tipos)
- `knife.ts` -> `faca.ts`: Tipos relacionados às facas
- `testimonial.ts` -> `depoimento.ts`: Tipos relacionados aos depoimentos 