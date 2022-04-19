import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Insumos } from './pages/Insumos'
import { Pedidos } from './pages/Pedidos'
import { Fornecedores } from './pages/Fornecedores'
import { Obras } from './pages/Obras'
import { Empresa } from './pages/Empresa'
import { EditarObra } from './pages/Obras/editar'
import { VisualizarObra, VisualizarObra_ } from './pages/Obras/visualizar'


export default function Rotas() {
  return (
    <Routes>
        <Route path="/" element={<Pedidos/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/insumos" element={<Insumos/>} />
        <Route path="/fornecedores" element={<Fornecedores/>} />
        <Route path="/obras" element={<Obras/>} />
        <Route path="/editarobra/:id" element={<EditarObra/>} />
        <Route path="/visualizarobra/:id" element={<VisualizarObra_/>} />
    </Routes>
  )
}
