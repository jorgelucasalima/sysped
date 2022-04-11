import { HeaderMenu } from "../../components/HeaderMenu";
import { TabelaObras } from "../../components/TabelaObras";
import Modal from 'react-modal'
import {ModalObras} from '../../components/ModalObras'
import { useState } from "react";
import ObraProvider from "../../contexts/obras";
import { ModalExcluirObra } from "../../components/ModalExcluirObra";

Modal.setAppElement('#root');


export function Obras() {

  //estados
  const [isModalObrasOpen, setIsModalObrasOpen] = useState(false);
  const [isModalExcluirObrasOpen, setIsModalExcluirObrasOpen] = useState(false);

  //função modal de cadastro de obras
  function modalObrasOpen() {
    setIsModalObrasOpen(true)
  }

  function modalObrasClose() {
    setIsModalObrasOpen(false)
  }

  //função modal de excluir obras
  function modalExcluirObrasOpen() {
    setIsModalExcluirObrasOpen(true)
  }

  function modalExcluirObrasClose() {
    setIsModalExcluirObrasOpen(false)
  }

  return(
    <ObraProvider>
      <HeaderMenu/>
      <ModalObras isOpen={isModalObrasOpen} onRequestClose={modalObrasClose}/>
      <ModalExcluirObra isOpen={isModalExcluirObrasOpen} onRequestClose={modalExcluirObrasClose}/>
      <TabelaObras modalObrasOpen={modalObrasOpen} modalExcluirObrasOpen={modalExcluirObrasOpen}/>
    </ObraProvider>
  )
}