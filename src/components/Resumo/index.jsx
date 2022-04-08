import { Container } from "./styles";
import { FiLayers, FiCheckCircle, FiArchive } from "react-icons/fi";
import { useContext } from "react";
import { PedidosContext } from "../../contexts/pedidos";
import { InsumosContext } from "../../contexts/insumos";

export function Resumo() {

  const pedidos = useContext(PedidosContext)
  const insumos = useContext(InsumosContext)

  let quantidadePedidos = pedidos.length;
  let quantidadeInsumos = insumos.length;
  
  

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
        <strong>{quantidadeInsumos}</strong>
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

