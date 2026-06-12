import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Building2, Sofa, Film, CalendarClock, Ticket, ShoppingCart, Coffee, Clapperboard, Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/cinemas', icon: Building2, label: 'Cinemas' },
  { to: '/salas', icon: Sofa, label: 'Salas' },
  { to: '/filmes', icon: Film, label: 'Filmes' },
  { to: '/sessoes', icon: CalendarClock, label: 'Sessões' },
  { to: '/ingressos', icon: Ticket, label: 'Ingressos' },
  { to: '/pedidos', icon: ShoppingCart, label: 'Pedidos' },
  { to: '/lanches', icon: Coffee, label: 'Lanches & Combos' },
  { to: '/sobre', icon: Info, label: 'Sobre' },
]

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-60 flex flex-col bg-sidebar border-r border-slate-800">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-800">
        <Clapperboard className="h-7 w-7 text-red-500" />
        <span className="text-lg font-bold text-white tracking-tight">CinemaAdmin</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                isActive
                  ? 'bg-red-500/20 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={cn('h-4 w-4 shrink-0', isActive && 'text-red-500')} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-800">
        <p className="text-xs text-slate-600">Cinema Management v1.0</p>
      </div>
    </aside>
  )
}
