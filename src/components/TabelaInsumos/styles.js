import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

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

    }


  }
`;
