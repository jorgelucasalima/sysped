import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';

import { useState } from 'react';
import firebase from '../../services/firebaseConnection'



export function EditarObra(event) {

  const { id } = useParams();
  console.log(id);

  const [obras, setObras] = useState('')
  const [responsavelObras, setResponsavelObras] = useState('')

  async function editarObra() {
    await firebase.firestore().collection('obras')
    .doc(id)
    .update({
      obras: obras,
      responsavelObras: responsavelObras,
    })
    .then(() => {
      console.log('Document successfully updated!');

    })
    .catch(error => {})
  }

  return(
    <>
      <HeaderMenu/>
      <h1>Editar Obra</h1>
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
        <button type='submit' onClick={editarObra}>Salvar</button>

    </>
  )
}