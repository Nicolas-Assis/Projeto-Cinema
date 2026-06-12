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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSessoes, useCreateSessao, useUpdateSessao, useDeleteSessao } from '@/hooks/use-sessoes'
import { useCinemas } from '@/hooks/use-cinemas'
import { useSalas } from '@/hooks/use-salas'
import { useFilmes } from '@/hooks/use-filmes'
import type { Sessao } from '@/types'
import { formatDate } from '@/lib/utils'

const schema = z.object({
  horarioExibicao: z.string().min(1, 'Horário obrigatório'),
  filmeId: z.coerce.number().int().min(1, 'Filme obrigatório'),
  salaId: z.coerce.number().int().min(1, 'Sala obrigatória'),
  cinemaId: z.coerce.number().int().min(1, 'Cinema obrigatório'),
})
type FormData = z.infer<typeof schema>

export default function SessoesPage() {
  const { data: sessoes = [], isLoading } = useSessoes()
  const { data: cinemas = [] } = useCinemas()
  const { data: salas = [] } = useSalas()
  const { data: filmes = [] } = useFilmes()
  const createMut = useCreateSessao()
  const updateMut = useUpdateSessao()
  const deleteMut = useDeleteSessao()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Sessao | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Sessao | null>(null)
  const [cinemaId, setCinemaId] = useState('')
  const [filmeId, setFilmeId] = useState('')
  const [salaId, setSalaId] = useState('')

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const filteredSalas = cinemaId ? salas.filter(s => s.cinemaId === Number(cinemaId)) : salas

  const columns: Column<Sessao>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Filme', accessor: row => filmes.find(f => f.id === row.filmeId)?.titulo ?? row.filmeId },
    { header: 'Cinema', accessor: row => cinemas.find(c => c.id === row.cinemaId)?.nome ?? row.cinemaId },
    { header: 'Sala', accessor: row => salas.find(s => s.id === row.salaId)?.numero ?? row.salaId },
    { header: 'Horário', accessor: row => formatDate(row.horarioExibicao) },
    { header: 'Ingressos', accessor: row => (row as any).ingressos?.length ?? 0 },
  ]

  const openCreate = () => {
    setEditing(null); setCinemaId(''); setFilmeId(''); setSalaId('')
    reset({ horarioExibicao: '', filmeId: 0, salaId: 0, cinemaId: 0 })
    setOpen(true)
  }
  const openEdit = (row: Sessao) => {
    setEditing(row)
    setCinemaId(String(row.cinemaId)); setFilmeId(String(row.filmeId)); setSalaId(String(row.salaId))
    reset({ horarioExibicao: row.horarioExibicao.slice(0, 16), filmeId: row.filmeId, salaId: row.salaId, cinemaId: row.cinemaId })
    setOpen(true)
  }

  const onSubmit = (data: FormData) => {
    const payload = { ...data, horarioExibicao: new Date(data.horarioExibicao).toISOString() }
    if (editing) {
      updateMut.mutate({ id: editing.id, data: payload }, { onSuccess: () => setOpen(false) })
    } else {
      createMut.mutate(payload, { onSuccess: () => setOpen(false) })
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Sessões"
        description="Programação de exibição dos filmes"
        action={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" />Nova Sessão</Button>}
      />

      <DataTable columns={columns} data={sessoes} isLoading={isLoading} onEdit={openEdit} onDelete={setDeleteTarget} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Sessão' : 'Nova Sessão'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label>Filme</Label>
              <Select value={filmeId} onValueChange={v => { setFilmeId(v); setValue('filmeId', Number(v)) }}>
                <SelectTrigger><SelectValue placeholder="Selecione o filme" /></SelectTrigger>
                <SelectContent>
                  {filmes.map(f => <SelectItem key={f.id} value={String(f.id)}>{f.titulo}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.filmeId && <p className="text-xs text-destructive">{errors.filmeId.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label>Cinema</Label>
              <Select value={cinemaId} onValueChange={v => { setCinemaId(v); setValue('cinemaId', Number(v)); setSalaId('') }}>
                <SelectTrigger><SelectValue placeholder="Selecione o cinema" /></SelectTrigger>
                <SelectContent>
                  {cinemas.map(c => <SelectItem key={c.id} value={String(c.id)}>{c.nome}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.cinemaId && <p className="text-xs text-destructive">{errors.cinemaId.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label>Sala</Label>
              <Select value={salaId} onValueChange={v => { setSalaId(v); setValue('salaId', Number(v)) }}>
                <SelectTrigger><SelectValue placeholder={cinemaId ? 'Selecione a sala' : 'Selecione o cinema primeiro'} /></SelectTrigger>
                <SelectContent>
                  {filteredSalas.map(s => <SelectItem key={s.id} value={String(s.id)}>Sala {s.numero} (cap. {s.capacidade})</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.salaId && <p className="text-xs text-destructive">{errors.salaId.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="horario">Horário de Exibição</Label>
              <Input id="horario" type="datetime-local" {...register('horarioExibicao')} />
              {errors.horarioExibicao && <p className="text-xs text-destructive">{errors.horarioExibicao.message}</p>}
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
        title="Excluir Sessão"
        description={`Tem certeza que deseja excluir a Sessão #${deleteTarget?.id}?`}
        onConfirm={() => { deleteMut.mutate(deleteTarget!.id); setDeleteTarget(null) }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
