import { Minus, Plus, Trash } from 'phosphor-react'
import {
  Actions,
  ButtonRemover,
  CoffeeAdd,
  FooterContainer,
  HeaderCart,
  SectionContainer,
} from './styles'

export function Cart() {
  return (
    <aside>
      <HeaderCart>
        <h3>Cafés selecionados</h3>
      </HeaderCart>
      <SectionContainer>
        <CoffeeAdd>
          <img src="/assets/expresso-tradicional.svg" alt="" />
          <div>
            <p>Expresso Americano</p>
            <Actions>
              <div>
                <button>
                  <Minus size={14} weight="bold" color="#8047F8" />
                </button>
                <input type="text" />
                <button>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </button>
              </div>
              <ButtonRemover>
                <Trash size={16} weight="regular" color="#8047F8" />
                remover
              </ButtonRemover>
            </Actions>
          </div>
          <strong>R$ 9,90</strong>
        </CoffeeAdd>

        <CoffeeAdd>
          <img src="/assets/expresso-tradicional.svg" alt="" />
          <div>
            <p>Expresso Americano</p>
            <Actions>
              <div>
                <button>
                  <Minus size={14} weight="bold" color="#8047F8" />
                </button>
                <input type="text" />
                <button>
                  <Plus size={14} weight="bold" color="#8047F8" />
                </button>
              </div>
              <ButtonRemover>
                <Trash size={16} weight="regular" color="#8047F8" />
                remover
              </ButtonRemover>
            </Actions>
          </div>
          <strong>R$ 9,90</strong>
        </CoffeeAdd>

        <FooterContainer>
          <div>
            <p>Total de itens</p>
            <span>R$29,90</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
          <button type="submit">confirmar pedido</button>
        </FooterContainer>
      </SectionContainer>
    </aside>
  )
}
