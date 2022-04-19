import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useContext, useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { ObrasContext } from "../../contexts/obras";


export function ModalVisualizarObra(props) {
  
  const obras = useContext(ObrasContext)


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

        <h2>Obra</h2>
        
      </Container>
    </Modal>
  )
}