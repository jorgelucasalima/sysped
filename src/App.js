import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import EstiloGlobal from "./styles/global";
import Modal from "react-modal";
import { useState } from "react"; 
import { ModalPedidos } from "./components/ModalPedidos";
import PedidoProvider from "./contexts/pedidos"

Modal.setAppElement('#root');


function App() {

  const [isModalPedidosOpen, setIsModalPedidosOpen] = useState(false);

  function modalPedidosOpen() {
    setIsModalPedidosOpen(true)
  }

  function modalPedidosClose() {
    setIsModalPedidosOpen(false)
  }

  return (
    <PedidoProvider>
      <Header modalPedidosOpen={modalPedidosOpen} />
      <ModalPedidos isOpen={isModalPedidosOpen} onRequestClose={modalPedidosClose}/>
      <Dashboard/>
      <EstiloGlobal/>
    </PedidoProvider>
  );
}

export default App;
