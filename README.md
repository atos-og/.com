# Portfolio — cópia local de davi.im

Projeto completo em Next.js, React e TypeScript, salvo em `Documentos\portfolio`.
Inclui as seis páginas, fontes e mídias locais, tema claro/escuro, menu do celular,
animação de apresentação e jogo da cobrinha.

## Abrir e executar

1. No VS Code, escolha **Arquivo → Abrir Pasta** e abra esta pasta `portfolio`.
2. No terminal integrado, execute `.\iniciar.cmd`.
3. Abra **http://localhost:3000**.

Você também pode dar dois cliques em `iniciar.cmd` pelo Explorador de Arquivos.
O terminal precisa ficar aberto enquanto você usa o site. Use Ctrl+C para parar.

Com Node.js e npm disponíveis no terminal, os comandos usuais também funcionam:

```sh
npm install
npm run dev
npm run build
npm run start
```

As dependências já foram instaladas neste computador. O iniciador também reconhece
o Node que acompanha o Codex caso `node` ainda não esteja no PATH do Windows.

## Onde editar

- `src/app/page.tsx`: página inicial, apresentação, projetos em destaque, gráfico e contato.
- `src/app/projects/page.tsx`: lista completa de projetos.
- `src/app/experience/page.tsx`: experiência.
- `src/app/blog/page.tsx`: lista de artigos.
- `src/app/blog/hello-world/page.tsx` e `src/app/blog/skills-mgr/page.tsx`: artigos.
- `src/components/Header.tsx` e `Footer.tsx`: navegação e rodapé compartilhados.
- `src/app/globals.css`: aparência, fontes, responsividade e animações.
- `public/site-runtime.js`: troca de tema, menu, apresentação animada e cobrinha.
- `public/assets/original`: fontes e mídias recuperadas do site.

O nome, o About, os projetos, as redes sociais e o contato foram personalizados
para Atos Barros Almeida. Edite a biografia e os projetos em `src/data/profile.ts`.
A página de experiência contém a trajetória de Atos; o blog está vazio até a publicação de novos artigos.
Não é preciso alterar nada no site original para editar esta cópia.

## Dados e serviços externos

As páginas e mídias são locais. O gráfico de contribuições consulta a mesma API
pública de contribuições do GitHub usada pelo original; na falta de rede, mantém
os dados incluídos na página. Os links de projetos, redes sociais e e-mail
continuam apontando para seus destinos externos. Não há servidor privado, login,
banco de dados ou chaves de API incluídos.

## Produção

`npm run build` gera o export estático em `.next-build`. `npm run start` serve esse
resultado em http://localhost:3000. O comando `npm run typecheck` verifica TypeScript.
O código-fonte foi capturado com Ditto e complementado com os elementos e scripts
públicos que a captura estática não preservou. O relatório local de verificação
fica em `VERIFICACAO.md`.

## Publicação na Vercel

Site público: https://atos-barros-portfolio.vercel.app
Projeto Vercel: moveclub/atos-barros-portfolio.

O arquivo vercel.json configura npm run build e serve o export .next-build.
As URLs canônicas e o sitemap usam o domínio de produção fornecido pela Vercel;
NEXT_PUBLIC_SITE_ORIGIN pode sobrescrevê-lo quando houver domínio próprio.

Este deploy foi feito pela CLI. Salvar no VS Code atualiza apenas o localhost.
Para publicar novas alterações na pasta do projeto, execute:

```powershell
npx vercel --prod --scope moveclub
```

O projeto ainda não está conectado a um repositório Git para deploy automático.