import { Container } from "./styles";
import { FiEye, FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import {api} from '../../services/api';
import { useContext } from "react";
import { PedidosContext } from "../../contexts/PedidosContext";

export function TabelaPedidos() {

  const data = useContext(PedidosContext)
  

  return (
    <Container>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
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
                <td>{pedido.id}</td>
                <td>{pedido.descricaoPedido}</td>
                <td>{pedido.statusPedido}</td>
                <td>{pedido.obra}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(pedido.dataCriacaoPedido))}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(pedido.dataEntregaPedido))}</td>
                <td>{pedido.responsavelPedido}</td>
                <td>
                  <a><FiEye size={20}/> </a>
                  <a><FiEdit size={20}/> </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}