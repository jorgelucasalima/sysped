import {FiPackage} from 'react-icons/fi';
import {Container, Content, ContentMenu} from './styles'

export function Header() {
  return (
    <Container>
      <ContentMenu>
        <a href='#'>Empresa</a>
        <a href='#'>Produtos</a>
        <a href='#'>Funcionários</a>
      </ContentMenu>
      <Content>
        <FiPackage size={35}/>
        <button type='button'>Cadastrar Pedido</button>
      </Content>
    </Container>
  )
}
