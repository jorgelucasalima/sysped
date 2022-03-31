import {FiPackage} from 'react-icons/fi';
import {Container, Content, ContentMenu} from './styles'
import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <Container>
      <ContentMenu>
        <Link to="/empresa">Empresa</Link>
        <Link to="/insumos">Insumos</Link>
        <Link to="/fornecedores">Fornecedores</Link>
        <Link to="/obras">Obras</Link>
      </ContentMenu>
      <Content>
        <FiPackage size={35}/>
        <button type='button' onClick={props.modalPedidosOpen}>Cadastrar Pedido</button>
      
      </Content>
    </Container>
  )
}
