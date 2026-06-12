import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ingressoApi } from '@/lib/api-client'
import type { CreateIngresso, UpdateIngresso } from '@/types'

const KEY = 'ingressos'

export const useIngressos = () => useQuery({ queryKey: [KEY], queryFn: ingressoApi.findAll })

export const useCreateIngresso = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreateIngresso) => ingressoApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdateIngresso = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdateIngresso }) => ingressoApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeleteIngresso = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => ingressoApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
