import styled from 'styled-components';
import { darken } from 'polished'


export const Container = styled.form`
h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--dark-navy);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 50%;

    position: relative;
    right: -25%;

    padding: 0 1.5rem;
    height: 4rem;
    background: var(--navy);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: 0.7s;

    &:hover {
      filter: brightness(1.4)
    }
  }
`;

export const PostTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'white' | 'purple'
}

const colors = {
  white: '#E9D5DA',
  purple: '#827397'
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 3px solid #827397;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
    ? colors[props.activeColor]
    : 'transparent'
  };

  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
    
   transition: filter 0.4s;
    
  &:hover {
    border: ${darken(0.1, '#d7d7d7')};
  }
    
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
  }
`;