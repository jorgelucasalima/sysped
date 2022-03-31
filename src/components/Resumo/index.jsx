import { Container } from "./styles";
import { FiLayers, FiCheckCircle, FiArchive } from "react-icons/fi";
import { useContext } from "react";
import { PedidosContext } from "../../contexts/pedidos";

export function Resumo() {

  const pedidos = useContext(PedidosContext)

  let quantidadePedidos = pedidos.length;
  console.log(pedidos)


  return (
    <Container>
      <div>
        <header>
          <p>Pedidos</p>
          <FiLayers size={23}/>
        </header>
        <strong>{quantidadePedidos}</strong>
      </div>
      <div>
        <header>
          <p>Insumos</p>
          <FiArchive size={23}/>
        </header>
        <strong>23</strong>
      </div>
      <div className="destaque-fundo">
        <header>
          <p>Pedidos Concluídos</p>
          <FiCheckCircle size={23}/>
        </header>
        <strong>3</strong>
      </div>
    </Container>
  );
}

