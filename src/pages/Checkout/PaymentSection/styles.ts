import styled from 'styled-components'
export const PaymentSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  max-width: 40rem;
  width: 100%;
  margin-top: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 0.5rem;

    h4 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  gap: 0.75rem;

  max-width: 35rem;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    width: 11.167rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-400']};
    }

    p {
      font-size: 0.75rem;
      text-transform: uppercase;
      line-height: 1.6;
      color: ${(props) => props.theme['base-text']};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-100']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      border: 1px solid ${(props) => props.theme['base-hover']};
    }

    &:active {
      background: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-400']};
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`
