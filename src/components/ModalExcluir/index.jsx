import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import firebase from '../../services/firebaseConnection'


export function ModalExcluir(props) {

  async function Excluir0bra(obraId) {
    try {
      await firebase.firestore().collection('obras')
      .doc(obraId)
      .delete()  
    } catch (error) {
      console.log(error)
    }
  }   

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container >
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Deseja realmente excluir?</h2>
        <button >Não</button>
        <button onClick={() => Excluir0bra(props.obraId)} >Sim</button>
      </Container>
    </Modal>
  )
}