import {Container, Content} from "./styles"
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { useContext, useState } from "react";
import { ObrasContext } from "../../contexts/obras";
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { ModalEditarObra } from "../ModalEditarObra";
import { async } from "@firebase/util";



export function TabelaObras(props) {

  const obras = useContext(ObrasContext)

  //estados
  const [isModalEditarObrasOpen, setIsModalEditarObrasOpen] = useState(false);


  //função modal de edição de obras
  function modalEditarObrasOpen(id) {
    setIsModalEditarObrasOpen(true)
  }

  function modalEditarObrasClose() {
    setIsModalEditarObrasOpen(false)
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

  //função de excluir obra
  async function EditarObra(id) {
    await firebase.firestore().collection('obras')
    .add(id)
    .update()
    .then(() => {
      toast.success('Obra editada com sucesso!')
    })
    .catch(error => {
      toast.error('Erro ao editar obra!')
    });
  }
 
  
  return (
      <Container>
        <ModalEditarObra isOpen={isModalEditarObrasOpen} onRequestClose={modalEditarObrasClose} />
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
                      <a> <FiEye size={20}/> </a>
                      <a onClick={modalEditarObrasOpen}> <FiEdit size={20}/> </a>
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



