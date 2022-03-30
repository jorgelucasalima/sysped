import { Container } from "./styles";
import { FiLayers, FiCheckCircle, FiArchive } from "react-icons/fi";
import { useContext } from "react";
import { PedidosContext } from "../../contexts/pedidos";

export function Resumo() {

  const data = useContext(PedidosContext)

  return (
    <Container>
      <div>
        <header>
          <p>Pedidos</p>
          <FiLayers size={23}/>
        </header>
        <strong>45</strong>
      </div>
      <div>
        <header>
          <p>Produtos</p>
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

