import styled from 'styled-components';

export const Container = styled.header`
  background: var(--azul);
`;

export const ContentMenu = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem 1rem 2rem;

  a {
    color: #FFFFFF;
    font-size: 1.15rem;
    padding: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    text-decoration: none;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
