# Relatório — Avaliação P2

| | |
|---|---|
| **Instituição** | Centro Universitário Alfredo Nasser (UNIFAN) |
| **Curso** | Engenharia de Software |
| **Turma** | ESN-5 |
| **Disciplina** | Programação Web I |
| **Professor** | Adriano Baião |
| **Avaliação** | P2 — 1ª chamada |
| **Aluno(s)** | Nicolas Assis, Luiz Fernando, Luiz Gustavo
| **Data** | 12/06/2026 |

---

## 1. Apresentação do projeto

**Projeto Cinema** — sistema web de gestão de cinema composto por duas partes que se comunicam:

- **API REST (back-end):** desenvolvida em **Node.js/TypeScript com NestJS e Prisma**, conectada a um banco **PostgreSQL** e documentada com **Swagger**. Expõe os recursos de cinemas, salas, filmes, sessões, ingressos, pedidos e lanches/combos.
- **Aplicação web (front-end):** desenvolvida em **React + TypeScript com Vite**, estilizada com **Tailwind CSS** e roteada com **React Router**. Consome a API própria (em vez de dados mockados) e oferece um catálogo interativo com operações de criar, editar, excluir, filtrar e visualizar detalhes.

> 🔗 **Repositório (GitHub):** _colar o link aqui_
> 🔗 **Deploy (Vercel):** _colar o link aqui_

## 2. Como chegamos ao resultado

1. **Modelagem do domínio:** definimos as entidades do cinema (Cinema, Sala, Filme, Sessão, Ingresso, Pedido, LancheCombo) no schema do Prisma e geramos as migrações no PostgreSQL.
2. **Construção da API:** criamos os controllers e services no NestJS com DTOs validados (`class-validator`/`ValidationPipe`) e documentamos tudo com Swagger (`/api`).
3. **Geração do client tipado:** a partir do OpenAPI da API, montamos um client HTTP tipado no front (`src/lib/api-client.ts`), garantindo que front e back usem os mesmos contratos.
4. **Construção da interface:** quebramos a interface em componentes reutilizáveis e criamos uma página por recurso, usando hooks customizados (TanStack Query) para buscar e mutar dados em tempo real.
5. **Rotas e detalhes:** adicionamos a rota dinâmica `/filmes/:id` — ao clicar no título do card de um filme, o usuário navega para a página de detalhes daquele item — e a página institucional `/sobre`.
6. **Preparação para produção:** parametrizamos a URL da API por variável de ambiente (`VITE_API_URL`), configuramos CORS por ambiente (`CORS_ORIGIN`), adicionamos `vercel.json` para o roteamento SPA e publicamos o projeto.

## 3. Atendimento aos requisitos da prova

### 3.1 Pensar em Componentes (Componentização Atômica)

A interface foi separada em componentes React reutilizáveis que se comunicam por `props` ([front-side/src/components/](front-side/src/components/)):

| Componente | Papel |
|---|---|
| `layout/Sidebar.tsx` | Menu lateral de navegação (recebe rotas e estado ativo) |
| `layout/Header.tsx` | Cabeçalho da aplicação |
| `PageHeader.tsx` | Título + descrição + botão de ação de cada página (via props) |
| `DataTable.tsx` | Tabela genérica reutilizada por várias páginas (colunas via props) |
| `StatsCard.tsx` | Cartão de indicador do dashboard (título, valor e ícone via props) |
| `ConfirmDialog.tsx` | Diálogo de confirmação de exclusão (controlado por props/callbacks) |
| `ui/*` | Biblioteca de componentes base (Button, Card, Dialog, Input, Select, Badge...) |

### 3.2 Gerenciamento de estado com React Hooks (`useState`)

Todas as páginas usam `useState` para controlar interações do usuário — abertura de diálogos de criar/editar, alvo de exclusão e campos de formulário. Exemplo em [front-side/src/pages/FilmesPage.tsx](front-side/src/pages/FilmesPage.tsx):

