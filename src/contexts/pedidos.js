import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";


export const PedidosContext = createContext([])

function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function loadPedidos() {
      await firebase.firestore().collection('pedidos')
      .onSnapshot((doc) => {
        let arrayPedidos = []

        doc.forEach((item) => {
          arrayPedidos.push({
            id: item.id,
            statusPedido: item.data().statusPedido,
            obra: item.data().obra,
            descricaoPedido: item.data().descricaoPedido,
            dataCriacaoPedido: item.data().dataCriacaoPedido,
            dataEntregaPedido: item.data().dataEntregaPedido,
            responsavelPedido: item.data().responsavelPedido

          })
        })

        setPedidos(arrayPedidos)
      })
    }

    loadPedidos()
  }, [])

  return (
    <PedidosContext.Provider value={pedidos}>
      {children}
    </PedidosContext.Provider>
  )
}

export default PedidoProvider