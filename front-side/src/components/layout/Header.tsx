import { useLocation } from 'react-router-dom'
import { Bell, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/cinemas': 'Cinemas',
  '/salas': 'Salas',
  '/filmes': 'Filmes',
  '/sessoes': 'Sessões',
  '/ingressos': 'Ingressos',
  '/pedidos': 'Pedidos',
  '/lanches': 'Lanches & Combos',
}

export function Header() {
  const { pathname } = useLocation()
  const title = PAGE_TITLES[pathname] ?? 'Cinema Admin'

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-white/95 backdrop-blur px-6">
      <div>
        <h1 className="text-base font-semibold text-slate-900">{title}</h1>
        <p className="text-xs text-slate-500">
          {pathname === '/' ? 'Visão geral do sistema' : `Gerenciar ${title.toLowerCase()}`}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-slate-500">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2 pl-2 border-l">
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
            <User className="h-4 w-4 text-red-600" />
          </div>
          <span className="text-sm font-medium text-slate-700">Admin</span>
        </div>
      </div>
    </header>
  )
}
