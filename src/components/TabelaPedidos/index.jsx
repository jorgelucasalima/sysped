import { Container } from "./styles";
import { FiEye, FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import {api} from '../../services/api';

export function TabelaPedidos() {

  useEffect(() => {
    api.get('pedidos')
    .then(response => console.log(response.data))
    .catch(error => {'deu erro'});
  }, [])

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
            <tr>
              <td>1</td>
              <td>Casa de tia ua</td>
              <td>Aberto</td>
              <td>Obras Residencial</td>
              <td>01/01/2020</td>
              <td>01/01/2020</td>
              <td>Manoel Augusto</td>
              <td>
                <a><FiEye size={20}/> </a>
                <a><FiEdit size={20}/> </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Reforma Itamaracá</td>
              <td>Em Cotação</td>
              <td>Obras Residencial</td>
              <td>01/01/2021</td>
              <td>01/01/2021</td>
              <td>Manoel Augusto</td>
              <td>
                <a><FiEye size={20}/> </a>
                <a><FiEdit size={20}/> </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}