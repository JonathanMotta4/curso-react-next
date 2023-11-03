interface CardProps {
  produto: string
  valor: number
  desconto: number
  funcao: any
}
function Card(props: CardProps) {
  return (
    <div className='flex flex-col border border-violet-600 rounded-sm p-2 '>
      <span>{props.produto}</span>

      <span>R${props.valor}</span>
      <span>R${props.desconto}</span>
      <span>R${props.funcao(props.valor, props.desconto)}</span>
    </div>
  )
}

export default Card
