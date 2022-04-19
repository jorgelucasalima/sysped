import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';
import { VisualizarObra } from "../../components/VisualizarObra";
import { useEffect, useState } from "react";



export function VisualizarObra_() {

  const { id } = useParams();

  const [obra, setObra] = useState();



  return (
    <>
      <HeaderMenu />
      <VisualizarObra obra={obra} />
    </>
  );
}