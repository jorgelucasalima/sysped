import { HeaderMenu } from "../../components/HeaderMenu";
import {useParams} from 'react-router-dom';



export function EditarObra() {

  const { id } = useParams();
  console.log(id);

  return(
    <>
      <HeaderMenu/>
      <p>ss</p>
    </>
  )
}