import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`
export const CurrentLocation = styled.div`
  width: 8.938rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-100']};

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['purple-800']};
  }
`

export const Cart = styled.div`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-100']};
`
