import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Insumos } from './pages/Insumos'
import { Pedidos } from './pages/Pedidos'
import { Fornecedores } from './pages/Fornecedores'
import { Obras } from './pages/Obras'
import { Empresa } from './pages/Empresa'
import { EditarObra } from './pages/Obras/editar'
import { VisualizarObra } from './pages/Obras/visualizar'
import { VisualizarFornecedor } from './pages/Fornecedores/visualizar'
import { EditarFornecedor } from './pages/Fornecedores/editar'


export default function Rotas() {
  return (
    <Routes>
        <Route path="/" element={<Pedidos/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/insumos" element={<Insumos/>} />
        
        <Route path="/fornecedores" element={<Fornecedores/>} />
        <Route path="/visualizar_fornecedor/:id" element={<VisualizarFornecedor/>} />
        <Route path="/editar_fornecedor/:id" element={<EditarFornecedor/>} />

        <Route path="/obras" element={<Obras/>} />
        <Route path="/editar_obra/:id" element={<EditarObra/>} />
        <Route path="/visualizar_obra/:id" element={<VisualizarObra/>} />
        
        
    </Routes>
  )
}
