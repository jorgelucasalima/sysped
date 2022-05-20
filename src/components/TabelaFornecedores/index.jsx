import {Container, Content} from "./styles"
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { useContext } from "react";
import { FornecedoresContext} from '../../contexts/fornecedores'
import { Link } from 'react-router-dom'

export function TabelaFornecedores(props) {


  const fornecedores = useContext(FornecedoresContext)

  return (
      <Container>
        <Content>
          <a href=""></a>
          <button type='button' onClick={props.modalFornecedoresOpen}>Cadastrar Fornecedor</button>
        </Content>

        <div>
          <table>
            <thead>
              <tr>
                <th>Fornecedor</th>
                <th>Categoria</th>
                <th>Cnpj</th>
                <th>Telefone</th>
                <th>E-mail</th>  
                <th>Endereço</th>  
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              
            {fornecedores.map( fornecedor => (
                  <tr key={fornecedor.id}>
                    <td>{fornecedor.fornecedor}</td>
                    <td>{fornecedor.categoriaFornecedor}</td>
                    <td>{fornecedor.cnpjFornecedor}</td>
                    <td>{fornecedor.telefoneFornecedor}</td>
                    <td>{fornecedor.emailFornecedor}</td>
                    <td>{fornecedor.enderecoFornecedor}</td>
                    <td>
                      <Link to={`/visualizar_fornecedor/${fornecedor.id}`}><FiEye size={20}/> </Link>
                      <Link to={`/editar_fornecedor/${fornecedor.id}`}><FiEdit size={20}/> </Link>
                      <a><FiTrash size={20}/> </a>
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



