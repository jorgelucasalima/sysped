import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';


export function ModalEditarObra(props) {
  
  //estados dos inputs
  const [obras, setObras] = useState('')
  const [responsavelObras, setResponsavelObras] = useState('')
  

  //função de editar obra
   async function EditarObra(id) {
    await firebase.firestore().collection('obras')
    .doc(props.id)
    .update({
      obras: obras,
      responsavelObras: responsavelObras,
    })
    .then(() => {
      toast.success('Obra editada com sucesso MODAL EDITAR OBRAS!')
      props.onRequestClose()
      setObras('')
      setResponsavelObras('')
    })
    .catch(error => {
      toast.error('Erro ao editar obra!')
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

        <h2>Editar Obra</h2>
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
        <button type='submit'>Salvar</button>
      </Container>
    </Modal>
  )
}