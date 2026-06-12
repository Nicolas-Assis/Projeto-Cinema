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
import { useCinemas, useCreateCinema, useUpdateCinema, useDeleteCinema } from '@/hooks/use-cinemas'
import type { Cinema } from '@/types'

const schema = z.object({
  nome: z.string().min(1, 'Nome obrigatório'),
  endereco: z.string().min(1, 'Endereço obrigatório'),
})
type FormData = z.infer<typeof schema>

const columns: Column<Cinema>[] = [
  { header: 'ID', accessor: 'id' },
  { header: 'Nome', accessor: 'nome' },
  { header: 'Endereço', accessor: 'endereco' },
  { header: 'Salas', accessor: row => (row as any).salas?.length ?? 0 },
  { header: 'Filmes', accessor: row => (row as any).filmes?.length ?? 0 },
]

export default function CinemasPage() {
  const { data = [], isLoading } = useCinemas()
  const createMut = useCreateCinema()
  const updateMut = useUpdateCinema()
  const deleteMut = useDeleteCinema()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Cinema | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Cinema | null>(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const openCreate = () => { setEditing(null); reset({ nome: '', endereco: '' }); setOpen(true) }
  const openEdit = (row: Cinema) => { setEditing(row); reset({ nome: row.nome, endereco: row.endereco }); setOpen(true) }

  const onSubmit = (data: FormData) => {
    if (editing) {
      updateMut.mutate({ id: editing.id, data }, { onSuccess: () => setOpen(false) })
    } else {
      createMut.mutate(data, { onSuccess: () => setOpen(false) })
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cinemas"
        description="Gerencie todos os cinemas cadastrados no sistema"
        action={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" />Novo Cinema</Button>}
      />

      <DataTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        onEdit={openEdit}
        onDelete={setDeleteTarget}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Cinema' : 'Novo Cinema'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" {...register('nome')} placeholder="Ex: Cinemark Shopping" />
              {errors.nome && <p className="text-xs text-destructive">{errors.nome.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="endereco">Endereço</Label>
              <Input id="endereco" {...register('endereco')} placeholder="Ex: Av. Paulista, 1000" />
              {errors.endereco && <p className="text-xs text-destructive">{errors.endereco.message}</p>}
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
        title="Excluir Cinema"
        description={`Tem certeza que deseja excluir "${deleteTarget?.nome}"? Esta ação não pode ser desfeita.`}
        onConfirm={() => { deleteMut.mutate(deleteTarget!.id); setDeleteTarget(null) }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
