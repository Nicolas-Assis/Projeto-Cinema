import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { salaApi } from '@/lib/api-client'
import type { CreateSala, UpdateSala } from '@/types'

const KEY = 'salas'

export const useSalas = () => useQuery({ queryKey: [KEY], queryFn: salaApi.findAll })
export const useSala = (id: number) => useQuery({ queryKey: [KEY, id], queryFn: () => salaApi.findOne(id), enabled: id > 0 })

export const useCreateSala = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreateSala) => salaApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdateSala = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdateSala }) => salaApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeleteSala = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => salaApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
