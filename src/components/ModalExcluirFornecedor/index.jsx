import {Container} from './styles'
import Modal from 'react-modal'
import firebase from '../../services/firebaseConnection'


export function ModalExcluirFornecedor(props) {

  async function ExcluirFornecedor(FornecedorId) {
    try {
      await firebase.firestore().collection('fornecedores')
      .doc(FornecedorId)
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
        <h2>Deseja realmente excluir?</h2>
        <button className='btn-nao'>Não</button>
        <button onClick={() => ExcluirFornecedor(props.FornecedorId)} className='btn-sim'>Sim</button>
      </Container>
    </Modal>
  )
}