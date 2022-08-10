import * as React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeDelivery from '../../../../assets/coffe-delivery.svg'
import {
  IntroCoffe,
  CoffeQuality,
  IntroContainer,
  IntroContent,
  QualitysContainer,
  ShoppingCartContainer,
  PackegeContainer,
  CoffeContainer,
  TimerContainer,
} from './styles'

export function CoffeIntroduction() {
  return (
    <IntroCoffe>
      <IntroContainer>
        <IntroContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <CoffeQuality>
            <QualitysContainer>
              <ShoppingCartContainer>
                <ShoppingCart size={13} weight="fill" color="#FAFAFA" />
              </ShoppingCartContainer>

              <span>Compra simples e segura</span>
            </QualitysContainer>

            <QualitysContainer>
              <PackegeContainer>
                <Package size={13} weight="fill" color="#FAFAFA" />
              </PackegeContainer>

              <span>Embalagem mantém o café intacto</span>
            </QualitysContainer>

            <QualitysContainer>
              <TimerContainer>
                <Timer size={13} weight="fill" color="#FAFAFA" />
              </TimerContainer>

              <span>Entrega rápida e rastreada</span>
            </QualitysContainer>

            <QualitysContainer>
              <CoffeContainer>
                <Coffee weight="fill" size={13} color="#FAFAFA" />
              </CoffeContainer>

              <span>O café chega fresquinho até você</span>
            </QualitysContainer>
          </CoffeQuality>
        </IntroContent>
        <div>
          <img src={coffeDelivery} alt="copo de café do coffe delivery" />
        </div>
      </IntroContainer>
    </IntroCoffe>
  )
}
