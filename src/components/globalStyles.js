// import { createGlobalStyle } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body, html  {
//     font-family: 'Arial', sans-serif;
//     background-color: #f0f0f0;
//     /* overflow-y: scroll; */
//     margin: 0;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }

// `;


import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   html {
    scrollbar-gutter: stable; /* <- AQUI */
  }

  body {
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const titleStyle = {
  color: '#34495e',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '28px',
  fontWeight: '800',
  marginBottom: '24px',
  letterSpacing: '0.05em',
};
