import { Building2, CalendarClock, Coffee, Film, Sofa, ShoppingCart, Ticket } from 'lucide-react'
import { StatsCard } from '@/components/StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCinemas } from '@/hooks/use-cinemas'
import { useSalas } from '@/hooks/use-salas'
import { useFilmes } from '@/hooks/use-filmes'
import { useSessoes } from '@/hooks/use-sessoes'
import { useIngressos } from '@/hooks/use-ingressos'
import { usePedidos } from '@/hooks/use-pedidos'
import { useLanches } from '@/hooks/use-lanches'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function Dashboard() {
  const cinemas = useCinemas()
  const salas = useSalas()
  const filmes = useFilmes()
  const sessoes = useSessoes()
  const ingressos = useIngressos()
  const pedidos = usePedidos()
  const lanches = useLanches()

  const stats = [
    { title: 'Cinemas', value: cinemas.data?.length ?? 0, icon: Building2, isLoading: cinemas.isLoading, color: 'text-blue-500' },
    { title: 'Salas', value: salas.data?.length ?? 0, icon: Sofa, isLoading: salas.isLoading, color: 'text-green-500' },
    { title: 'Filmes', value: filmes.data?.length ?? 0, icon: Film, isLoading: filmes.isLoading, color: 'text-yellow-500' },
    { title: 'Sessões', value: sessoes.data?.length ?? 0, icon: CalendarClock, isLoading: sessoes.isLoading, color: 'text-purple-500' },
    { title: 'Ingressos', value: ingressos.data?.length ?? 0, icon: Ticket, isLoading: ingressos.isLoading, color: 'text-pink-500' },
    { title: 'Pedidos', value: pedidos.data?.length ?? 0, icon: ShoppingCart, isLoading: pedidos.isLoading, color: 'text-orange-500' },
    { title: 'Lanches/Combos', value: lanches.data?.length ?? 0, icon: Coffee, isLoading: lanches.isLoading, color: 'text-cyan-500' },
  ]

  const recentSessoes = sessoes.data?.slice(-5).reverse() ?? []
  const recentPedidos = pedidos.data?.slice(-5).reverse() ?? []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Visão geral do sistema de cinema</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {stats.map(s => (
          <StatsCard key={s.title} title={s.title} value={s.value} icon={s.icon} isLoading={s.isLoading} color={s.color} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-base">Sessões Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            {sessoes.isLoading ? (
              <p className="text-muted-foreground text-sm">Carregando...</p>
            ) : recentSessoes.length === 0 ? (
              <p className="text-muted-foreground text-sm">Nenhuma sessão cadastrada</p>
            ) : (
              <div className="space-y-2">
                {recentSessoes.map(s => (
                  <div key={s.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-white">{(s as any).filme?.titulo ?? `Sessão #${s.id}`}</p>
                      <p className="text-xs text-muted-foreground">{formatDate(s.horarioExibicao)}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">Sala {(s as any).sala?.numero ?? s.salaId}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-base">Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            {pedidos.isLoading ? (
              <p className="text-muted-foreground text-sm">Carregando...</p>
            ) : recentPedidos.length === 0 ? (
              <p className="text-muted-foreground text-sm">Nenhum pedido cadastrado</p>
            ) : (
              <div className="space-y-2">
                {recentPedidos.map(p => (
                  <div key={p.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-white">Pedido #{p.id}</p>
                      <p className="text-xs text-muted-foreground">{p.qtInteira} inteira(s) + {p.qtMeia} meia(s)</p>
                    </div>
                    <Badge variant="success" className="text-xs">{formatCurrency(p.valorTotal)}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
