import {Container, Content} from './styles'

export function VisualizarObra(props) {
  return(
    <Container>
      <Content>
        <h1>Obra:</h1>
        <h3>{props.id}</h3>
        <h1>Responsável:</h1>
        <h3>{props.data.responsavelObras}</h3>
      </Content>
    </Container>
  )
}