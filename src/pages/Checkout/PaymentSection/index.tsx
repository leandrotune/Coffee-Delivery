import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethods, PaymentSectionContainer } from './styles'

export function PaymentSection() {
  return (
    <PaymentSectionContainer>
      <div>
        <CurrencyDollar size={22} weight="regular" color="#8047F8" />
        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <PaymentMethods>
        <button type="button">
          <CreditCard size={16} weight="regular" />
          <p>Cartão de crédito</p>
        </button>

        <button type="button">
          <Bank size={16} weight="regular" />
          <p>Cartão de débito</p>
        </button>

        <button type="button">
          <Money size={16} weight="regular" />
          <p>dinheiro</p>
        </button>
      </PaymentMethods>
    </PaymentSectionContainer>
  )
}