```tsx
const [open, setOpen] = useState(false)          // diálogo criar/editar
const [editing, setEditing] = useState(null)     // filme em edição
const [deleteTarget, setDeleteTarget] = useState(null) // confirmação de exclusão
```

Além disso, hooks customizados ([front-side/src/hooks/](front-side/src/hooks/)) encapsulam o consumo da API com cache e atualização automática da tela após cada mutação.

### 3.3 Roteamento (mínimo 5 rotas)

**10 rotas** definidas em [front-side/src/App.tsx](front-side/src/App.tsx):

`/` (Dashboard) · `/cinemas` · `/salas` · `/filmes` · **`/filmes/:id` (rota dinâmica de detalhes)** · `/sessoes` · `/ingressos` · `/pedidos` · `/lanches` · `/sobre`

A rota dinâmica atende o requisito de detalhes do item: o card do filme leva à página específica daquele filme via componente `<Link>`.

### 3.4 Estilização e responsividade

A estilização usa **Tailwind CSS** com escopo por componente. O layout é responsivo com **Grid e Flexbox** e breakpoints — por exemplo, a grade de filmes:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

1 coluna no celular, 2 no tablet, 3–4 no desktop. A sidebar e os formulários também se adaptam à largura da tela.

> **Observação sobre o item "create-next-app":** optamos por **Vite + React Router** em vez de Next.js porque o projeto consome uma **API própria já existente em NestJS** (não uma API pública nem dados mockados). Todos os conceitos pedidos na prova foram aplicados de forma equivalente: componentização, hooks, roteamento com rota dinâmica, estilização com escopo e responsividade.

### 3.5 Controle de versão

O projeto está versionado com **Git** e publicado no **GitHub**, com `.gitignore` configurado para manter fora do repositório `node_modules`, artefatos de build (`dist`) e variáveis de ambiente (`.env`).

### 3.6 Deploy

- **Front-end:** publicado na **Vercel** (Root Directory `front-side`), com `VITE_API_URL` apontando para a API pública e `vercel.json` garantindo o funcionamento das rotas do React Router.
- **API:** publicada em serviço de hospedagem Node, com `DATABASE_URL`, `PORT` e `CORS_ORIGIN` configurados por variável de ambiente.

## 4. Checklist da avaliação

| Item | Pontos | Status | Evidência |
|---|---|---|---|
| Projeto com `create-next-app` | 0,5 | ⚠️ Adaptado | Vite + React Router (justificativa na seção 3.4) |
| 5+ componentes reutilizáveis | 1,5 | ✅ | 6 componentes próprios + biblioteca de UI (seção 3.1) |
| `useState` em interações | 1,5 | ✅ | Diálogos, formulários e filtros em todas as páginas (seção 3.2) |
| 5+ rotas | 1,5 | ✅ | 10 rotas, incluindo a dinâmica `/filmes/:id` (seção 3.3) |
| Layout responsivo (Flexbox/Grid) | 1,5 | ✅ | Grid/Flexbox com breakpoints (seção 3.4) |
| Controle de versão no GitHub | 0,5 | ✅ | Repositório público (link na seção 1) |
| Deploy (Vercel/Netlify) | 1,0 | ✅ | Link ao vivo na Vercel (seção 1) |

## 5. Como executar localmente

```bash
# API (raiz do repositório) — http://localhost:3001 (Swagger em /api)
npm install
npm run start:dev

# Front-end — http://localhost:5173
cd front-side
npm install
npm run dev
```

## 6. Conclusão

O projeto cumpre os objetivos da avaliação: aplica componentização atômica com passagem de props, gerencia estado dinâmico com React Hooks, implementa roteamento com rota dinâmica de detalhes, possui layout responsivo, está versionado no GitHub e publicado ao vivo. Como diferencial, em vez de consumir uma API pública ou dados mockados, a aplicação consome uma **API REST própria desenvolvida em Node/TypeScript (NestJS + Prisma + PostgreSQL + Swagger)**, integrando o conteúdo da disciplina a um cenário completo de desenvolvimento full-stack.
