import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { lancheApi } from '@/lib/api-client'
import type { CreateLanche, UpdateLanche } from '@/types'

const KEY = 'lanches'

export const useLanches = () => useQuery({ queryKey: [KEY], queryFn: lancheApi.findAll })

export const useCreateLanche = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreateLanche) => lancheApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdateLanche = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdateLanche }) => lancheApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeleteLanche = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => lancheApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
