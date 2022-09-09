import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 9.8rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const CoffeeCard = styled.li`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  margin-bottom: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -60px;
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
  }

  strong {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    width: 13.5rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`
export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  p {
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
    padding: 4px 8px;
    text-transform: uppercase;
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-900']};
    background: ${(props) => props.theme['yellow-100']};
  }
`
export const BuyCoffee = styled.form`
  margin-top: 2.063rem;
  width: 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  label {
    width: 4.188rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.375rem;
    height: 2.375rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-800']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['base-card']};
    }

    &:hover {
      background: ${(props) => props.theme['purple-400']};
      transition: background-color 0.2s;
    }
  }
`
