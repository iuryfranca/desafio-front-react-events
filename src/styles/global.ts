import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #FFFFFF;
    --white-50: #F6F8FC;

    --gray-100: #e1e1e6;
    --gray-200: rgb(230, 230, 230);
    --gray-300: #a8a8b3;
    
    --black-100: #1a1a1a;
    --black-200: #121214;

    --cyan-500: #61dafb;

    --yellow-500: #ffc107;
    
    --normal: #a8a878;
    --fire: #f39d30;
    --water: #6890f0;
    --grass: #78c850;
    --electric: #f8d030;
    --ice: #98d8d8;
    --fighting: #c03028;
    --poison: #a040a0;
    --ground: #e0c068;
    --flying: #a890f0;
    --psychic: #f85888;
    --bug: #a8b820;
    --rock: #b8a038;
    --ghost: #705898;
    --dragon: #7038f8;
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white-50);
    color: var(--black-200);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }	

  a {
    color: inherit;
    text-decoration: none;
  }
`;
