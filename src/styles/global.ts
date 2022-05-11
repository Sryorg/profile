import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E9D5DA;
    --purple: #827397;
    --navy: #4D4C7D;
    --dark-navy: #363062;

    --text-title: #FBF8F1;
    --text-body: #F7ECDE;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75;
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--navy);
    -webkit-font-smoothing: antialiased;
  }

  body, :-ms-input-placeholder, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.6);

    width: 100%;


    position: fixed;
    top: 0;
    bottom: 0;
    right: 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  .react-modal-content {
    background: var(--dark-navy);
    padding: 3rem;

    position: relative;
    border-radius: 0.8rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
  
`