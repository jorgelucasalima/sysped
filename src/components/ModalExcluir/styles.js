import styled from "styled-components";


export const Container = styled.form`
  
  h2 {
    color: var(--texto-title);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  button {
    //width: 40%;
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

  .btn-nao {
    background: var(--verde);
    width: 40%;
    margin-left: 2.5rem;
  }

  .btn-sim{
    width: 40%;
    margin-left: 1rem;
    background: var(--vermelho);
  }


`
