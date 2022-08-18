import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Cart, CurrentLocation, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav className="container">
        <NavLink to={'/'} title="Home">
          <img src={'/assets/logo.svg'} alt="Logo Coffee Delivery" />
        </NavLink>
        <div>
          <CurrentLocation>
            <MapPin color="#8047F8" size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </CurrentLocation>
          <NavLink to={'/checkout'} title="checkout">
            <Cart>
              <ShoppingCart color="#C47F17" size={22} weight="fill" />
            </Cart>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
