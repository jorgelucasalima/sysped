import {Container, ContentMenu} from './styles'

export function HeaderMenu(params) {
  return(
    <Container>
      <ContentMenu>
        <a href='/pedidos'>Pedidos</a>
        <a href='/empresa'>Empresa</a>
        <a href='/insumos'>Insumos</a>
        <a href='/fornecedores'>Fornecedores</a>
        <a href='/obras'>Obras</a>
      </ContentMenu>
    </Container>
  )
}