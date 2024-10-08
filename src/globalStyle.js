import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
}

html, body {
    height: 100%
    font-family: 'Rambla', sans-serif;
`;

export default GlobalStyle;