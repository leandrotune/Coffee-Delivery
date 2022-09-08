import { MapPinLine } from 'phosphor-react'
import {
  CardAddress,
  CompleteYourLostContainer,
  FormAddress,
  InputCep,
  InputCity,
  InputComplement,
  InputDistrict,
  InputResidentialNumber,
  InputRoad,
  InputUF,
} from './styles'

export function CompleteYourLost() {
  return (
    <CompleteYourLostContainer>
      <header>
        <h3>Complete seu perdido</h3>
      </header>

      <CardAddress>
        <div>
          <MapPinLine size={22} weight="regular" color="#C47F17" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        <FormAddress>
          <InputCep type="text" placeholder="CEP" required />

          <InputRoad type="text" placeholder="Rua" required />

          <div>
            <InputResidentialNumber
              type="number"
              placeholder="Número"
              required
            />

            {/* <label>Opcional</label> */}
            <InputComplement type="text" placeholder="Complemento" />
          </div>

          <div>
            <InputDistrict type="text" placeholder="Bairro" required />
            <InputCity type="text" placeholder="Cidade" required />
            <InputUF type="text" placeholder="UF" required />
          </div>
        </FormAddress>
      </CardAddress>
    </CompleteYourLostContainer>
  )
}
