import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';



export function VisualizarObra() {

  const { id } = useParams();
  console.log(id);

  return(
    <>
      <HeaderMenu/>
      <p>visualizar</p>
    </>
  )
}