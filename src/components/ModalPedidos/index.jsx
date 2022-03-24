import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";

export function ModalPedidos(props) {
  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <Container>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Cadastrar Pedido</h2>
        <select name="status" id="status">
          <option value="aberto">Aberto</option>
          <option value="cotacao">Em cotação</option>
          <option value="aprovado">Aprovado</option>
          <option value="entregue">Entregue</option>
        </select>
        <select name="obra" id="obra">
          <option value="">Obra de tia ua</option>
          <option value="">Obra do nada</option>
        </select>
        <input type="text" placeholder='Descrição'/>
        <input type="date" placeholder='Data Pedido'/>
        <input type="date" placeholder='Data Entrega'/>
        <input type="text" placeholder='Responsável'/>

        <button type='submit'>Cadastrar</button>

      </Container>
      
    </Modal>
  )
}