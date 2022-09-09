import * as React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
// import coffeDelivery from '../../../../../public/assets/coffe-delivery.svg'

import {
  IntroCoffe,
  CoffeQuality,
  IntroContainer,
  IntroContent,
  QualitysContainer,
  IconContainer,
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
              <IconContainer variant="Yellow Dark">
                <ShoppingCart size={13} weight="fill" />
              </IconContainer>

              <span>Compra simples e segura</span>
            </QualitysContainer>

            <QualitysContainer>
              <IconContainer variant="Gray">
                <Package size={13} weight="fill" />
              </IconContainer>

              <span>Embalagem mantém o café intacto</span>
            </QualitysContainer>

            <QualitysContainer>
              <IconContainer variant="Yellow">
                <Timer size={13} weight="fill" />
              </IconContainer>

              <span>Entrega rápida e rastreada</span>
            </QualitysContainer>

            <QualitysContainer>
              <IconContainer variant="Purple">
                <Coffee weight="fill" size={13} />
              </IconContainer>

              <span>O café chega fresquinho até você</span>
            </QualitysContainer>
          </CoffeQuality>
        </IntroContent>
        <div>
          <img
            src={'/assets/coffe-delivery.svg'}
            alt="copo de café do coffe delivery"
          />
        </div>
      </IntroContainer>
    </IntroCoffe>
  )
}
