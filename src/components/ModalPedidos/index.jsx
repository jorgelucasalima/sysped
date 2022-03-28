import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';

export function ModalPedidos(props) {

  const [statusPedido, setStatusPedido] = useState('')
  const [obra, setObra] = useState('')
  const [descricaoPedido, setDescricaoPedido] = useState('')
  const [dataCriacaoPedido, setDataCriacaoPedido] = useState(Date)
  const [dataEntregaPedido, setDataEntregaPedido] = useState(Date)
  const [responsavelPedido, setResponsavelPedido] = useState('')


  function criarNovoPedido(event) {
    event.preventDefault()
    
    console.log({
      statusPedido,
      obra,
      descricaoPedido,
      dataCriacaoPedido,
      dataEntregaPedido,
      responsavelPedido,
    })
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
          <option value="aberto">Aberto</option>
          <option value="cotacao">Em cotação</option>
          <option value="aprovado">Aprovado</option>
          <option value="entregue">Entregue</option>
        </select>
        <select 
          name="obra" 
          id="obra"
          value={obra}
          onChange={event => setObra(event.target.value)}
        >
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