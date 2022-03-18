import {FiPackage} from 'react-icons/fi';
import {Container} from './styles'

export function Header() {
  return (
    <Container>
      <FiPackage/>
      <button type='button'>Cadastrar Pedido</button>
    </Container>
  )
}