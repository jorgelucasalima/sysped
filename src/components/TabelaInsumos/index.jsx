import {Container, Content} from "./styles"
import { FiEye, FiEdit } from "react-icons/fi";
import { useContext } from "react";
import { InsumosContext } from "../../contexts/insumos";

export function TabelaInsumos(props) {


  const insumos = useContext(InsumosContext)


  return (
      <Container>
        <Content>
          <a href=""></a>
          <button type='button' onClick={props.modalInsumosOpen}>Cadastrar Insumo</button>
        </Content>

        <div>
          <table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descrição</th>
                <th>Unidade</th>
                <th>Preço Base</th>
                <th>Categoria</th>  
                <th>Fornecedor</th>  
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
                {insumos.map( insumo => (
                  <tr key={insumo.id}>
                  <td>{insumo.codigoInsumo}</td>
                  <td>{insumo.descricaoInsumo}</td>
                  <td>{insumo.unidadeInsumo}</td>
                  <td>{insumo.precoBaseInsumo}</td>
                  <td>{insumo.categoriaInsumo}</td>
                  <td>{insumo.fornecedor}</td>
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



