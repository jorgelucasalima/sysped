import { HeaderMenu } from "../../components/HeaderMenu";
import { TabelaFornecedores } from "../../components/TabelaFornecedores";
import Modal from 'react-modal'
import {ModalFornecedores} from '../../components/ModalFornecedores'
import { useState } from "react";
import FornecedorProvider from "../../contexts/insumos";


Modal.setAppElement('#root');

export function Fornecedores() {

  const [isModalFornecedoresOpen, setIsModalFornecedoresOpen] = useState(false);

  function modalFornecedoresOpen() {
    setIsModalFornecedoresOpen(true)
  }

  function modalFornecedoresClose() {
    setIsModalFornecedoresOpen(false)
  }

  return(
    <FornecedorProvider>
      <HeaderMenu/>
      <ModalFornecedores isOpen={isModalFornecedoresOpen} onRequestClose={modalFornecedoresClose}/>
      <TabelaFornecedores modalInsumosOpen={modalFornecedoresOpen} />
    </FornecedorProvider>
  )
}