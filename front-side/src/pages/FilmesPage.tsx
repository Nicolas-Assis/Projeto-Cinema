import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Plus, Clock, Film, Pencil, Trash2 } from 'lucide-react'
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
import { useFilmes, useCreateFilme, useUpdateFilme, useDeleteFilme } from '@/hooks/use-filmes'
import { GENERO_LABELS, GeneroFilme } from '@/types'
import { formatDuration } from '@/lib/utils'

const generos = Object.keys(GENERO_LABELS) as GeneroFilme[]

const schema = z.object({
  titulo: z.string().min(1, 'Título obrigatório'),
  sinopse: z.string().min(1, 'Sinopse obrigatória'),
  classificacao: z.string().min(1, 'Classificação obrigatória'),
  duracao: z.coerce.number().int().min(1, 'Duração obrigatória'),
  elenco: z.string().min(1, 'Elenco obrigatório'),
  genero: z.enum(generos as [GeneroFilme, ...GeneroFilme[]], { required_error: 'Gênero obrigatório' }),
  dataIniciaExibicao: z.string().min(1, 'Data início obrigatória'),
  dataFinalExibicao: z.string().min(1, 'Data fim obrigatória'),
})
type FormData = z.infer<typeof schema>

const GENERO_COLORS: Record<GeneroFilme, string> = {
  ACAO: 'bg-red-500/20 text-red-400',
  AVENTURA: 'bg-orange-500/20 text-orange-400',
  COMEDIA: 'bg-yellow-500/20 text-yellow-400',
  DRAMA: 'bg-blue-500/20 text-blue-400',
  FANTASIA: 'bg-purple-500/20 text-purple-400',
  FICCAO_CIENTIFICA: 'bg-cyan-500/20 text-cyan-400',
  TERROR: 'bg-gray-500/20 text-gray-400',
  ROMANCE: 'bg-pink-500/20 text-pink-400',
  ANIMACAO: 'bg-green-500/20 text-green-400',
  DOCUMENTARIO: 'bg-indigo-500/20 text-indigo-400',
  SUSPENSE: 'bg-amber-500/20 text-amber-400',
  MUSICAL: 'bg-teal-500/20 text-teal-400',
  OUTRO: 'bg-slate-500/20 text-slate-400',
}

function toDatetimeLocal(iso: string) {
  return iso ? iso.slice(0, 16) : ''
}

