import styled, { css } from 'styled-components'
// import backgroundIntro from '../../../assets/backgroundIntro.png'

export const IntroCoffe = styled.div`
  width: 100%;
`

export const IntroContainer = styled.section`
  height: 34rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    width: 36.75rem;
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    width: 36.75rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const CoffeQuality = styled.div`
  margin-top: 4.125rem;
  display: flex;
  width: 35.438rem;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  justify-content: space-between;
`
export const QualitysContainer = styled.div`
  width: 118.375rem;
  margin-bottom: 31px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  variant: 'Yellow Dark' | 'Yellow' | 'Gray' | 'Purple'
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 999%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.background};
  }

  ${(props) =>
    props.variant === 'Yellow Dark' &&
    css`
      background: ${(props) => props.theme['yellow-900']};
    `}

  ${(props) =>
    props.variant === 'Yellow' &&
    css`
      background: ${(props) => props.theme['yellow-400']};
    `}

  ${(props) =>
    props.variant === 'Gray' &&
    css`
      background: ${(props) => props.theme['base-text']};
    `}

  ${(props) =>
    props.variant === 'Purple' &&
    css`
      background: ${(props) => props.theme['purple-400']};
    `}
`
