import styled from 'styled-components';

export const StyledTitle = styled.div<{ size: keyof JSX.IntrinsicElements, styled: boolean }>`

position: relative;

  ${({ size }) => {
    switch (size) {
      case 'h1':
        return `
          font-size: 40px;
          line-height: 48px;
          color: #272B30;
          text-align: left;
          margin-bottom: 64px;
        `;
      case 'h2':
        return `
          font-size: 20px;
          line-height: 32px;
          color: #1A1D1F;
          margin-left: 32px;
        `;
      default:
        return `
          font-size: 20px;
          line-height: 32px;
          margin-bottom: 32px;
        `;
    }
  }}

  ${({ styled }) => styled && `
    &:before {
      content: '';
      position: absolute;
      left: -32px;
      top: 0;
      width: 16px;
      height: 32px;
      background-color: #999DFF;
      border-radius: 4px;
    }
  `}
`;