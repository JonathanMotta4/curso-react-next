interface CardProps {
  produto: string
  valor: number
  desconto: number
  funcao: any
  children?: any
}
function Card(props: CardProps) {
  return (
    <div
      className={`flex flex-col p-2 border-2 rounded-md   justify-center ${
        props.desconto > 0
          ? 'border-lime-400'
          : 'border-violet-600'
      } `}
    >
      <span>{props.produto}</span>
      <span>Preço:R${props.valor}</span>
      {props.desconto > 0 && (
        <span>Desconto: R${props.desconto}</span>
      )}
      <span>
        Preço de venda: R$
        {props.funcao(props.valor, props.desconto)}
      </span>
      <div>{props.children}</div>
    </div>
  )
}

export default Card
