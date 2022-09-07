import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-900']};
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none; 
  }

  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }


  body {
    background: ${(props) => props.theme.background};  
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
  }
`
