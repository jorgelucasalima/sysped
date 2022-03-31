import {Container} from "./styles"

export function TabelaInsumos() {
  return (
    <Container>
      <div>
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Descrição</th>
              <th>Unidade</th>
              <th>Preço Base</th>
              <th>Material</th>  
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>CAN01</td>
                <td>Carno Longo</td>
                <td>Cm²</td>
                <td>R$ 20</td>
                <td>Material Hidraulico</td>
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