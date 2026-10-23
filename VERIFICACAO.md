# Verificação do portfolio

Verificado em 14/09/2026 contra https://davi.im/.

## Cobertura

Foram encontradas seis rotas pela varredura de links do site. O sitemap do
original não respondeu; a navegação e o blog foram conferidos separadamente.

| Rota | HTTP local | Desktop 1280 px | Celular 375 px |
| --- | --- | --- | --- |
| `/` | 200 | Sem diferenças medidas | Sem diferenças medidas |
| `/projects` | 200 | Sem diferenças medidas | Sem diferenças medidas |
| `/experience` | 200 | Sem diferenças medidas | Sem diferenças medidas |
| `/blog` | 200 | Sem diferenças medidas | Sem diferenças medidas |
| `/blog/hello-world` | 200 | Sem diferenças medidas | Sem diferenças medidas |
| `/blog/skills-mgr` | 200 | Sem diferenças medidas | Sem diferenças medidas |

Resultado: **6/6 rotas** disponíveis e **12/12 comparações** aprovadas.
Não houve diferenças de altura de página, geometria, texto, fontes, tamanho de
texto ou cores dos elementos medidos. A comparação de pixels das 12 imagens
também retornou zero diferenças no limiar 0,1 do pixelmatch.
Não houve imagens quebradas, erros JavaScript novos, vazamento de links internos
para davi.im ou rolagem horizontal inesperada. Títulos e descrições conferidos.

## Interações

Verificadas no original e na cópia:

- Abertura do menu móvel e navegação para projetos.
- Troca para tema escuro e persistência após recarregar.
- Entrada da cobrinha, movimento da grade, comando por teclado e saída do jogo.
- Mudança do texto na animação de apresentação.
- Hover de navegação e cartão, com propriedades equivalentes.
- Navegação por Tab e cores do tema escuro.

O build de produção passou com a validação de TypeScript habilitada.
O iniciador `iniciar.cmd` também foi executado e sua página respondeu HTTP 200.

## O que foi corrigido

A captura inicial tinha 48 elementos fora da posição medida em desktop,
incluindo uma diferença de aproximadamente 625 px de altura em `/experience`.
Foram recuperados o markup responsivo, os estilos, as fontes e as mídias do
original. Também foram restaurados o menu oculto, tema claro/escuro, estados da
animação e o jogo que a captura estática não preservou.

## Limites da verificação

As imagens foram comparadas com a apresentação pausada no mesmo estado e com
uma mesma resposta de contribuições para os dois lados. Isso evita que o tempo
da digitação ou atualizações ao vivo sejam confundidos com erros de aparência.
As interações foram testadas separadamente com o movimento habilitado.

Os testes usaram Chromium em larguras de 1280 e 375 px; não constituem teste de
todos os navegadores, todas as larguras intermediárias, nem de todas as fases
temporais de cada animação. Não houve diferenças residuais nos casos testados.
O modo de movimento reduzido recebeu uma regra local para manter o conteúdo
da apresentação visível.

O gráfico mantém a API pública de contribuições do original e os dados da página
como fallback. Links externos continuam externos. O conteúdo e os contatos
continuam sendo os de Davi, conforme o pedido de clonagem.

Os dados detalhados das medições estão em `verificacao/resultado.json`.
