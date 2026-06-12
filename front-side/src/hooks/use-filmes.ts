import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { filmeApi } from '@/lib/api-client'
import type { CreateFilme, UpdateFilme } from '@/types'

const KEY = 'filmes'

export const useFilmes = () => useQuery({ queryKey: [KEY], queryFn: filmeApi.findAll })
export const useFilme = (id: number) => useQuery({ queryKey: [KEY, id], queryFn: () => filmeApi.findOne(id), enabled: id > 0 })

export const useCreateFilme = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreateFilme) => filmeApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdateFilme = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdateFilme }) => filmeApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeleteFilme = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => filmeApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
