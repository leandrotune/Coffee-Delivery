import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  h1 {
    margin-top: 5rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-900']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const MainContainer = styled.main`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme.background};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      z-index: -1;
      border-radius: 7px 37px 7px 37px;
      border: px solid;
      background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
  }
`
export const LostInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  > p {
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-weight: 700;
    }
  }

  strong {
    line-height: 1.3;
    font-weight: 700;
  }
`
interface ContainerIconProps {
  variant?: 'purple' | 'yellow' | 'yellow-dark'
}

export const ContainerIcon = styled.div<ContainerIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 2rem;
  height: 2rem;
  border-radius: 1000px;

  ${(props) =>
    props.variant === 'purple' &&
    css`
      background: ${(props) => props.theme['purple-400']};
    `}

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background: ${(props) => props.theme['yellow-400']};
    `}

    ${(props) =>
    props.variant === 'yellow-dark' &&
    css`
      background: ${(props) => props.theme['yellow-900']};
    `}
`
