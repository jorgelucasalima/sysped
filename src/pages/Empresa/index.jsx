import { HeaderMenu } from "../../components/HeaderMenu";
import { TabelaEmpresa } from "../../components/TabelaEmpresa";
import Modal from 'react-modal'
import {ModalEmpresa} from '../../components/ModalEmpresa'
import { useState } from "react";
import EmpresaProvider from "../../contexts/empresa";


Modal.setAppElement('#root');

export function Empresa() {

  const [isModalEmpresaOpen, setIsModalEmpresaOpen] = useState(false);

  function modalEmpresaOpen() {
    setIsModalEmpresaOpen(true)
  }

  function modalEmpresaClose() {
    setIsModalEmpresaOpen(false)
  }

  return(
    <EmpresaProvider>
      <HeaderMenu/>
      <ModalEmpresa isOpen={isModalEmpresaOpen} onRequestClose={modalEmpresaClose}/>
      <TabelaEmpresa modalEmpresaOpen={modalEmpresaOpen} />
    </EmpresaProvider>
  )
}