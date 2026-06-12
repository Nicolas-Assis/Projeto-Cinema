import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import Dashboard from '@/pages/Dashboard'
import CinemasPage from '@/pages/CinemasPage'
import SalasPage from '@/pages/SalasPage'
import FilmesPage from '@/pages/FilmesPage'
import SessoesPage from '@/pages/SessoesPage'
import IngressosPage from '@/pages/IngressosPage'
import PedidosPage from '@/pages/PedidosPage'
import LanchesPage from '@/pages/LanchesPage'
import FilmeDetalhesPage from '@/pages/FilmeDetalhesPage'
import SobrePage from '@/pages/SobrePage'

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cinemas" element={<CinemasPage />} />
          <Route path="/salas" element={<SalasPage />} />
          <Route path="/filmes" element={<FilmesPage />} />
          <Route path="/filmes/:id" element={<FilmeDetalhesPage />} />
          <Route path="/sessoes" element={<SessoesPage />} />
          <Route path="/ingressos" element={<IngressosPage />} />
          <Route path="/pedidos" element={<PedidosPage />} />
          <Route path="/lanches" element={<LanchesPage />} />
          <Route path="/sobre" element={<SobrePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
