import {Container, Content} from "./styles"
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { useContext } from "react";
import { ObrasContext } from "../../contexts/obras";
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';

export function TabelaObras(props) {

  const obras = useContext(ObrasContext)

  async function excluir0bra(id) {
    await firebase.firestore().collection('obras')
    .doc(id)
    .delete()
    .then(() => {
      toast.success('Obra excluída com sucesso!')
      props.onRequestClose()
    })
    .catch(error => {
      toast.error('Erro ao excluir Obra')
    });
  }

  
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
                      <button> <FiEye size={20}/> </button>
                      <button> <FiEdit size={20}/> </button>
                      <button onClick={() => excluir0bra(obra.id)}> <FiTrash size={20}/></button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
  )
}



