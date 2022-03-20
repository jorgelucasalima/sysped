import { Container } from "./styles";
import { FiEye, FiEdit } from "react-icons/fi";

export function TabelaPedidos() {
  return (
    <Container>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Descrição</th>
              <th>Status</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Funcionário</th>
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
              <td>Manoel Augusto</td>
              <td>
                <a><FiEye size={20}/> </a>
                <a><FiEdit size={20}/> </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Reforma Itamaracá</td>
              <td>Em andamento</td>
              <td>Obras Residencial</td>
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