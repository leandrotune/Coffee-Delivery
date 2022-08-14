import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
// import logo from '../../../public/assets/logo.svg'
import { Cart, CurrentLocation, HeaderContainer } from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <img src={'/assets/logo.svg'} alt="logo Coffee Delivery" />
      <nav>
        <CurrentLocation>
          <MapPin color="#8047F8" size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </CurrentLocation>
        <NavLink to={'/checkout'} title="checkout">
          <Cart>
            <ShoppingCart color="#C47F17" size={22} weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
