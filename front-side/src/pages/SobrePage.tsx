import { Clapperboard } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tecnologias = [
  'React', 'TypeScript', 'Vite', 'React Router', 'TanStack Query',
  'Tailwind CSS', 'Radix UI', 'NestJS', 'Prisma',
]

export default function SobrePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sobre"
        description="Projeto P2 — Programação Web I (UNIFAN)"
      />

      <Card className="bg-card border-border">
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Clapperboard className="h-8 w-8 text-red-500" />
            <h2 className="text-xl font-bold text-white">CinemaAdmin</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Aplicação web de gestão de cinema que consome uma API própria em Node/TypeScript (NestJS + Prisma).
            Permite gerenciar cinemas, salas, filmes, sessões, ingressos, pedidos e lanches, com interações
            dinâmicas em tempo real.
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li><strong className="text-white">Componentização:</strong> interface separada em componentes reutilizáveis (Sidebar, Header, PageHeader, DataTable, StatsCard, ConfirmDialog e componentes de UI) que se comunicam via props.</li>
            <li><strong className="text-white">React Hooks:</strong> <code className="bg-muted px-1 rounded">useState</code> controla diálogos, formulários e filtros; hooks customizados encapsulam o acesso à API.</li>
            <li><strong className="text-white">Roteamento:</strong> 10 rotas, incluindo a rota dinâmica <code className="bg-muted px-1 rounded">/filmes/:id</code> para detalhes do filme.</li>
            <li><strong className="text-white">Layout responsivo:</strong> grids e flexbox com Tailwind CSS adaptam a interface a qualquer tela.</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {tecnologias.map(t => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
