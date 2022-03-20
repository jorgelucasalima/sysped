import { Container } from "./styles";
import {Resumo} from '../Resumo'
import { TabelaPedidos } from "../TabelaPedidos";

export default function Dashboard() {
  return (
    <Container>
      <Resumo/>
      <TabelaPedidos/>
    </Container>
  )
}