import styled from 'styled-components'

export const HeaderCart = styled.header`
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SectionContainer = styled.section`
  margin-top: 0.938rem;
  width: 28rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

export const CoffeeAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  width: 10.688rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 8px;
`

export const ButtonRemover = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 5.688rem;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  button {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    font-stretch: 100;
    color: ${(props) => props.theme.white};

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    margin-top: 1.5rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-400']};

    &:hover {
      background: ${(props) => props.theme['yellow-900']};
    }
  }
`
