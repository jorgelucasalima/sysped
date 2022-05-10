import {Container, Content} from "./styles"
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { useContext, useState } from "react";
import { ObrasContext } from "../../contexts/obras";
import { Link } from 'react-router-dom'
import { ModalExcluirObra } from "../ModalExcluirObra";


export function TabelaObras(props) {

  const {obras} = useContext(ObrasContext)
  const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false)
  const [obraId, setObraId] = useState('')

  //função modal de excluir
  function modalExcluirOpen(id) {
    setObraId(id)
    setIsModalExcluirOpen(true)
  }

  function modalExcluirClose() {
    setIsModalExcluirOpen(false)
  }
  

  return (
      <Container>
        <ModalExcluirObra isOpen={isModalExcluirOpen} onRequestClose={modalExcluirClose} obraId={obraId}/>
      
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
                      <Link to={`/visualizar_obra/${obra.id}`}> <FiEye size={20}/> </Link>
                      <Link to={`/editar_obra/${obra.id}`} > <FiEdit size={20}/> </Link>
                      <a onClick={() => modalExcluirOpen(obra.id)}> <FiTrash size={20}/></a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
  )
}



