import { HeaderMenu } from "../../components/HeaderMenu";
import {Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { Container } from "./styles";

export function EditarObra() {

  //pegando id da url
  const { id } = useParams();

  const [obras, setObras] = useState('')
  const [responsavelObras, setResponsavelObras] = useState('')

  
  async function editarObra(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('obras')
    .doc(id)
    .update({
      obras: obras,
      responsavelObras: responsavelObras,
    })
    .then(() => {
      toast.success('Obra editada com sucesso!')
       
      //redirecionar para pagina de obras
      //implementar rota para obras com reacte-router-dom
      setTimeout(() => {
        window.location.href = '/obras'
      }, 1000)
    })
    .catch(error => {
      toast.error('Erro ao criar obra!')
    })
  }

  return(
    <>
      <HeaderMenu/>
      <Container>
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
          <button>
          <Link to="/obras">Voltar</Link>
          </button>
          
          <button type='submit' onClick={editarObra}>Salvar</button>
      </Container>
    </>
  )
}