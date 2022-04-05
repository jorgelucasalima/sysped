import { HeaderMenu } from "../../components/HeaderMenu";
import { TabelaInsumos } from "../../components/TabelaInsumos";
import Modal from 'react-modal'
import {ModalInsumos} from '../../components/ModalInsumos'
import { useState } from "react";
import InsumoProvider from "../../contexts/insumos";


Modal.setAppElement('#root');

export function Insumos() {

  const [isModalInsumosOpen, setIsModalInsumosOpen] = useState(false);

  function modalInsumosOpen() {
    setIsModalInsumosOpen(true)
  }

  function modalInsumosClose() {
    setIsModalInsumosOpen(false)
  }

  return(
    <InsumoProvider>
      <HeaderMenu/>
      <ModalInsumos isOpen={isModalInsumosOpen} onRequestClose={modalInsumosClose}/>
      <TabelaInsumos modalInsumosOpen={modalInsumosOpen} />
    </InsumoProvider>
  )
}