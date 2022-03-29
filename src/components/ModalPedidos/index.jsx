import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import {api} from '../../services/api'

export function ModalPedidos(props) {

  const [statusPedido, setStatusPedido] = useState('')
  const [obra, setObra] = useState('')
  const [descricaoPedido, setDescricaoPedido] = useState('')
  const [dataCriacaoPedido, setDataCriacaoPedido] = useState(Date)
  const [dataEntregaPedido, setDataEntregaPedido] = useState(Date)
  const [responsavelPedido, setResponsavelPedido] = useState('')


  function criarNovoPedido(event) {
    event.preventDefault()
    
    const dados ={
      statusPedido,
      obra,
      descricaoPedido,
      dataCriacaoPedido,
      dataEntregaPedido,
      responsavelPedido,
    }

    api.post('/pedidos', dados)


  }


  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={criarNovoPedido}>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Cadastrar Pedido</h2>
        <select 
          name="status" 
          id="status"
          value={statusPedido}
          onChange={event => setStatusPedido(event.target.value)}
        >
          <option value="none" selected="selected" hidden>Selecione Status do Pedido</option>
          <option value="Aberto">Aberto</option>
          <option value="Em Cotação">Em cotação</option>
          <option value="Aprovado">Aprovado</option>
          <option value="Entregue">Entregue</option>
        </select>
        <select 
          name="obra" 
          id="obra"
          value={obra}
          onChange={event => setObra(event.target.value)}
        >
          <option value="none" selected="selected" hidden>Selecione a Obra</option>
          <option value="ObraCliente">Obra Cliente Recife</option>
          <option value="ObraBrennand">Obra brennand</option>
          <option value="ObraShopping">Obra Shopping Recife</option>
        </select>
        <input 
          placeholder='Descrição'
          type="text" 
          value={descricaoPedido} 
          onChange={event => setDescricaoPedido(event.target.value)}
        />
        <input 
          type="date" 
          placeholder='Data Pedido'
          value={dataCriacaoPedido}
          onChange={event => setDataCriacaoPedido(event.target.value)}
        />
        <input 
          type="date" 
          placeholder='Data Entrega'
          value={dataEntregaPedido}
          onChange={event => setDataEntregaPedido(event.target.value)}  
        />
        <input 
          type="text" 
          placeholder='Responsável'
          value={responsavelPedido}
          onChange={event => setResponsavelPedido(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>

      </Container>
      
    </Modal>
  )
}