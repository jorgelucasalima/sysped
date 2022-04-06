import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'



export function ModalFornecedores(props) {
  
  //estados dos inputs
  const [fornecedor, setFornecedor] = useState('')
  const [cateforiaFornecedor, setCateforiaFornecedor] = useState('')
  const [cpnjFornecedor, setCpnjFornecedor] = useState('')
  const [telefoneFornecedor, setTelefoneFornecedor] = useState('')
  const [emailFornecedor, setEmailFornecedor] = useState('')
  const [enderecoFornecedor, setEnderecoFornecedor] = useState('')


  //função de criar insumo
  async function criarNovoFornecedor(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('insumos')
    .add({
      fornecedor: fornecedor,
      cateforiaFornecedor: cateforiaFornecedor,
      cpnjFornecedor: cpnjFornecedor,
      telefoneFornecedor: telefoneFornecedor,
      emailFornecedor: emailFornecedor,
      enderecoFornecedor: enderecoFornecedor
    })
    .then(() => {
      console.log("DADOS CADASTRADOS");
      //implementar o toasty
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
  }


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={criarNovoFornecedor}>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Cadastrar Fornecedor</h2>
        <input 
          placeholder='Fornecedor'
          type="text" 
          value={fornecedor} 
          onChange={(event) => setFornecedor(event.target.value)}
        />
        <select 
          name="cateforiaFornecedor" 
          id="cateforiaFornecedor"
          value={cateforiaFornecedor}
          onChange={(event) => setCateforiaFornecedor(event.target.value)}
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT' selected="selected" hidden >Selecione a categoria</option>
          <option value="Hidraulico">Hidraulico</option>
          <option value="Concreto">Concreto</option>
        </select>
        <input 
          placeholder='CNPJ'
          type="text" 
          value={cpnjFornecedor} 
          onChange={(event) => setCpnjFornecedor(event.target.value)}
        />
        <input 
          placeholder='Telefone'
          type="text" 
          value={telefoneFornecedor} 
          onChange={(event) => setTelefoneFornecedor(event.target.value)}
        />
        <input 
          placeholder='E-mail'
          type="text" 
          value={emailFornecedor} 
          onChange={(event) => setEmailFornecedor(event.target.value)}
        />
        <input 
          placeholder='Endereço'
          type="text" 
          value={enderecoFornecedor} 
          onChange={(event) => setEnderecoFornecedor(event.target.value)}
        />
       
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}