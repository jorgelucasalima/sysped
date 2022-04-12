import {Container} from './styles'
import Modal from 'react-modal'
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { Obras } from '../../pages/Obras';

export function ModalExcluirObra(props) {
  

  //função de excluir obra
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
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Tem certeza que deseja excluir a obra?</h2>
        <button className='btn-cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button className='btn-excluir' onClick={props.excluirObra}>Excluir</button>
      </Container>
    </Modal>
  )
}