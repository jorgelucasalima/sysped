import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { Container } from "./styles";
import firebase from '../../services/firebaseConnection'



export function VisualizarObra() {

  //pegando id da url
  const { id } = useParams();

  const [obra, setObra] = useState({});

  //carregar obra do id da url
  useEffect(() => {
    async function visualizarObra() {
      await firebase.firestore().collection(`obras`)
      .doc(id)
      .get({
        obras: obra.obras,
        responsavelObras: obra.responsavelObras
      })
      .then(response => {
        setObra(response.data())
      })
      .catch(error => {
        console.log(error)
      })
    }
    visualizarObra();
  }, [id]);


  return (
    <>
      <HeaderMenu />
      <Container>
        <h1>Obra:</h1>
        <h2>{obra.obras}</h2>
        <h1>Responsável:</h1>
        <h2>{obra.responsavelObras}</h2>
      </Container>
    </>
  );
}