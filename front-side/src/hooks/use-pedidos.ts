import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { pedidoApi } from '@/lib/api-client'
import type { CreatePedido, UpdatePedido } from '@/types'

const KEY = 'pedidos'

export const usePedidos = () => useQuery({ queryKey: [KEY], queryFn: pedidoApi.findAll })

export const useCreatePedido = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreatePedido) => pedidoApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdatePedido = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdatePedido }) => pedidoApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeletePedido = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => pedidoApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
