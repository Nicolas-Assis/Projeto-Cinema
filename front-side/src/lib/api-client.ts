import type {
  Cinema, Sala, Filme, Sessao, Ingresso, Pedido, LancheCombo,
  CreateCinema, CreateSala, CreateFilme, CreateSessao, CreateIngresso, CreatePedido, CreateLanche,
  UpdateCinema, UpdateSala, UpdateFilme, UpdateSessao, UpdateIngresso, UpdatePedido, UpdateLanche,
} from '@/types'

const BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { message?: string }
    throw new Error(err.message ?? `HTTP ${res.status}`)
  }
  if (res.status === 204) return undefined as T
  return res.json() as Promise<T>
}

export const cinemaApi = {
  findAll: () => api<Cinema[]>('/cinema'),
  findOne: (id: number) => api<Cinema>(`/cinema/${id}`),
  create: (data: CreateCinema) => api<Cinema>('/cinema', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdateCinema) => api<Cinema>(`/cinema/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/cinema/${id}`, { method: 'DELETE' }),
  addFilme: (cinemaId: number, filmeId: number) => api<Cinema>(`/cinema/${cinemaId}/filmes/${filmeId}`, { method: 'POST' }),
  removeFilme: (cinemaId: number, filmeId: number) => api<Cinema>(`/cinema/${cinemaId}/filmes/${filmeId}`, { method: 'DELETE' }),
}

export const salaApi = {
  findAll: () => api<Sala[]>('/sala'),
  findOne: (id: number) => api<Sala>(`/sala/${id}`),
  create: (data: CreateSala) => api<Sala>('/sala', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdateSala) => api<Sala>(`/sala/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/sala/${id}`, { method: 'DELETE' }),
  capacidade: (id: number) => api<{ total: number; ocupadas: number; livres: number }>(`/sala/${id}/capacidade`),
}

export const filmeApi = {
  findAll: () => api<Filme[]>('/filme'),
  findOne: (id: number) => api<Filme>(`/filme/${id}`),
  create: (data: CreateFilme) => api<Filme>('/filme', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdateFilme) => api<Filme>(`/filme/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/filme/${id}`, { method: 'DELETE' }),
}

export const sessaoApi = {
  findAll: () => api<Sessao[]>('/sessao'),
  findOne: (id: number) => api<Sessao>(`/sessao/${id}`),
  create: (data: CreateSessao) => api<Sessao>('/sessao', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdateSessao) => api<Sessao>(`/sessao/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/sessao/${id}`, { method: 'DELETE' }),
}

export const ingressoApi = {
  findAll: () => api<Ingresso[]>('/ingresso'),
  findOne: (id: number) => api<Ingresso>(`/ingresso/${id}`),
  create: (data: CreateIngresso) => api<Ingresso>('/ingresso', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdateIngresso) => api<Ingresso>(`/ingresso/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/ingresso/${id}`, { method: 'DELETE' }),
}

export const pedidoApi = {
  findAll: () => api<Pedido[]>('/pedido'),
  findOne: (id: number) => api<Pedido>(`/pedido/${id}`),
  create: (data: CreatePedido) => api<Pedido>('/pedido', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdatePedido) => api<Pedido>(`/pedido/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/pedido/${id}`, { method: 'DELETE' }),
}

export const lancheApi = {
  findAll: () => api<LancheCombo[]>('/lanche-combo'),
  findOne: (id: number) => api<LancheCombo>(`/lanche-combo/${id}`),
  create: (data: CreateLanche) => api<LancheCombo>('/lanche-combo', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: UpdateLanche) => api<LancheCombo>(`/lanche-combo/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id: number) => api<void>(`/lanche-combo/${id}`, { method: 'DELETE' }),
}
