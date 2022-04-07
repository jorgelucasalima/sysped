import {Container, Content} from "./styles"
import { useContext } from "react";
import { EmpresaContext} from '../../contexts/empresa'
import { FiEye, FiEdit } from "react-icons/fi";

export function TabelaEmpresa(props) {


  const empresa = useContext(EmpresaContext)


  return(
    <Container>
        <Content>
          <a href=""></a>
          <button type='button' onClick={props.modalEmpresaOpen}>Cadastrar Empresa</button>
        </Content>

        <div>
          <table>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Cnpj</th>
                <th>Contato</th>
                <th>E-mail</th>  
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              
            {empresa.map( empr => (
                  <tr key={empr.id}>
                    <td>{empr.empresa}</td>
                    <td>{empr.cnpjEmpresa}</td>
                    <td>{empr.contatoEmpresa}</td>
                    <td>{empr.emailEmpresa}</td>
                    <td>
                      <a><FiEye size={20}/> </a>
                      <a><FiEdit size={20}/> </a>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
        
      </Container>
  )
}