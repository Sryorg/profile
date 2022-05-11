import styled from 'styled-components'

export const Container = styled.div`
  background: var(--dark-navy);
  border: 2px solid var(--purple);
  border-radius: 0.8rem;

  width: 23rem;

  position: relative;
  top: -33rem;
  left: 3rem;

  padding: 2rem 2rem;

  img {
    padding-right: 0.8rem;
  }

  dl dt {
    padding-top: 0.8rem;
    
  }
`

export const Content = styled.div`
  position: relative;
  top: -22rem;
  left: 2.8rem;

  width: 0.5rem;


  p {
    background: var(--background);
    border: 2px solid var(--purple);
    border-radius: 0.8rem;

    text-align: center;

    padding: 5px;
  }

  table {
    width: 10%;
    border-spacing: 0 0.5rem;
    background: var(--dark-navy);
    border: 2px solid var(--purple);
    border-radius: 0.8rem;

    position: relative;
    top: -10rem;
  }
  th {
    font-weight: 400;
    padding: 1rem 1.1rem;
    text-align: left;
    line-height: 1.5rem;
  }
  td {
    padding: 1rem 1.8rem;
    border: 0;
    border-radius: 0.25rem;
  }
`