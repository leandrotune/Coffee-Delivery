import { Cart } from './components/Cart'
import { DeliveryAddress } from './components/DeliveryAddress'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryAddress />
      <Cart />
    </CheckoutContainer>
  )
}
