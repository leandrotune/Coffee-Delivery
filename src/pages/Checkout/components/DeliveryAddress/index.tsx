import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {} from '../../styles'
import {
  FooterContainer,
  FooterContent,
  FormContainer,
  FormInforContent,
  InputInfor,
  InputInforCidade,
  InputInforComplemento,
  InputInforEstado,
  InputInforRoad,
  SectionContainer,
  SectionHeaderContainer,
} from './styles'

export function DeliveryAddress() {
  return (
    <main>
      <header>
        <h3>Complete seu perdido</h3>
      </header>
      <SectionContainer>
        <SectionHeaderContainer>
          <MapPinLine size={22} weight="regular" color="#C47F17" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </SectionHeaderContainer>
        <FormContainer>
          <InputInfor type="text" placeholder="CEP" />

          <InputInforRoad type="text" name="Rua" placeholder="Rua" />

          <FormInforContent>
            <InputInfor type="text" placeholder="número" />

            <InputInforComplemento type="text" placeholder="complemento" />
          </FormInforContent>
          <FormInforContent>
            <InputInfor type="text" placeholder="Bairro" />

            <InputInforCidade type="text" placeholder="Cidade" />

            <InputInforEstado type="text" placeholder="UF" />
          </FormInforContent>
        </FormContainer>
      </SectionContainer>

      <FooterContainer>
        <div>
          <CurrencyDollar size={22} weight="regular" color="#8047F8" />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <FooterContent>
          <button type="button">
            <CreditCard size={16} weight="regular" color="#8047F8" />
            <p>Cartão de crédito</p>
          </button>
          <button type="button">
            <Bank size={16} weight="regular" color="#8047F8" />
            <p>Cartão de débito</p>
          </button>
          <button type="button">
            <Money size={16} weight="regular" color="#8047F8" />
            <p>dinheiro</p>
          </button>
        </FooterContent>
      </FooterContainer>
    </main>
  )
}
