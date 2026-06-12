import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { cinemaApi } from '@/lib/api-client'
import type { CreateCinema, UpdateCinema } from '@/types'

const KEY = 'cinemas'

export const useCinemas = () => useQuery({ queryKey: [KEY], queryFn: cinemaApi.findAll })
export const useCinema = (id: number) => useQuery({ queryKey: [KEY, id], queryFn: () => cinemaApi.findOne(id), enabled: id > 0 })

export const useCreateCinema = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (data: CreateCinema) => cinemaApi.create(data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useUpdateCinema = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: ({ id, data }: { id: number; data: UpdateCinema }) => cinemaApi.update(id, data), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
export const useDeleteCinema = () => {
  const qc = useQueryClient()
  return useMutation({ mutationFn: (id: number) => cinemaApi.remove(id), onSuccess: () => qc.invalidateQueries({ queryKey: [KEY] }) })
}
