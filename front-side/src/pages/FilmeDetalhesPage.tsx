import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, Users, Calendar, Film } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useFilme } from '@/hooks/use-filmes'
import { GENERO_LABELS } from '@/types'
import { formatDuration } from '@/lib/utils'

export default function FilmeDetalhesPage() {
  const { id } = useParams()
  const { data: filme, isLoading, isError } = useFilme(Number(id))

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-72 rounded-lg" />
      </div>
    )
  }

  if (isError || !filme) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
        <Film className="h-16 w-16 mb-4 opacity-30" />
        <p className="text-lg">Filme não encontrado</p>
        <Button asChild variant="ghost" className="mt-4 gap-2">
          <Link to="/filmes"><ArrowLeft className="h-4 w-4" />Voltar para filmes</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" className="gap-2 -ml-3">
        <Link to="/filmes"><ArrowLeft className="h-4 w-4" />Voltar para filmes</Link>
      </Button>

      <Card className="bg-card border-border">
        <CardContent className="pt-6 space-y-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-2xl font-bold text-white">{filme.titulo}</h1>
            <Badge className="border-0 bg-red-500/20 text-red-400">
              {GENERO_LABELS[filme.genero]}
            </Badge>
          </div>

          <p className="text-muted-foreground leading-relaxed">{filme.sinopse}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-red-500 shrink-0" />
              {formatDuration(filme.duracao)}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-1.5 py-0.5 bg-muted rounded text-xs shrink-0">{filme.classificacao}</span>
              Classificação
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-red-500 shrink-0" />
              {new Date(filme.dataIniciaExibicao).toLocaleDateString('pt-BR')} até{' '}
              {new Date(filme.dataFinalExibicao).toLocaleDateString('pt-BR')}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-red-500 shrink-0" />
              <span className="line-clamp-2">{filme.elenco}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
