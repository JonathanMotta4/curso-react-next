import Topo from '@/components/Topo'
import Card from '@/components/Card'

export default function Home() {
  function cDesc(valor:number,desconto:number) {
    return valor-desconto
  }
  function cDesc2(valor:number,desconto:number){
    return valor-(desconto/2)

  }
  return (
    <main>
      <Topo />
      <div style={teste}>
        <div>Frank Tate</div>
      </div>
      <div className='flex justify-center gap-2'>
        <Card produto='Produto 1' valor={2870} desconto={256} funcao={cDesc} />
        <Card produto='Produto 2' valor={481} desconto={230} funcao={cDesc} />
        <Card produto='Produto 3' valor={914} desconto={337} funcao={cDesc2} />
        <Card produto='Produto 4' valor={2619} desconto={899} funcao={cDesc2} />
      </div>
    </main>
  )
}

const teste = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'dodgerblue',
  backgroundColor: '#181818',
  fontSize: '3rem',
}
