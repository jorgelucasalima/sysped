import {FiPackage} from 'react-icons/fi';
import {Container, Content, ContentMenu} from './styles'

export function Header() {
  return (
    <Container>
      <ContentMenu>
        <a href='#'>Empresa</a>
        <a href='#'>Insumos</a>
        <a href='#'>Fornecedores</a>
        <a href='#'>Obras</a>
      </ContentMenu>
      <Content>
        <FiPackage size={35}/>
        <button type='button'>Cadastrar Pedido</button>
      </Content>
    </Container>
  )
}
