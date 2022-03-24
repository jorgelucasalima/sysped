import {Container} from './styles'
import Modal from 'react-modal'

export function ModalPedidos(props) {
  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <h2>Cadastrar Pedido</h2>
    </Modal>
  )
}