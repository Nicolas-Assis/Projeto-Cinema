import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { Plus, Coffee, Pencil, Trash2, ShoppingCart } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { useLanches, useCreateLanche, useUpdateLanche, useDeleteLanche } from '@/hooks/use-lanches'
import { usePedidos } from '@/hooks/use-pedidos'
import { formatCurrency } from '@/lib/utils'

const schema = z.object({
  nome: z.string().min(1, 'Nome obrigatório'),
  descricao: z.string().min(5, 'Descrição deve ter ao menos 5 caracteres'),
  valorUnitario: z.coerce.number().min(0.01, 'Valor obrigatório'),
  qtUnidade: z.coerce.number().int().min(1, 'Quantidade mínima: 1'),
  subtotal: z.coerce.number().min(0),
  pedidoId: z.coerce.number().int().min(1, 'Selecione um pedido'),
})
type FormData = z.infer<typeof schema>

export default function LanchesPage() {
  const { data: lanches = [], isLoading } = useLanches()
  const { data: pedidos = [] } = usePedidos()
  const createMut = useCreateLanche()
  const updateMut = useUpdateLanche()
  const deleteMut = useDeleteLanche()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<any>(null)
  const [deleteTarget, setDeleteTarget] = useState<any>(null)
  const [pedidoId, setPedidoId] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: '', descricao: '', valorUnitario: 0, qtUnidade: 1, subtotal: 0, pedidoId: 0 },
  })

  const valorUnitario = watch('valorUnitario')
  const qtUnidade = watch('qtUnidade')

  const openCreate = () => {
    setEditing(null)
    setPedidoId('')
    reset({ nome: '', descricao: '', valorUnitario: 0, qtUnidade: 1, subtotal: 0, pedidoId: 0 })
    setOpen(true)
  }
  const openEdit = (row: any) => {
    setEditing(row)
    setPedidoId(String(row.pedidoId))
    reset({
      nome: row.nome,
      descricao: row.descricao,
      valorUnitario: row.valorUnitario,
      qtUnidade: row.qtUnidade,
      subtotal: row.subtotal,
      pedidoId: row.pedidoId,
    })
    setOpen(true)
  }

  const onSubmit = (data: FormData) => {
    const payload = { ...data, subtotal: data.valorUnitario * data.qtUnidade }
    if (editing) {
      updateMut.mutate({ id: editing.id, data: payload }, { onSuccess: () => setOpen(false) })
    } else {
      createMut.mutate(payload, { onSuccess: () => setOpen(false) })
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Lanches & Combos"
        description="Combos e lanches vinculados a pedidos"
        action={
          <Button onClick={openCreate} className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Combo
          </Button>
        }
      />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-lg" />
          ))}
        </div>
      ) : lanches.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
          <Coffee className="h-16 w-16 mb-4 opacity-30" />
          <p className="text-lg">Nenhum combo cadastrado</p>
          <p className="text-sm mt-1">Clique em "Novo Combo" para começar</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {lanches.map((lanche) => (
            <Card key={lanche.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-5 pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm leading-tight">{lanche.nome}</h3>
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    Pedido #{lanche.pedidoId}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{lanche.descricao}</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Unitário</span>
                    <span className="text-white">{formatCurrency(lanche.valorUnitario)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantidade</span>
                    <span className="text-white">{lanche.qtUnidade}x</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-1 mt-1">
                    <span>Subtotal</span>
                    <span className="text-primary font-semibold">{formatCurrency(lanche.subtotal)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-3 gap-2">
                <Button size="sm" variant="ghost" className="flex-1 h-8 text-xs" onClick={() => openEdit(lanche)}>
                  <Pencil className="h-3.5 w-3.5 mr-1" />
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex-1 h-8 text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => setDeleteTarget(lanche)}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-1" />
                  Excluir
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Combo' : 'Novo Combo'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" {...register('nome')} placeholder="Ex: Combo Família" />
              {errors.nome && <p className="text-xs text-destructive">{errors.nome.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea
                id="descricao"
                {...register('descricao')}
                rows={2}
                placeholder="Ex: Pipoca grande + 2 refrigerantes"
              />
              {errors.descricao && <p className="text-xs text-destructive">{errors.descricao.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="valorUnitario">Valor Unitário (R$)</Label>
                <Input id="valorUnitario" type="number" step="0.01" {...register('valorUnitario')} />
                {errors.valorUnitario && <p className="text-xs text-destructive">{errors.valorUnitario.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="qtUnidade">Quantidade</Label>
                <Input id="qtUnidade" type="number" min={1} {...register('qtUnidade')} />
                {errors.qtUnidade && <p className="text-xs text-destructive">{errors.qtUnidade.message}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Subtotal</Label>
              <div className="px-3 py-2 bg-muted rounded-md text-sm font-medium text-white">
                {formatCurrency((Number(valorUnitario) || 0) * (Number(qtUnidade) || 0))}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Pedido</Label>
              <Select
                value={pedidoId}
                onValueChange={(v) => {
                  setPedidoId(v)
                  setValue('pedidoId', Number(v), { shouldValidate: true })
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o pedido" />
                </SelectTrigger>
                <SelectContent>
                  {pedidos.map((p) => {
                    const filmes = [...new Set((p.ingressos ?? []).map((i) => i.sessao?.filme?.titulo).filter(Boolean))]
                    return (
                      <SelectItem key={p.id} value={String(p.id)}>
                        Pedido #{p.id} · {filmes.length > 0 ? `${filmes.join(', ')} · ` : ''}
                        {formatCurrency(p.valorTotal)}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              {errors.pedidoId && <p className="text-xs text-destructive">{errors.pedidoId.message}</p>}
              {pedidos.length === 0 && (
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ShoppingCart className="h-3 w-3" />
                  Nenhum pedido disponível —{' '}
                  <Link to="/pedidos" className="text-primary underline">
                    crie um pedido primeiro
                  </Link>
                </p>
              )}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={createMut.isPending || updateMut.isPending || pedidos.length === 0}>
                {editing ? 'Salvar' : 'Criar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={!!deleteTarget}
        title="Excluir Combo"
        description={`Tem certeza que deseja excluir "${deleteTarget?.nome}"?`}
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
