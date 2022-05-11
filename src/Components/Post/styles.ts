import styled from "styled-components"

export const Content = styled.div`
  background: var(--dark-navy);
  border: 2px solid var(--purple);
  border-radius: 0.8rem;

  padding: 10px;
  
  height: 4rem;
  max-width: 910px;
  top: -18rem;
  left: 27rem;

  position: relative;

  font-size: 1.5rem;

  div {
    font-size: 2rem;
  }
  
  button {
    font-size: 0.80rem;
    color: #000;
    background: var(--background);
    padding: 0.8rem;
    border-radius: 0.25rem;
    height: 2.5rem;

    &:hover {
      filter: brightness(0.9);
    }

    position: relative;
    top: -2.4rem;
    left: 50rem;
  }
`

export const Center = styled.table`
  background: var(--dark-navy);
  border: 2px solid var(--purple);
  border-radius: 0.8rem;

  height: 14rem;
  width: 910px;

  position: relative;
  left: 27rem;
  top: -16rem;

  overflow-y: scroll;

  th {
    background: var(--dark-navy);
    border: 2px solid var(--purple);
    border-radius: 0.8rem;

    color: var(--background);

    width: 20rem;
    height: auto;
    font-size: 1.5rem;
  }

  td {
    border-bottom: 2px solid var(--purple);
    border-radius: 0.8rem;

    padding-top: 30px;

    color: var(--background);

    text-align: center;
  }
`