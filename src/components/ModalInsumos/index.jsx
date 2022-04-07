import {Container} from './styles'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { useState } from 'react';
import firebase from '../../services/firebaseConnection'
import { toast } from 'react-toastify';


export function ModalInsumos(props) {
  
  //estados dos inputs
  const [codigoInsumo, setCodigoInsumo] = useState('')
  const [descricaoInsumo, setDescricaoInsumo] = useState('')
  const [unidadeInsumo, setUnidadeInsumo] = useState('')
  const [precoBaseInsumo, setPrecoBaseInsumo] = useState('')
  const [categoriaInsumo, setCategoriaInsumo] = useState('')
  const [fornecedor, setFornecedor] = useState('')


  //função de criar insumo
  async function criarNovoInsumo(event) {
    event.preventDefault()
    
    await firebase.firestore().collection('insumos')
    .add({
      codigoInsumo: codigoInsumo,
      descricaoInsumo: descricaoInsumo,
      unidadeInsumo: unidadeInsumo,
      precoBaseInsumo: precoBaseInsumo,
      categoriaInsumo: categoriaInsumo,
      fornecedor: fornecedor
    })
    .then(() => {
      toast.success('Insumo criado com sucesso!')
    })
    .catch(error => {
      toast.error('Erro ao criar Insumo!')
    });
  }


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={criarNovoInsumo}>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='react-modal-close'
        >
          <FiX/>
        </button>

        <h2>Cadastrar Insumo</h2>
        <input 
          placeholder='Código'
          type="text" 
          value={codigoInsumo} 
          onChange={(event) => setCodigoInsumo(event.target.value)}
        />
        <input 
          placeholder='Descrição Insumo'
          type="text" 
          value={descricaoInsumo} 
          onChange={(event) => setDescricaoInsumo(event.target.value)}
        />
        <input 
          type="number" 
          placeholder='Preço Base'
          value={precoBaseInsumo}
          onChange={(event) => setPrecoBaseInsumo(event.target.value)}
        />
        <select 
          name="unidadeInsumo" 
          id="unidadeInsumo"
          value={unidadeInsumo}
          onChange={(event) => setUnidadeInsumo(event.target.value)}
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT' selected="selected" hidden >Selecione a unidade do Insumo</option>
          <option value="cm">Cm²</option>
          <option value="km">Km</option>
        </select>
        <select 
          name="categoriaInsumo" 
          id="categoriaInsumo"
          value={categoriaInsumo}
          onChange={(event) => setCategoriaInsumo(event.target.value)}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" selected="selected" hidden>Selecione a categoria</option>
          <option value="mh">Material Hidraulico</option>
          <option value="mc">Material de Concreto</option>
        </select>
        <select 
          name="fornecedor" 
          id="fornecedor" 
          value={fornecedor}
          onChange={(event) => setFornecedor(event.target.value)}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" selected="selected" hidden>Selecione o Fornecedor</option>
          <option value="fr">Ferreira Costa</option>
          <option value="tupan">Tupan</option>
        </select>
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}