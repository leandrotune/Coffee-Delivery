import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'

export function Checkout() {
  return (
    <>
      <section>
        <h1>Complete seu perdido</h1>
        <main>
          <header>
            <MapPin />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <form>
            <div>
              <input type="text"></input>
            </div>
            <div>
              <input type="text" placeholder="nome completo"></input>
            </div>
            <div>
              <input type="text" placeholder="número"></input>
            </div>
            <div>
              <input type="text" placeholder="complemento"></input>
            </div>
            <div>
              <input type="text" placeholder="bairro"></input>
            </div>
            <div>
              <input type="text" placeholder="cidade"></input>
            </div>
            <div>
              <input type="text" placeholder="sp"></input>
            </div>
          </form>
        </main>
        <footer>
          <CurrencyDollar />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <div>
            <div>
              <CreditCard />
              <p>Cartão de crédito</p>
            </div>
            <div>
              <Bank />
              <p>Cartão de débito</p>
            </div>
            <div>
              <Money />
              <p>dinheiro</p>
            </div>
          </div>
        </footer>
      </section>

      <aside>
        <div>
          <img
            src="/assets/expresso-tradicional.svg"
            alt="Expresso Tradicional"
          />
          <p>Expresso Tradicional</p>
          <button>
            <Trash />
            remover
          </button>
          <strong>R$ 9,90</strong>
        </div>
        <div>
          <img src="/assets/expresso-americano.svg" alt="Expresso Americano" />
          <p>Expresso Tradicional</p>
          <button>
            <Trash />
            remover
          </button>
          <strong>R$ 9,90</strong>
        </div>
        <div>
          <div>
            <p>total de itens</p>
            <span>R$ 29,70</span>
          </div>
          <div>
            <p>Entrega R$ 3,50</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <span>R$ 33,20</span>
          </div>
        </div>
        <button type="submit">confirmar perdido</button>
      </aside>
    </>
  )
}
