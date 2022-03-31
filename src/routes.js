import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Insumos } from './pages/Insumos'
import { Pedidos } from './pages/Pedidos'


export default function Rotas() {
  return (
    <Routes>
        <Route path="/" element={<Pedidos/>} />
        <Route path="/insumos" element={<Insumos/>} />

    </Routes>
  )
}
