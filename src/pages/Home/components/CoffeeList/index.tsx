import { api } from '../../../../services/api'
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeListContainer,
  BuyCoffee,
  TypeContainer,
} from './styles'
import { useState, useEffect } from 'react'
import { Counter } from '../Counter'

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
  price: string
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
            const { id, image, type, title, description, price } = coffee

            return (
              <CoffeeCard key={id}>
                <img src={image.source} alt={image.alt} />
                <TypeContainer>
                  <p>{type.tag1}</p>
                </TypeContainer>
                <strong>{title}</strong>
                <span>{description}</span>
                <BuyCoffee>
                  <label>{price}</label>
                  <Counter />
                  <button type="submit">
                    <ShoppingCart size={22} weight="fill" />
                  </button>
                </BuyCoffee>
              </CoffeeCard>
            )
          })}
        </ul>
      </form>
    </CoffeeListContainer>
  )
}
