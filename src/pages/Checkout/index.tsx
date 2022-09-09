import { Cart } from './components/Cart'
import { CheckoutContainer } from './styles'
import { PaymentSection } from './PaymentSection/index'
import { CompleteYourLost } from './components/CompleteYourLost'

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <CompleteYourLost />
        <PaymentSection />
      </main>
      <Cart />
    </CheckoutContainer>
  )
}
