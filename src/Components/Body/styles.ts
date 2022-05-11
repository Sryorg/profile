import styled from 'styled-components'

export const Container = styled.div`
  background: var(--dark-navy);
  border: 2px solid var(--purple);
  border-radius: 0.8rem;

  color: var(--background);

  width: 30rem;
  height: 10rem;

  padding: 20px;

  position: relative;
  left: 26.5rem;
  top: -20rem;

  h1 {
    font-size: 1.5rem;
    padding: 0 2rem;

    color: var(--background);
  }

  img {
    float: left;
  }

  .dtmoney {
    position: relative;
    left: -0.5rem;

    border-radius: 0.8rem;

    width: 28.4rem;
  }

  

  a {
    font-size: 1.3rem;
    color: var(--background);

    text-decoration: none;
  }
`
