import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';


export function ModalExcluirObra(props) {
  

  //função de excluir obra
  async function Excluir0bra(id) {
    await firebase.firestore().collection('obras')
    .doc(id)
    .delete()
    .then(() => {
      toast.success('Obra excluído com sucesso!')
      props.onRequestClose()
    })
    .catch(error => {
      toast.error('Erro ao excluir Obra')
    });
    
  }


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Excluir Obra</h2>
        
        <button onClick={props.onRequestClose}>Cancelar</button>
        <button onClick={Excluir0bra}>Excluir</button>
      </Container>
    </Modal>
  )
}