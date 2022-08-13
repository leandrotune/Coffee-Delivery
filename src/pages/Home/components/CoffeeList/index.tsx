import { api } from '../../../../services/api'
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeListContainer,
  ContainerAddCard,
  TypeContainer,
} from './styles'
import { useState, useEffect } from 'react'

interface Coffees {
  id: number
  image: {
    source: string
    alt: string
  }
  type: {
    tag1?: string
    tag2?: string
    tag3?: string
  }
  title: string
  description: string
  prince: string
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffees[]>([])

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get('/coffees')
      setCoffees(response.data)
    }

    loadCoffees()
  }, [])

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <form>
        <ul>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard key={coffee.id}>
                <img src={coffee.image.source} alt={coffee.image.alt} />
                <TypeContainer>
                  <p>{coffee.type.tag1}</p>
                  <p>{coffee.type.tag2}</p>
                  <p>{coffee.type.tag3}</p>
                </TypeContainer>
                <strong>{coffee.title}</strong>
                <span>{coffee.description}</span>
                <ContainerAddCard>
                  <label>
                    <span>R$</span> {coffee.prince}
                  </label>
                  <input type="number" name="amount" />
                  <button type="submit">
                    <ShoppingCart size={22} weight="fill" color="#F3F2F2" />
                  </button>
                </ContainerAddCard>
              </CoffeeCard>
            )
          })}
        </ul>
      </form>
    </CoffeeListContainer>
  )
}
