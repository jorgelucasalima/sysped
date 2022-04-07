import {Container, Content} from "./styles"

export function TabelaEmpresa(props) {
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
              
            {empresas.map( empresa => (
                  <tr key={empresa.id}>
                    <td>{empresa.empresa}</td>
                    <td>{empresa.empresaCnpj}</td>
                    <td>{empresa.empresaContato}</td>
                    <td>{empresa.empresaEmail}</td>
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