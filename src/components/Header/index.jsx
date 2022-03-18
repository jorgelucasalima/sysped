import {FiPackage} from 'react-icons/fi';
import {Container, Content, ContentMenu} from './styles'

export function Header() {
  return (
    <Container>
      <ContentMenu>
        <a>Empresa</a>
        <a>Produtos</a>
        <a>Funcionários</a>
      </ContentMenu>
      <Content>
        <FiPackage size={35}/>
        <button type='button'>Cadastrar Pedido</button>
      </Content>
    </Container>
  )
}