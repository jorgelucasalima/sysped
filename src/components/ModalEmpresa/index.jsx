import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';


export function ModalEmpresa(props) {
  
  //estados dos inputs
  const [empresa, setEmpresa] = useState('')
  const [cnpjEmpresa, setCnpjEmpresa] = useState('')
  const [contatoEmpresa, setContatoEmpresa] = useState('')
  const [emailEmpresa, setEmailEmpresa] = useState('')
  

  //função de criar insumo
  async function criarNovaEmpresa(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('empresa')
    .add({
      empresa: empresa,
      cnpjEmpresa: cnpjEmpresa,
      contatoEmpresa: contatoEmpresa,
      emailEmpresa: emailEmpresa,
    })
    .then(() => {
      toast.success('Empresa criado com sucesso!')
      props.onRequestClose()
    })
    .catch(error => {
      toast.error('Erro ao criar Empresa')
    });
  }


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={criarNovaEmpresa}>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Cadastrar Empresa</h2>
        <input 
          placeholder='Nome Empresa'
          type="text" 
          value={empresa} 
          onChange={(event) => setEmpresa(event.target.value)}
        />
        <input 
          placeholder='CNPJ'
          type="text" 
          value={cnpjEmpresa} 
          onChange={(event) => setCnpjEmpresa(event.target.value)}
        />
        <input 
          placeholder='Contato - Telefone'
          type="text" 
          value={contatoEmpresa} 
          onChange={(event) => setContatoEmpresa(event.target.value)}
        />
        <input 
          placeholder='E-mail'
          type="text" 
          value={emailEmpresa} 
          onChange={(event) => setEmailEmpresa(event.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}