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
import { usePedidos, useCreatePedido, useUpdatePedido, useDeletePedido } from '@/hooks/use-pedidos'
import type { Pedido } from '@/types'
import { formatCurrency } from '@/lib/utils'

const schema = z.object({
  qtInteira: z.coerce.number().int().min(0, 'Mínimo 0'),
  qtMeia: z.coerce.number().int().min(0, 'Mínimo 0'),
  valorTotal: z.coerce.number().min(0, 'Valor obrigatório'),
})
type FormData = z.infer<typeof schema>

const columns: Column<Pedido>[] = [
  { header: 'ID', accessor: 'id' },
  { header: 'Qt. Inteira', accessor: 'qtInteira' },
  { header: 'Qt. Meia', accessor: 'qtMeia' },
  { header: 'Valor Total', accessor: row => formatCurrency(row.valorTotal) },
  { header: 'Lanches', accessor: row => (row as any).lanches?.length ?? 0 },
  { header: 'Ingressos', accessor: row => (row as any).ingressos?.length ?? 0 },
]

export default function PedidosPage() {
  const { data: pedidos = [], isLoading } = usePedidos()
  const createMut = useCreatePedido()
  const updateMut = useUpdatePedido()
  const deleteMut = useDeletePedido()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Pedido | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Pedido | null>(null)

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { qtInteira: 1, qtMeia: 0, valorTotal: 0 },
  })

  const openCreate = () => {
    setEditing(null)
    reset({ qtInteira: 1, qtMeia: 0, valorTotal: 0 })
    setOpen(true)
  }
  const openEdit = (row: Pedido) => {
    setEditing(row)
    reset({ qtInteira: row.qtInteira, qtMeia: row.qtMeia, valorTotal: row.valorTotal })
    setOpen(true)
  }

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
        title="Pedidos"
        description="Pedidos de ingressos e combos"
        action={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" />Novo Pedido</Button>}
      />

      <DataTable columns={columns} data={pedidos} isLoading={isLoading} onEdit={openEdit} onDelete={setDeleteTarget} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Pedido' : 'Novo Pedido'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="qtInteira">Qt. Inteira</Label>
                <Input id="qtInteira" type="number" min={0} {...register('qtInteira')} />
                {errors.qtInteira && <p className="text-xs text-destructive">{errors.qtInteira.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="qtMeia">Qt. Meia</Label>
                <Input id="qtMeia" type="number" min={0} {...register('qtMeia')} />
                {errors.qtMeia && <p className="text-xs text-destructive">{errors.qtMeia.message}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="valorTotal">Valor Total (R$)</Label>
              <Input id="valorTotal" type="number" step="0.01" min={0} {...register('valorTotal')} />
              {errors.valorTotal && <p className="text-xs text-destructive">{errors.valorTotal.message}</p>}
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
        title="Excluir Pedido"
        description={`Tem certeza que deseja excluir o Pedido #${deleteTarget?.id}?`}
        onConfirm={() => { deleteMut.mutate(deleteTarget!.id); setDeleteTarget(null) }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
