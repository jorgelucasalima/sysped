import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 2rem;
  margin-top: 2rem;
`;

export const Content = styled.div`

  h1, h2, h3 {
    color: var(--texto-title);
    margin-top: 1rem;
  }

  button{
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

