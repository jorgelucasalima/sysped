import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
      color: var(--texto-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 0.50rem;
      border: 0;
      background: var(--branco);
      color: var(--texto-body);
      border-radius: 0.25rem;
      text-align: center;

      a {
        margin-left: 1rem;
        cursor: pointer;
      }

      button{
        margin: 0;
        border: 0;
        margin-left: 1rem;
        background: var(--branco);
        color: var(--texto-body);
      }

    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

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

