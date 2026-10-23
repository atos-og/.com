# Arquitetura

Portfolio local baseado em davi.im, com Next.js 15, React 19 e TypeScript.

- `src/app`: seis páginas e metadados pelo App Router.
- `src/components`: cabeçalho e rodapé compartilhados.
- `src/app/globals.css`: CSS recuperado do site, com fontes locais.
- `public/site-runtime.js`: comportamento público recuperado (tema, menu,
  apresentação animada, contribuições e cobrinha).
- `public/assets/original`: fontes, imagens e vídeo locais.
- `public/assets/cloned`: materiais da captura inicial do Ditto, incluindo o ícone.
- `scripts/serve.mjs`: servidor do export estático, sem cache.
- `iniciar.cmd`: inicia o ambiente de desenvolvimento neste Windows.

A navegação usa links normais, com carregamento de documento por página, como no
original. Isso reinicializa os scripts a cada navegação. A preferência de tema
fica no localStorage. O gráfico consulta a API pública de contribuições do GitHub
com os dados da página como fallback. Não há backend próprio nem banco de dados.

A captura inicial do Ditto foi corrigida com o markup, os estilos e os scripts
públicos que ela não preservou. Os arquivos `ditto*.css` remanescentes registram a
captura inicial e não são importados pelas páginas finais.

`npm run dev` usa `.next-dev`; `npm run build` exporta em `.next-build`.
`npm run start` serve essa compilação. Consulte README.md e VERIFICACAO.md.
