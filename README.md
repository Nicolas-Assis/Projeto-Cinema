# 🎬 Projeto Cinema — Sistema de Gestão de Cinema

Projeto da avaliação **P2 de Programação Web I** (Centro Universitário Alfredo Nasser — UNIFAN, Turma ESN-5 — Prof. Adriano Baião).

Sistema completo de gestão de cinema, dividido em duas partes:

| Parte | Pasta | Stack |
|---|---|---|
| **API (back-end)** | raiz do repositório | NestJS + Prisma + PostgreSQL + Swagger |
| **Aplicação web (front-end)** | [`front-side/`](front-side/) | React + TypeScript + Vite + Tailwind CSS |

A aplicação web consome a API própria e permite gerenciar **cinemas, salas, filmes, sessões, ingressos, pedidos e lanches**, com interações dinâmicas (criar, editar, excluir, filtrar).

## 🚀 Rodando o projeto

### 1. API (porta 3001)

```bash
npm install
npm run start:dev
```

- Swagger UI: http://localhost:3001/api
- Configure o banco em `.env` (`DATABASE_URL`) — veja `.env.example` se disponível.

> ⚠️ Se a porta 3001 já estiver em uso por outro serviço, ajuste `PORT` no `.env`
> e o `VITE_API_URL` do front (`front-side/.env`).

### 2. Front-end (porta 5173)

```bash
cd front-side
npm install
npm run dev
```

Acesse http://localhost:5173.

## ✅ Checklist da avaliação P2

| Requisito | Onde |
|---|---|
| 5+ componentes reutilizáveis (1,5) | `front-side/src/components/` — Sidebar, Header, PageHeader, DataTable, StatsCard, ConfirmDialog + UI kit, com passagem de props |
| `useState` em interações (1,5) | Todas as páginas (`front-side/src/pages/`) — diálogos, formulários e filtros |
| 5+ rotas (1,5) | 10 rotas em `front-side/src/App.tsx`, incluindo a rota dinâmica `/filmes/:id` (detalhes do filme via clique no card) |
| Layout responsivo (1,5) | Grid/Flexbox com Tailwind e breakpoints em todas as páginas |
| Controle de versão no GitHub (0,5) | Este repositório |
| Deploy (1,0) | Front na **Vercel** (pasta `front-side`), API publicada separadamente |

Detalhes completos do front-end e instruções de deploy: [`front-side/README.md`](front-side/README.md).

## ☁️ Deploy

1. **API**: publique em um serviço Node (Render, Railway, Fly.io...). Defina `DATABASE_URL`, `PORT` e `CORS_ORIGIN` (URL do front na Vercel, ex.: `https://seu-projeto.vercel.app`).
2. **Front**: importe o repositório na [Vercel](https://vercel.com) com **Root Directory = `front-side`** e defina `VITE_API_URL` com a URL pública da API.

## 📁 Estrutura

```
src/                  # API NestJS (controllers, services, DTOs)
prisma/               # Schema e migrações do banco
front-side/           # Aplicação web React (ver README próprio)
```
