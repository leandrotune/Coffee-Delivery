import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeListContainer,
  ContainerAddCard,
  TypeContainer,
} from './styles'
import { useState, useEffect } from 'react'

interface CoffeeTypeProps {
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
  const [coffees, setCoffees] = useState<CoffeeTypeProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/coffeesTypes')
      .then((response) => response.json())
      .then((data) => setCoffees(data))
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
                    <span>R$</span> 9,90
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
