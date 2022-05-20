import styled from "styled-components";


export const Container = styled.form`

  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  
  h1 {
    color: var(--texto-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: var(--texto-title);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.25rem;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;

    &::placeholder {
      color: var(--texto-body);
    }
  }

  button[type="submit"] {
    width: 50%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--verde);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    
    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    width: 40%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--fundo);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 1.5rem;
    
    transition:filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  a{
    text-decoration: none;
  }

`
//estilização do visualizador de obra
export const ContainerVisualizarObra = styled.div`

  max-width: 1120px;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  margin-top: 3rem;
  margin-bottom: 1rem;

  div {
    background: var(--azul);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--fundo);

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }
    
  }

`