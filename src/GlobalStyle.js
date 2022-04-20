import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
    color: ${({ theme }) => theme.colors.ink};
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.ink};
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  h2 {
    font-size: 48px;
    font-family: ${({ theme }) => theme.font.mono};
    font-weight: 900;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

`;

export default GlobalStyle;
