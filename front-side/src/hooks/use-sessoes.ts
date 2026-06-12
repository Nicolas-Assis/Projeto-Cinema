import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { sessaoApi } from '@/lib/api-client'
import type { CreateSessao, UpdateSessao } from '@/types'

const KEY = 'sessoes'

export const useSessoes = () => useQuery({ queryKey: [KEY], queryFn: sessaoApi.findAll })
export const useSessao = (id: number) => useQuery({ queryKey: [KEY, id], queryFn: () => sessaoApi.findOne(id), enabled: id > 0 })

export const useCreateSessao = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreateSessao) => sessaoApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdateSessao = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdateSessao }) => sessaoApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeleteSessao = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => sessaoApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
