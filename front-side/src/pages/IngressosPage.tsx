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
import { useIngressos, useCreateIngresso, useUpdateIngresso, useDeleteIngresso } from '@/hooks/use-ingressos'
import { useSessoes } from '@/hooks/use-sessoes'
import { useFilmes } from '@/hooks/use-filmes'
import type { Ingresso } from '@/types'
import { formatCurrency, formatDate } from '@/lib/utils'

const schema = z.object({
  valorInteira: z.coerce.number().min(0.01, 'Valor obrigatório'),
  valorMeia: z.coerce.number().min(0.01, 'Valor obrigatório'),
  sessaoId: z.coerce.number().int().min(1, 'Sessão obrigatória'),
})
type FormData = z.infer<typeof schema>

export default function IngressosPage() {
  const { data: ingressos = [], isLoading } = useIngressos()
  const { data: sessoes = [] } = useSessoes()
  const { data: filmes = [] } = useFilmes()
  const createMut = useCreateIngresso()
  const updateMut = useUpdateIngresso()
  const deleteMut = useDeleteIngresso()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Ingresso | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Ingresso | null>(null)
  const [sessaoId, setSessaoId] = useState('')

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const getSessaoLabel = (s: any) => {
    const filme = filmes.find(f => f.id === s.filmeId)
    return `${filme?.titulo ?? 'Sessão'} - ${formatDate(s.horarioExibicao)}`
  }

  const columns: Column<Ingresso>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Sessão', accessor: row => { const s = sessoes.find(s => s.id === row.sessaoId); return s ? getSessaoLabel(s) : row.sessaoId } },
    { header: 'Inteira', accessor: row => formatCurrency(row.valorInteira) },
    { header: 'Meia', accessor: row => formatCurrency(row.valorMeia) },
    { header: 'Pedidos', accessor: row => (row as any).pedidos?.length ?? 0 },
  ]

  const openCreate = () => {
    setEditing(null); setSessaoId('')
    reset({ valorInteira: 25, valorMeia: 12.5, sessaoId: 0 })
    setOpen(true)
  }
  const openEdit = (row: Ingresso) => {
    setEditing(row); setSessaoId(String(row.sessaoId))
    reset({ valorInteira: row.valorInteira, valorMeia: row.valorMeia, sessaoId: row.sessaoId })
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
        title="Ingressos"
        description="Preços de ingressos por sessão"
        action={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" />Novo Ingresso</Button>}
      />

      <DataTable columns={columns} data={ingressos} isLoading={isLoading} onEdit={openEdit} onDelete={setDeleteTarget} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Ingresso' : 'Novo Ingresso'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label>Sessão</Label>
              <Select value={sessaoId} onValueChange={v => { setSessaoId(v); setValue('sessaoId', Number(v)) }}>
                <SelectTrigger><SelectValue placeholder="Selecione a sessão" /></SelectTrigger>
                <SelectContent>
                  {sessoes.map(s => <SelectItem key={s.id} value={String(s.id)}>{getSessaoLabel(s)}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.sessaoId && <p className="text-xs text-destructive">{errors.sessaoId.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="inteira">Valor Inteira (R$)</Label>
                <Input id="inteira" type="number" step="0.01" {...register('valorInteira')} />
                {errors.valorInteira && <p className="text-xs text-destructive">{errors.valorInteira.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="meia">Valor Meia (R$)</Label>
                <Input id="meia" type="number" step="0.01" {...register('valorMeia')} />
                {errors.valorMeia && <p className="text-xs text-destructive">{errors.valorMeia.message}</p>}
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
        title="Excluir Ingresso"
        description={`Tem certeza que deseja excluir o Ingresso #${deleteTarget?.id}?`}
        onConfirm={() => { deleteMut.mutate(deleteTarget!.id); setDeleteTarget(null) }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