export default function FilmesPage() {
  const { data: filmes = [], isLoading } = useFilmes()
  const createMut = useCreateFilme()
  const updateMut = useUpdateFilme()
  const deleteMut = useDeleteFilme()

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<any>(null)
  const [deleteTarget, setDeleteTarget] = useState<any>(null)
  const [generoValue, setGeneroValue] = useState<string>('')

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const openCreate = () => {
    setEditing(null)
    setGeneroValue('')
    reset({ titulo: '', sinopse: '', classificacao: '', duracao: 90, elenco: '', genero: undefined as any, dataIniciaExibicao: '', dataFinalExibicao: '' })
    setOpen(true)
  }
  const openEdit = (row: any) => {
    setEditing(row)
    setGeneroValue(row.genero)
    reset({
      titulo: row.titulo,
      sinopse: row.sinopse,
      classificacao: row.classificacao,
      duracao: row.duracao,
      elenco: row.elenco,
      genero: row.genero,
      dataIniciaExibicao: toDatetimeLocal(row.dataIniciaExibicao),
      dataFinalExibicao: toDatetimeLocal(row.dataFinalExibicao),
    })
    setOpen(true)
  }

  const onSubmit = (data: FormData) => {
    const payload = {
      ...data,
      dataIniciaExibicao: new Date(data.dataIniciaExibicao).toISOString(),
      dataFinalExibicao: new Date(data.dataFinalExibicao).toISOString(),
    }
    if (editing) {
      updateMut.mutate({ id: editing.id, data: payload }, { onSuccess: () => setOpen(false) })
    } else {
      createMut.mutate(payload, { onSuccess: () => setOpen(false) })
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Filmes"
        description="Catálogo de filmes em exibição"
        action={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" />Novo Filme</Button>}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-56 rounded-lg" />
          ))}
        </div>
      ) : filmes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
          <Film className="h-16 w-16 mb-4 opacity-30" />
          <p className="text-lg">Nenhum filme cadastrado</p>
          <p className="text-sm mt-1">Clique em "Novo Filme" para começar</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filmes.map(filme => (
            <Card key={filme.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-5 pb-3">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Link to={`/filmes/${filme.id}`} className="font-semibold text-white text-sm leading-tight line-clamp-2 hover:text-red-400 transition-colors">
                    {filme.titulo}
                  </Link>
                  <Badge className={`shrink-0 text-xs border-0 ${GENERO_COLORS[filme.genero]}`}>
                    {GENERO_LABELS[filme.genero]}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{filme.sinopse}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDuration(filme.duracao)}</span>
                  <span className="px-1.5 py-0.5 bg-muted rounded text-xs">{filme.classificacao}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-3 gap-2">
                <Button size="sm" variant="ghost" className="flex-1 h-8 text-xs" onClick={() => openEdit(filme)}>
                  <Pencil className="h-3.5 w-3.5 mr-1" />Editar
                </Button>
                <Button size="sm" variant="ghost" className="flex-1 h-8 text-xs text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => setDeleteTarget(filme)}>
                  <Trash2 className="h-3.5 w-3.5 mr-1" />Excluir
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Filme' : 'Novo Filme'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="titulo">Título</Label>
              <Input id="titulo" {...register('titulo')} placeholder="Ex: Interestelar" />
              {errors.titulo && <p className="text-xs text-destructive">{errors.titulo.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sinopse">Sinopse</Label>
              <Textarea id="sinopse" {...register('sinopse')} rows={3} placeholder="Descrição do filme..." />
              {errors.sinopse && <p className="text-xs text-destructive">{errors.sinopse.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="classificacao">Classificação</Label>
                <Input id="classificacao" {...register('classificacao')} placeholder="Ex: 14 anos" />
                {errors.classificacao && <p className="text-xs text-destructive">{errors.classificacao.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="duracao">Duração (min)</Label>
                <Input id="duracao" type="number" {...register('duracao')} />
                {errors.duracao && <p className="text-xs text-destructive">{errors.duracao.message}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="elenco">Elenco</Label>
              <Input id="elenco" {...register('elenco')} placeholder="Ex: Matthew McConaughey, Anne Hathaway" />
              {errors.elenco && <p className="text-xs text-destructive">{errors.elenco.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label>Gênero</Label>
              <Select value={generoValue} onValueChange={v => { setGeneroValue(v); setValue('genero', v as GeneroFilme) }}>
                <SelectTrigger><SelectValue placeholder="Selecione o gênero" /></SelectTrigger>
                <SelectContent>
                  {generos.map(g => <SelectItem key={g} value={g}>{GENERO_LABELS[g]}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.genero && <p className="text-xs text-destructive">{errors.genero.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="dataInicia">Início Exibição</Label>
                <Input id="dataInicia" type="datetime-local" {...register('dataIniciaExibicao')} />
                {errors.dataIniciaExibicao && <p className="text-xs text-destructive">{errors.dataIniciaExibicao.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dataFinal">Fim Exibição</Label>
                <Input id="dataFinal" type="datetime-local" {...register('dataFinalExibicao')} />
                {errors.dataFinalExibicao && <p className="text-xs text-destructive">{errors.dataFinalExibicao.message}</p>}
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
        title="Excluir Filme"
        description={`Tem certeza que deseja excluir "${deleteTarget?.titulo}"?`}
        onConfirm={() => { deleteMut.mutate(deleteTarget!.id); setDeleteTarget(null) }}
        onCancel={() => setDeleteTarget(null)}
        loading={deleteMut.isPending}
      />
    </div>
  )
}
