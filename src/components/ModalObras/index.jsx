import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'



export function ModalObras(props) {
  
  //estados dos inputs
  const [obras, setObras] = useState('')
  const [responsavelObras, setResponsavelObras] = useState('')
  

  //função de criar insumo
  async function criarNovaObra(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('obras')
    .add({
      obras: obras,
      responsavelObras: responsavelObras,
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
      <Container onSubmit={criarNovaObra}>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Cadastrar Obra</h2>
        <input 
          placeholder='Obra'
          type="text" 
          value={obras} 
          onChange={(event) => setObras(event.target.value)}
        />
        <input 
          placeholder='Responsável pela Obra'
          type="text" 
          value={responsavelObras} 
          onChange={(event) => setResponsavelObras(event.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}