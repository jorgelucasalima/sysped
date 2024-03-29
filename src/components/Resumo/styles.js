import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.5rem;

  div {
    background: var(--branco);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--texto-title);
 
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }

    &.destaque-fundo {
      background: var(--verde);
      color: #FFF;
    }
    
  }

`
