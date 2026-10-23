# Instruções para manutenção

Este é um portfolio Next.js com seis páginas, baseado em davi.im.
Leia README.md e ARCHITECTURE.md antes de editar. O pedido do usuário define
quais nomes, textos, contatos e elementos devem ser personalizados.

## Arquivos ativos

- Páginas: src/app/page.tsx e os demais page.tsx dentro de src/app.
- Cabeçalho e rodapé: src/components/Header.tsx e Footer.tsx.
- Aparência e fontes locais: src/app/globals.css.
- Interações: public/site-runtime.js.
- Mídias: public/assets/original; o ícone está em public/assets/cloned.

## Validação

Execute npm run build após alterações de código. A compilação verifica TypeScript.
Para desenvolvimento use npm run dev ou iniciar.cmd neste computador.
A compilação estática fica em .next-build e é servida com npm run start.

Preserve o menu mobile, os dois temas, as animações e a cobrinha quando a mudança
não pedir sua remoção. Links internos devem continuar no projeto local.
Não inclua credenciais. O gráfico tem consulta externa à API pública de
contribuições; mantenha os dados já incluídos como fallback sem rede.
