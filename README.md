# Academia de IA

Portal de treinamento em IA para os setores do escritório (Comercial, Financeiro, Jurídico e Controladoria), com aulas, modelos de prompt, casos práticos, cuidados e exame por trilha.

## Rodar local

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `data/trilhas.ts` — todo o conteúdo dos treinamentos (editar aqui para mudar textos, prompts e questões)
- `components/Portal.tsx` — cabeçalho, rotas por hash (`#comercial`, `#juridico`...) e rodapé
- `components/Inicio.tsx` — página inicial com a estante de volumes, sumário e método CASO
- `components/TrilhaView.tsx` — página de cada trilha (aulas, prompts, casos, cuidados, exame)
- `components/progresso.ts` — progresso do usuário salvo no localStorage
- `app/globals.css` — visual e tema claro/escuro

## Versão de página única

`npm run preview` gera `dist/preview.html`, um arquivo único para compartilhar sem servidor.

## Deploy

Funciona direto na Vercel: importe o repositório e faça o deploy, sem configuração extra.
