import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${(props) => props.theme.background};

  nav {
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      gap: 0.75rem;
    }
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

  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-100']};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(3.25rem / 2);
    right: calc(-1.25rem / 2);
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-900']};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
