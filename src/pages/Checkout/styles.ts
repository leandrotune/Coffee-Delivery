import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

export const CompleteYourLost = styled.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.938rem;
  }
`

export const FormAddress = styled.main`
  max-width: 40rem;
  height: 23.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

  div {
    h3 {
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

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  div {
    display: flex;
  }
`

export const BaseInput = styled.input`
  width: 100%;
  background: transparent;
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  &:active:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-400']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputInfor = styled(BaseInput)`
  width: 12.5rem;
`

export const InputInforRoad = styled(BaseInput)`
  flex: 1;
`

export const InputInforComplemento = styled(BaseInput)`
  width: 21.75rem;
`

export const InputInforEstado = styled(BaseInput)`
  width: 3.75rem;
`

export const InputInforCidade = styled(BaseInput)`
  width: 17.25rem;
`

export const FormInforContent = styled.div`
  max-width: 35rem;
  display: flex;
  gap: 0.75rem;
`
