import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";



export function VisualizarObra() {

  const { id } = useParams();

  const [obra, setObra] = useState();



  return (
    <>
      <HeaderMenu />
      
    </>
  );
}