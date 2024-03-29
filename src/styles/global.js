import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  
  :root{
    --cordefundo: #F0F2F5;
    --vermelho: #e52e4d;
    --azul: #5429cc;
    --azul-claro: #6933ff;
    
    --verde: #33CC95;
    --texto-title: #363f5f;
    --texto-body: #969cb3;
    --fundo: #F0F2F5;
    --branco: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html {
    @media (max-width: 1088px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--cordefundo);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 8.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 90%;
    max-width: 600px;
    background: var(--cordefundo);
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;
  }

`

export default EstiloGlobal