import styled from 'styled-components'

export const CompleteYourLostContainer = styled.div`
  max-width: 40rem;

  header {
    margin-top: 2.5rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      font-family: 'Baloo 2';
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CardAddress = styled.section`
  margin-top: 0.938rem;
  width: 100%;
  height: 23.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;

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

export const FormAddress = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;

  max-width: 560px;
  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  border: 1px solid #e6e5e5;
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputCep = styled(BaseInput)`
  max-width: 12.5rem;
  width: 100%;
`

export const InputRoad = styled(BaseInput)`
  min-width: 12.5rem;
  flex: 1;
`

export const InputResidentialNumber = styled(BaseInput)`
  max-width: 12.5rem;
`

export const InputComplement = styled(BaseInput)`
  flex: 1;
`

export const InputDistrict = styled(BaseInput)`
  max-width: 12.5rem;
`

export const InputCity = styled(BaseInput)`
  flex: 1;
`

export const InputUF = styled(BaseInput)`
  width: 3.75rem;
`

// export const FormContainer = styled.form`
//   max-width: 40rem;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   gap: 16px;

//   div {
//     display: flex;
//   }

//   @media (max-width: 768px) {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//   }

//   @media (max-width: 992px) {
//     display: flex;
//     width: 100%;
//   }

//   @media (max-width: 1200px) {
//     width: 100%;
//   }
// `
// export const BaseInput = styled.input`
//   width: 100%;
//   height: 2.625rem;
//   padding: 0.75rem;
//   border-radius: 4px;
//   background: ${(props) => props.theme['base-input']};
//   border: 1px solid ${(props) => props.theme['base-button']};

//   &:active:focus {
//     box-shadow: none;
//     border-color: ${(props) => props.theme['yellow-400']};
//   }

//   &::placeholder {
//     color: ${(props) => props.theme['base-label']};
//   }
// `

// export const InputInfor = styled(BaseInput)`
//   width: 12.5rem;
// `

// export const InputInforRoad = styled(BaseInput)`
//   flex: 1;
// `

// export const InputInforComplemento = styled(BaseInput)`
//   width: 21.75rem;
// `

// export const InputInforEstado = styled(BaseInput)`
//   width: 3.75rem;
// `

// export const InputInforCidade = styled(BaseInput)`
//   width: 17.25rem;
// `

// export const FormInforContent = styled.div`
//   max-width: 35rem;
//   display: flex;
//   gap: 0.75rem;
// `
