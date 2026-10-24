# Atos Barros Almeida — Portfolio

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

Site público: https://www.atosbarros.dev
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
## Controle de versões

- `main`: versão atual aprovada, com retrato circular + `atos.` no header e o mesmo retrato no favicon.
- `v1.0.0-text-brand`: marco da versão anterior aos experimentos com mascote.
Experimentos visuais ficam apenas em cópias locais até serem aprovados.

Para consultar a versão preservada sem mudar seu diretório atual:

```sh
git show v1.0.0-text-brand:src/components/Header.tsx
```

Salvar um commit ou enviar ao GitHub não é um pedido de publicação na Vercel.
A ligação para deploy automático deve ser configurada separadamente, quando desejada.
Antes de trocar de branch, salve ou faça commit das suas alterações locais.

O repositório inclui código, assets e configurações necessárias para reconstruir o site.
Dependências, builds, logs, arquivos `.env` e a pasta local `.vercel` são ignorados.
Em uma nova máquina, use `npm ci` e depois `npm run dev`.

### Identidade visual

O header compartilhado usa `public/mascot-atos.png` com recorte circular.
Os estilos do retrato e do nome estão em `src/app/mascot-brand.css`.
O favicon `src/app/icon.svg` incorpora o mesmo retrato para manter a identidade.
A versão sem mascote permanece disponível na tag `v1.0.0-text-brand`.
Para desfazer apenas esta mudança, use `git revert` no commit que adiciona o mascote
(e publique novamente na Vercel), preservando o restante do histórico.

## Estatísticas de visitas

O componente `Analytics` de `@vercel/analytics/next` fica no layout compartilhado
para medir as visitas em todas as páginas publicadas na Vercel.
Painel: https://vercel.com/moveclub/atos-barros-portfolio/analytics

Os dados são agregados e anônimos; a integração não identifica pessoas por nome.
A coleta começa após a ativação e o deploy, sem recuperar visitas anteriores.
As páginas locais usam o modo de desenvolvimento do SDK.
Eventos personalizados de cliques não foram incluídos nesta configuração básica.