import styled from 'styled-components'

export const Container = styled.div`
  background: var(--dark-navy);

  width: 23rem;
  height: 20rem;

  margin: 2rem 3rem;
  text-align: center;
  color: var(--background);

  position: relative;

  padding: 2rem 1rem 10rem;
  
  align-items: center;

  border-radius: 0.8rem;
  border: 2px solid var(--purple);

  img {
    border: 5px solid  #00a000;
    border-radius: 100%;
    height: 10rem;
  }

`

export const Content = styled.div`
  background: var(--dark-navy);
  border: 2px solid var(--purple);
  border-radius: 0.8rem;


  padding: 10px;
  max-width: 920px;
  position: relative;
  top: -22rem;
  left: 13rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    position: relative;
    top: 8px;
    left: 5px;

    color: var(--background);
  }

  a {
    font-size: 18px;
    color: #fff;

    position: relative;
    left: 50rem;
    top: -18px;
  }

`

