import {Container, Content} from "./styles"
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { useContext, useState } from "react";
import { ObrasContext } from "../../contexts/obras";
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { ModalEditarObra } from "../ModalEditarObra";
import { ModalVisualizarObra } from "../ModalVisualizarObra";
import { Link } from 'react-router-dom'



export function TabelaObras(props) {

  const obras = useContext(ObrasContext)

  //estados
  const [isModalEditarObrasOpen, setIsModalEditarObrasOpen] = useState(false);
  const [isModalVisualizarObraOpen, setIsModalVisualizarObraOpen] = useState(false);
  
  //função modal de edição de obras
  function modalEditarObrasOpen(id) {
    setIsModalEditarObrasOpen(true)
  }

  function modalEditarObrasClose() {
    setIsModalEditarObrasOpen(false)
  }

  //função modal de visualização de obras
  function modalVisualizarObraOpen(id) {
    setIsModalVisualizarObraOpen(true)
  }

  function modalVisualizarObraClose() {
    setIsModalVisualizarObraOpen(false)
  }



  //função de deletar obra
  async function Excluir0bra(id) {
    await firebase.firestore().collection('obras')
    .doc(id)
    .delete()
    .then(() => {
      toast.success('Obra excluída com sucesso!')
    })
    .catch(error => {
      toast.error('Erro ao excluir Obra')
    });
  }

 
  return (
      <Container>
        <ModalEditarObra isOpen={isModalEditarObrasOpen} onRequestClose={modalEditarObrasClose} />
        <ModalVisualizarObra isOpen={isModalVisualizarObraOpen} onRequestClose={modalVisualizarObraClose}/>
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
                      <a onClick={modalVisualizarObraOpen}> <FiEye size={20}/> </a>
                      <Link to={`/editarobra/${obra.id}`} > <FiEdit size={20}/> </Link>
                      <a onClick={() => Excluir0bra(obra.id)}> <FiTrash size={20}/></a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
  )
}



