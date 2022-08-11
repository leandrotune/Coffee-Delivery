import expressoTradicional from '../../../../assets/expresso-tradicional.svg'
import expressoAmericano from '../../../../assets/expresso-americano.svg'
import expressoCremoso from '../../../../assets/expresso-cremoso.svg'
import expressoGelado from '../../../../assets/expresso-gelado.svg'
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeListContainer,
  ContainerAddCard,
  TypeContainer,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <form>
        <ul>
          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoAmericano} alt="Coffee Expresso Americano" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Americano</strong>
            <span>Expresso diluído, menos intenso que o tradicional</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoCremoso} alt="Coffee Expresso Cremoso" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Cremoso</strong>
            <span>Café expresso tradicional com espuma cremosa</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoGelado} alt="Coffee Expresso Gelado" />
            <TypeContainer>
              <p>Tradicional</p>
              <p>gelado</p>
            </TypeContainer>
            <strong>Expresso Gelado</strong>
            <span>Bebida preparada com café expresso e cubos de gelo</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>

          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
          <CoffeeCard>
            <img src={expressoTradicional} alt="Coffee Expresso Tradicional" />
            <TypeContainer>
              <p>Tradicional</p>
            </TypeContainer>
            <strong>Expresso Tradicional</strong>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <ContainerAddCard>
              <label>
                <span>R$</span> 9,90
              </label>
              <input type="number" name="amount" />
              <button type="submit">
                <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
              </button>
            </ContainerAddCard>
          </CoffeeCard>
        </ul>
      </form>
    </CoffeeListContainer>
  )
}
