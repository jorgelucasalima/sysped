import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Insumos } from './pages/Insumos'
import { Pedidos } from './pages/Pedidos'
import { Fornecedores } from './pages/Fornecedores'
import { Obras } from './pages/Obras'


export default function Rotas() {
  return (
    <Routes>
        <Route path="/" element={<Pedidos/>} />
        <Route path="/insumos" element={<Insumos/>} />
        <Route path="/fornecedores" element={<Fornecedores/>} />
        <Route path="/obras" element={<Obras/>} />
    </Routes>
  )
}
