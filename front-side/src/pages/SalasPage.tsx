import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Plus } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { DataTable, Column } from '@/components/DataTable'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSalas, useCreateSala, useUpdateSala, useDeleteSala } from '@/hooks/use-salas'
import { useCinemas } from '@/hooks/use-cinemas'
import type { Sala } from '@/types'

const schema = z.object({
  numero: z.coerce.number().int().min(1, 'Número obrigatório'),
  capacidade: z.coerce.number().int().min(1, 'Capacidade obrigatória'),
  cinemaId: z.coerce.number().int().min(1, 'Cinema obrigatório'),
})
type FormData = z.infer<typeof schema>

export default function SalasPage() {
  const { data: salas = [], isLoading } = useSalas()
  const { data: cinemas = [] } = useCinemas()
  const createMut = useCreateSala()
  const updateMut = useUpdateSala()
  const deleteMut = useDeleteSala()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Sala | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Sala | null>(null)
  const [selectedCinema, setSelectedCinema] = useState<string>('')

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const columns: Column<Sala>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nº Sala', accessor: 'numero' },
    { header: 'Cinema', accessor: row => cinemas.find(c => c.id === row.cinemaId)?.nome ?? row.cinemaId },
    { header: 'Capacidade', accessor: 'capacidade' },
    { header: 'Sessões', accessor: row => (row as any).sessoes?.length ?? '-' },
  ]

  const openCreate = () => {
    setEditing(null)
    setSelectedCinema('')
    reset({ numero: 1, capacidade: 100, cinemaId: 0 })
    setOpen(true)
  }
  const openEdit = (row: Sala) => {
    setEditing(row)
    setSelectedCinema(String(row.cinemaId))
    reset({ numero: row.numero, capacidade: row.capacidade, cinemaId: row.cinemaId })
    setOpen(true)
  }

  const onSubmit = (data: FormData) => {
    const payload = { ...data, poutronas: [Array.from({ length: data.capacidade }, (_, i) => i + 1)] }
    if (editing) {
      updateMut.mutate({ id: editing.id, data: payload }, { onSuccess: () => setOpen(false) })
    } else {
      createMut.mutate(payload, { onSuccess: () => setOpen(false) })
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Salas"
        description="Gerencie as salas de cada cinema"
        action={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" />Nova Sala</Button>}
      />

      <DataTable columns={columns} data={salas} isLoading={isLoading} onEdit={openEdit} onDelete={setDeleteTarget} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Sala' : 'Nova Sala'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label>Cinema</Label>
              <Select
                value={selectedCinema}
                onValueChange={v => { setSelectedCinema(v); setValue('cinemaId', Number(v)) }}
              >
                <SelectTrigger><SelectValue placeholder="Selecione um cinema" /></SelectTrigger>
                <SelectContent>
                  {cinemas.map(c => <SelectItem key={c.id} value={String(c.id)}>{c.nome}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.cinemaId && <p className="text-xs text-destructive">{errors.cinemaId.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="numero">Número da Sala</Label>
                <Input id="numero" type="number" {...register('numero')} />
                {errors.numero && <p className="text-xs text-destructive">{errors.numero.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="capacidade">Capacidade</Label>
                <Input id="capacidade" type="number" {...register('capacidade')} />
                {errors.capacidade && <p className="text-xs text-destructive">{errors.capacidade.message}</p>}
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button type="submit" disabled={createMut.isPending || updateMut.isPending}>
                {editing ? 'Salvar' : 'Criar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={!!deleteTarget}
        title="Excluir Sala"
        description={`Tem certeza que deseja excluir a Sala ${deleteTarget?.numero}?`}
        onConfirm={() => { deleteMut.mutate(deleteTarget!.id); setDeleteTarget(null) }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
