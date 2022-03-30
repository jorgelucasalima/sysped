import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";


export const PedidosContext = createContext([])

function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get('pedidos')
    .then(response => setPedidos(response.data.pedidos))
    .catch(error => {'deu erro'});
  }, [])

  return (
    <PedidosContext.Provider value={pedidos}>
      {children}
    </PedidosContext.Provider>
  )
}

export default PedidoProvider