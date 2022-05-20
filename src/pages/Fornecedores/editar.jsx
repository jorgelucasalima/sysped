import { HeaderMenu } from "../../components/HeaderMenu";
import {Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';
import { Container } from "./styles";



export function EditarFornecedor() {

  //pegando id da url
  const { id } = useParams();

  const [fornecedor, setFornecedor] = useState('')
  const [categoriaFornecedor, setCategoriaFornecedor] = useState('')
  const [cnpjFornecedor, setCnpjFornecedor] = useState('')
  const [telefoneFornecedor, setTelefoneFornecedor] = useState('')
  const [emailFornecedor, setEmailFornecedor] = useState('')
  const [enderecoFornecedor, setEnderecoFornecedor] = useState('')

  
  async function editarFornecedor(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('fornecedores')
    .doc(id)
    .update({
      fornecedor: fornecedor,
      categoriaFornecedor: categoriaFornecedor,
      cnpjFornecedor: cnpjFornecedor,
      telefoneFornecedor: telefoneFornecedor,
      emailFornecedor: emailFornecedor,
      enderecoFornecedor: enderecoFornecedor
    })
    .then(() => {
      toast.success('Fornecedor editado com sucesso!')
       
      //redirecionar 
      //implementar rota com reacte-router-dom
      setTimeout(() => {
        window.location.href = '/fornecedores'
      }, 1000)
    })
    .catch(error => {
      toast.error('Erro ao criar Fornecedor!')
    })
  }

  return(
    <>
      <HeaderMenu/>
      <Container>
        <h1>Editar Fornecedor</h1>
        <input 
          placeholder='Fornecedor'
          type="text" 
          value={fornecedor} 
          onChange={(event) => setFornecedor(event.target.value)}
        />
        <select 
          name="cateforiaFornecedor" 
          id="cateforiaFornecedor"
          value={categoriaFornecedor}
          onChange={(event) => setCategoriaFornecedor(event.target.value)}
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT' selected="selected" hidden >Selecione a categoria</option>
          <option value="Hidraulico">Hidraulico</option>
          <option value="Concreto">Concreto</option>
        </select>
        <input 
          placeholder='CNPJ'
          type="text" 
          value={cnpjFornecedor} 
          onChange={(event) => setCnpjFornecedor(event.target.value)}
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
         
          <button>
            <Link to="/fornecedores">Voltar</Link>
          </button>
          
          <button type='submit' onClick={editarFornecedor}>Salvar</button>
      </Container>
    </>
  )
}