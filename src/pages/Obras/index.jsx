import { HeaderMenu } from "../../components/HeaderMenu";
import { TabelaObras } from "../../components/TabelaObras";
import Modal from 'react-modal'
import {ModalObras} from '../../components/ModalObras'
import { useState } from "react";
import ObraProvider from "../../contexts/obras";

Modal.setAppElement('#root');


export function Obras() {

  const [isModalObrasOpen, setIsModalObrasOpen] = useState(false);

  function modalObrasOpen() {
    setIsModalObrasOpen(true)
  }

  function modalObrasClose() {
    setIsModalObrasOpen(false)
  }

  return(
    <ObraProvider>
      <HeaderMenu/>
      <ModalObras isOpen={isModalObrasOpen} onRequestClose={modalObrasClose}/>
      <TabelaObras modalObrasOpen={modalObrasOpen} />
    </ObraProvider>
  )
}