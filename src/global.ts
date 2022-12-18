import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: Inter, sans-serif;
    background-color: #242424;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    
    --background-01: #121212;
    --background-02: #27272A;
    --background-03: #3F3F46;
    
    --color-text-01: #FFFFFF;
    --color-text-02: #A1A1AA;;
  }
  header, body {
    height: 100%;
    background: var(--background-01);
  }
  a {
    text-decoration: inherit;
  }
  li {
    list-style-type: none;
  }
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    /* overlay occupying all screen  */
    /* Ocupando tela toda o overlay */
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* White box of the modal stay always in the middle */
    /* Box branco do modal ficar sempre no meio */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    width: 476px;
    background: #D9D9D9;
    padding: 1rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
      color: red;
    }
  }
`;



