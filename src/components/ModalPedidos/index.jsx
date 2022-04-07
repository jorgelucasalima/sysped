import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';


export function ModalPedidos(props) {

  const [statusPedido, setStatusPedido] = useState('')
  const [obra, setObra] = useState('')
  const [descricaoPedido, setDescricaoPedido] = useState('')
  const [dataCriacaoPedido, setDataCriacaoPedido] = useState(Date)
  const [dataEntregaPedido, setDataEntregaPedido] = useState(Date)
  const [responsavelPedido, setResponsavelPedido] = useState('')


  async function criarNovoPedido(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('pedidos')
    .add({
      statusPedido: statusPedido,
      obra: obra,
      descricaoPedido: descricaoPedido,
      dataCriacaoPedido: dataCriacaoPedido,
      dataEntregaPedido: dataEntregaPedido,
      responsavelPedido: responsavelPedido
    })
    .then(() => {
      toast.success('Pedido criado com sucesso!')
      props.onRequestClose()
    })
    .catch(error => {
      toast.error('Erro ao criar pedido!')
    });
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
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT' selected="selected" hidden >Selecione Status do Pedido</option>
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
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" selected="selected" hidden>Selecione a Obra</option>
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