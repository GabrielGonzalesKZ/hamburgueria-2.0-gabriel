import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: var(--color-background);
    font-family: 'Inter', sans-serif;
  }

  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  figure {
    padding: 0;
    margin: 0;
  }

  :root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;
    --color-background: #FFFFFF;
    --color-grey-100: #E0E0E0;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-0: #F5F5F5;
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 40px 20px;
    width: 100%;
  }
`;
