import { HeaderMenu } from "../../components/HeaderMenu";
import ObraProvider from "../../contexts/obras";


export function EditarObra() {

  return(
    <ObraProvider>
      <HeaderMenu/>
    </ObraProvider>
  )
}