import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { ContainerVisualizarFornecedor } from "./styles";
import firebase from '../../services/firebaseConnection'


export function VisualizarFornecedor() {

  //pegando id da url
  const { id } = useParams();

  const [fornecedor, setFornecedor] = useState({});

  //carregar obra do id da url
  useEffect(() => {
    async function visualizarFornecedor() {
      await firebase.firestore().collection(`fornecedores`)
      .doc(id)
      .get({
        fornecedor: fornecedor.fornecedor,
        telefoneFornecedor: fornecedor.telefoneFornecedor,
      })
      .then(response => {
        setFornecedor(response.data())
      })
      .catch(error => {
        console.log(error)
      })
    }
    visualizarFornecedor();
  }, [id]);


  return (
    <>
      <HeaderMenu />
      <ContainerVisualizarFornecedor>
        <div>
          <h1>Fornecedor:</h1>
          <h2>{fornecedor.fornecedor}</h2>
          <h1>Contato:</h1>
          <h2>{fornecedor.telefoneFornecedor}</h2>
        </div>
      </ContainerVisualizarFornecedor>
    </>
  );
}