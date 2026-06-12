import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { Plus, Ticket } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { DataTable, Column } from '@/components/DataTable'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import { MultiSelect } from '@/components/MultiSelect'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { usePedidos, useCreatePedido, useUpdatePedido, useDeletePedido } from '@/hooks/use-pedidos'
import { useIngressos } from '@/hooks/use-ingressos'
import type { Pedido, Ingresso } from '@/types'
import { formatCurrency } from '@/lib/utils'

const schema = z.object({
  qtInteira: z.coerce.number().int().min(0, 'Mínimo 0'),
  qtMeia: z.coerce.number().int().min(0, 'Mínimo 0'),
})
type FormData = z.infer<typeof schema>

function descreveIngressos(pedido: Pedido) {
  const filmes = (pedido.ingressos ?? []).map((i) => i.sessao?.filme?.titulo).filter(Boolean)
  if (filmes.length === 0) return `${pedido.ingressos?.length ?? 0} ingresso(s)`
  return [...new Set(filmes)].join(', ')
}

const columns: Column<Pedido>[] = [
  { header: 'ID', accessor: (row) => `#${row.id}` },
  { header: 'Filme(s)', accessor: descreveIngressos },
  { header: 'Inteiras', accessor: 'qtInteira' },
  { header: 'Meias', accessor: 'qtMeia' },
  { header: 'Lanches', accessor: (row) => row.lanches?.length ?? 0 },
  { header: 'Valor Total', accessor: (row) => formatCurrency(row.valorTotal) },
]

function labelIngresso(ingresso: Ingresso) {
  const filme = ingresso.sessao?.filme?.titulo ?? `Sessão #${ingresso.sessaoId}`
  return `#${ingresso.id} · ${filme}`
}

function descricaoIngresso(ingresso: Ingresso) {
  const horario = ingresso.sessao?.horarioExibicao
    ? new Date(ingresso.sessao.horarioExibicao).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    : null
  const precos = `Inteira ${formatCurrency(ingresso.valorInteira)} · Meia ${formatCurrency(ingresso.valorMeia)}`
  return horario ? `${horario} · ${precos}` : precos
}

export default function PedidosPage() {
  const { data: pedidos = [], isLoading } = usePedidos()
  const { data: ingressos = [] } = useIngressos()
  const createMut = useCreatePedido()
  const updateMut = useUpdatePedido()
  const deleteMut = useDeletePedido()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Pedido | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Pedido | null>(null)
  const [ingressoIds, setIngressoIds] = useState<string[]>([])
  const [ingressosError, setIngressosError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { qtInteira: 1, qtMeia: 0 },
  })

  const qtInteira = Number(watch('qtInteira')) || 0
  const qtMeia = Number(watch('qtMeia')) || 0
  const ingressosSelecionados = ingressos.filter((i) => ingressoIds.includes(String(i.id)))
  const valorTotal = ingressosSelecionados.reduce(
    (total, i) => total + i.valorInteira * qtInteira + i.valorMeia * qtMeia,
    0
  )

  const openCreate = () => {
    setEditing(null)
    setIngressoIds([])
    setIngressosError('')
    reset({ qtInteira: 1, qtMeia: 0 })
    setOpen(true)
  }
  const openEdit = (row: Pedido) => {
    setEditing(row)
    setIngressoIds((row.ingressos ?? []).map((i) => String(i.id)))
    setIngressosError('')
    reset({ qtInteira: row.qtInteira, qtMeia: row.qtMeia })
    setOpen(true)
  }

  const onSubmit = (data: FormData) => {
    if (ingressoIds.length === 0) {
      setIngressosError('Selecione ao menos um ingresso')
      return
    }
    const payload = {
      ...data,
      valorTotal,
      ingressoIds: ingressoIds.map(Number),
    }
    if (editing) {
      updateMut.mutate({ id: editing.id, data: payload }, { onSuccess: () => setOpen(false) })
    } else {
      createMut.mutate(payload, { onSuccess: () => setOpen(false) })
    }
  }

  const semIngressos = ingressos.length === 0

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pedidos"
        description="Pedidos de ingressos e combos"
        action={
          <Button onClick={openCreate} className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Pedido
          </Button>
        }
      />

      <DataTable columns={columns} data={pedidos} isLoading={isLoading} onEdit={openEdit} onDelete={setDeleteTarget} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Pedido' : 'Novo Pedido'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label>Ingressos</Label>
              <MultiSelect
                options={ingressos.map((i) => ({
                  value: String(i.id),
                  label: labelIngresso(i),
                  description: descricaoIngresso(i),
                }))}
                selected={ingressoIds}
                onChange={(ids) => {
                  setIngressoIds(ids)
                  setIngressosError('')
                }}
                placeholder="Selecione os ingressos do pedido"
                emptyMessage="Nenhum ingresso cadastrado"
              />
              {ingressosError && <p className="text-xs text-destructive">{ingressosError}</p>}
              {semIngressos && (
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Ticket className="h-3 w-3" />
                  Nenhum ingresso disponível —{' '}
                  <Link to="/ingressos" className="text-primary underline">
                    cadastre um ingresso
                  </Link>
                </p>
              )}
            </div>
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
              <Label>Valor Total</Label>
              <div className="px-3 py-2 bg-muted rounded-md text-sm font-medium text-white">
                {formatCurrency(valorTotal)}
              </div>
              <p className="text-xs text-muted-foreground">
                Calculado automaticamente: inteiras e meias × valores dos ingressos selecionados
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={createMut.isPending || updateMut.isPending || semIngressos}>
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
        onConfirm={() => {
          deleteMut.mutate(deleteTarget!.id)
          setDeleteTarget(null)
        }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
