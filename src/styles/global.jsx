import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    box-sizing: border-box;    
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;    
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: #FFA500;
    text-decoration: none;
  }
`

//overflow-x: hidden;
//-ms-overflow-style: scrollbar;
//-webkit-font-smoothing: antialiased;
//#F6EC21
export default GlobalStyle
