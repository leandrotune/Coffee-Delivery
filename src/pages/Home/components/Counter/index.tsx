import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>

      <input type="number" value={1} min="0" />

      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
