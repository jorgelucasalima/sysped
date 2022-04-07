import { Container } from "./styles";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { useContext } from "react";
import { PedidosContext } from "../../contexts/pedidos";

export function TabelaPedidos() {

  const pedidos = useContext(PedidosContext)
  

  return (
    <Container>
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Status</th>
              <th>Obra</th>
              <th>Data Pedido</th>  
              <th>Data Entrega</th>  
              <th>Responsável</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map( pedido => (
              <tr key={pedido.id}>
                <td>{pedido.descricaoPedido}</td>
                <td>{pedido.statusPedido}</td>
                <td>{pedido.obra}</td>
                <td>{pedido.dataCriacaoPedido}</td>
                <td>{pedido.dataEntregaPedido}</td>
                <td>{pedido.responsavelPedido}</td>
                <td>
                  <a><FiEye size={20}/></a>
                  <a><FiEdit size={20}/></a>
                  <a><FiTrash size={20}/></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

// <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(pedido.dataCriacaoPedido))}</td>
//<td>{new Intl.DateTimeFormat('pt-BR').format(new Date(pedido.dataEntregaPedido))}</td>