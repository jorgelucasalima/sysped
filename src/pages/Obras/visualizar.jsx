import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { Container } from "./styles";



export function VisualizarObra() {

  const { id } = useParams();

  const [obra, setObra] = useState();
  const [responsavelObras, setResponsavelObras] = useState('')
  console.log(obra)
  console.log(id)
  

  return (
    <>
      <HeaderMenu />
      <Container>

    
        <h1>Obra:</h1>
        <h2></h2>
        <h1>Responsável:</h1>
        <h2>Mano</h2>
      </Container>
      
    </>
  );
}