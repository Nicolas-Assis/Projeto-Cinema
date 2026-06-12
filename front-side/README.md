# 🎬 CinemaAdmin — Front-end

Projeto da avaliação **P2 de Programação Web I** (Centro Universitário Alfredo Nasser — UNIFAN, Turma ESN-5).

Aplicação web de gestão de cinema construída com **React + TypeScript + Vite**, que consome uma **API própria em Node/TypeScript (NestJS + Prisma)**. Permite gerenciar cinemas, salas, filmes, sessões, ingressos, pedidos e lanches com interações dinâmicas.

## 🚀 Rodando localmente

```bash
# 1. Suba a API (na raiz do projeto)
cd ..
npm install
npm run start:dev   # API em http://localhost:3001

# 2. Suba o front-end (nesta pasta)
cd front-side
npm install
npm run dev         # http://localhost:5173
```

## ✅ Checklist da avaliação

| Requisito | Onde está no projeto |
|---|---|
| Pelo menos 5 componentes reutilizáveis (1,5) | `src/components/`: **Sidebar**, **Header**, **PageHeader**, **DataTable**, **StatsCard**, **ConfirmDialog** + biblioteca de UI (`src/components/ui/`) — todos comunicando-se via props |
| `useState` em alguma interação (1,5) | Todas as páginas usam `useState` para diálogos de criar/editar/excluir e formulários (ex.: `src/pages/FilmesPage.tsx`) |
| Pelo menos 5 rotas (1,5) | 10 rotas em `src/App.tsx`: `/` (Dashboard), `/cinemas`, `/salas`, `/filmes`, `/filmes/:id` (**rota dinâmica de detalhes**), `/sessoes`, `/ingressos`, `/pedidos`, `/lanches`, `/sobre` |
| Layout responsivo (1,5) | Grid e Flexbox com Tailwind CSS (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ...`) em todas as páginas |
| Controle de versão no GitHub (0,5) | Repositório no GitHub (link abaixo) |
| Deploy na Vercel (1,0) | Link do deploy abaixo |

**Repositório:** _adicione o link do GitHub aqui_
**Deploy:** _adicione o link da Vercel aqui_

> **Observação sobre o `create-next-app`:** este projeto usa **Vite + React Router** em vez de Next.js, pois consome uma API própria já existente em NestJS. Os mesmos conceitos da prova são aplicados: componentização, hooks, roteamento com rota dinâmica, estilização com escopo e responsividade.

## 🧠 Conceitos aplicados

1. **Componentização atômica** — cards, tabelas, diálogos, cabeçalhos e sidebar são componentes separados que recebem `props`.
2. **React Hooks** — `useState` para diálogos/formulários/filtros; hooks customizados (`src/hooks/`) com TanStack Query encapsulam o acesso à API.
3. **Roteamento** — React Router com rota dinâmica `/filmes/:id`; ao clicar no título de um filme, o usuário é levado à página de detalhes daquele item.
4. **Consumo de API** — client tipado (`src/lib/api-client.ts`) consumindo a API REST em NestJS documentada com Swagger.
5. **Layout responsivo** — Tailwind CSS com Grid/Flexbox e breakpoints.

## ☁️ Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com): **Add New → Project** e importe o repositório.
3. Em **Root Directory**, selecione `front-side` (a Vercel detecta o Vite automaticamente).
4. Em **Environment Variables**, adicione `VITE_API_URL` apontando para a URL pública da API (ex.: deploy da API no Render/Railway).
5. Clique em **Deploy**. O arquivo `vercel.json` já garante que as rotas do React Router funcionem ao recarregar a página.

## 📁 Estrutura

```
src/
  App.tsx              # Definição das 10 rotas
  components/          # Componentes reutilizáveis (layout + UI)
  hooks/               # Hooks customizados de acesso à API
  lib/api-client.ts    # Client HTTP tipado (URL via VITE_API_URL)
  pages/               # Uma página por rota
  types/               # Tipos do domínio
```
