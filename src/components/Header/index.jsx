import { useState } from 'react';
import {FiPackage} from 'react-icons/fi';
import {Container, Content, ContentMenu} from './styles'
import Modal from 'react-modal';


export function Header(props) {

  return (
    <Container>
      <ContentMenu>
        <a href='#'>Empresa</a>
        <a href='#'>Insumos</a>
        <a href='#'>Fornecedores</a>
        <a href='#'>Obras</a>
      </ContentMenu>
      <Content>
        <FiPackage size={35}/>
        <button type='button' onClick={props.modalPedidosOpen}>Cadastrar Pedido</button>
      
      </Content>
    </Container>
  )
}
