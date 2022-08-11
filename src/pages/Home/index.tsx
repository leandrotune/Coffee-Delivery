import { CoffeeList } from './components/CoffeeList'
import { CoffeIntroduction } from './components/CoffeIntroduction'
import { HomeContainer } from './styled'

export function Home() {
  return (
    <HomeContainer>
      <CoffeIntroduction />
      <CoffeeList />
    </HomeContainer>
  )
}
