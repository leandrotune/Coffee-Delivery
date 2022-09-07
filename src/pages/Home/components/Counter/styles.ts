import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  button {
    border: 0;
    font-size: 0;
    background: transparent;

    svg {
      color: ${(props) => props.theme['purple-400']};
    }

    &:hover {
      svg {
        color: ${(props) => props.theme['base-title']};
      }
    }
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 1px transparent;
    }
  }
`
