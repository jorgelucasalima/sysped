import { useState } from "react";
import Dashboard from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { ModalPedidos } from "../../components/ModalPedidos";
import Modal from "react-modal";
import PedidoProvider from "../../contexts/pedidos";
import InsumoProvider from "../../contexts/insumos";


Modal.setAppElement('#root');


export function Pedidos() {

  const [isModalPedidosOpen, setIsModalPedidosOpen] = useState(false);

  function modalPedidosOpen() {
    setIsModalPedidosOpen(true)
  }

  function modalPedidosClose() {
    setIsModalPedidosOpen(false)
  }

  return(
    <PedidoProvider>
      <InsumoProvider>
        <Header modalPedidosOpen={modalPedidosOpen}/>
        <ModalPedidos isOpen={isModalPedidosOpen} onRequestClose={modalPedidosClose}/>
        <Dashboard/>
      </InsumoProvider>
    </PedidoProvider>
  )
}