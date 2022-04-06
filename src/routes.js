import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Insumos } from './pages/Insumos'
import { Pedidos } from './pages/Pedidos'
import { Fornecedores } from './pages/Fornecedores'


export default function Rotas() {
  return (
    <Routes>
        <Route path="/" element={<Pedidos/>} />
        <Route path="/insumos" element={<Insumos/>} />
        <Route path="/fornecedores" element={<Fornecedores/>} />
    </Routes>
  )
}
