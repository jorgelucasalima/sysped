import {Container, Content} from "./styles"
import { FiEye, FiEdit } from "react-icons/fi";
import { useContext } from "react";
import { ObrasContext } from "../../contexts/obras";

export function TabelaObras(props) {


  const obras = useContext(ObrasContext)
  console.log(obras)

  return (
      <Container>
        <Content>
          <a href=""></a>
          <button type='button' onClick={props.modalObrasOpen}>Cadastrar Obras</button>
        </Content>

        <div>
          <table>
            <thead>
              <tr>
                <th>Obra</th>
                <th>Responsável</th> 
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
                {obras.map( obra => (
                  <tr key={obra.id}>
                    <td>{obra.obras}</td>
                    <td>{obra.responsavelObras}</td>
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



