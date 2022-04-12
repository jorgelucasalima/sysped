import {Container} from './styles'
import Modal from 'react-modal'

export function ModalExcluirObra(props) {
  

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
        <button className='btn-excluir' onClick={props.excluir0bra}>Excluir</button>
      </Container>
    </Modal>
  )
}