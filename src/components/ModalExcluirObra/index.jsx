import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ObrasContext } from '../../contexts/obras';

export function ModalExcluirObra(props) {
  
  const Obras = useContext(ObrasContext)

  //função de excluir obra
  async function Excluir0bra() {
    await firebase.firestore().collection('obras')
    .doc()
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
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Tem certeza que deseja excluir a obra?</h2>
        <button className='btn-cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button className='btn-excluir' >Excluir</button>
      </Container>
    </Modal>
  )
}