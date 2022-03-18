import styled from 'styled-components'

export const Container = styled.header`
  background: var(--azul);
`

export const ContentMenu = styled.div`

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  a {
    color: #FFFFFF;
    font-size: 1.15rem;
    padding: 1rem;
    margin-left: 1rem;

    cursor: pointer;
  }
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: white;
  }

  button {
    font-size: 1rem;
    color: #FFFFFF;
    background: var(--azul-claro);
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;
   
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }




`