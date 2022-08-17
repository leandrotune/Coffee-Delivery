import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ContainerIcon,
  HeaderContainer,
  LostInformation,
  MainContainer,
} from './styles'

export function CoffeeDeliverySucess() {
  return (
    <>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderContainer>

      <MainContainer>
        <section>
          <LostInformation>
            <ContainerIcon variant="purple">
              <MapPin size={16} weight="fill" color="#FAFAFA" />
            </ContainerIcon>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </LostInformation>

          <LostInformation>
            <ContainerIcon variant="yellow">
              <Timer size={16} weight="fill" color="#FAFAFA" />
            </ContainerIcon>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </LostInformation>

          <LostInformation>
            <ContainerIcon variant="yellow-dark">
              <CurrencyDollar size={16} width="regular" color="#FAFAFA" />
            </ContainerIcon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </LostInformation>
        </section>

        <img src="/assets/Illustration.svg" alt="imagem da entrega a caminho" />
      </MainContainer>
    </>
  )
}
