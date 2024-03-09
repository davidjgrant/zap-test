import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --max-width: 1100px;
  --border-radius: 12px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const theme = {
  colors: {
    primary: '#000000',
    background: '#F5F5F5',
  },
};
