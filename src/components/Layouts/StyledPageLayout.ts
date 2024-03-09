import styled from 'styled-components';

export const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 24px 16px;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }
`;
