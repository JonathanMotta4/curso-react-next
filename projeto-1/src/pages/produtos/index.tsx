/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
import Card from '@/components/Card'
import Topo from '@/components/Topo'
import { useRouter } from 'next/router'
export default function Produtos() {
  const router = useRouter()
  // const nome = router.query.nome
  // const sNome = router.query.sNome
  const { nome, sNome } = router.query
  console.log(nome)
  console.log(sNome)

  function cDesc(valor: number, desconto: number) {
    return valor - desconto
  }

  const produtos = [
    {
      id: 1,
      produto: 'Produto 1',
      valor: 61.75,
      desconto: 0,
      disponivel: true,
    },
    {
      id: 2,
      produto: 'Produto 2',
      valor: 186.87,
      desconto: 60,
      disponivel: true,
    },
    {
      id: 3,
      produto: 'Produto 3',
      valor: 133.74,
      desconto: 0,
      disponivel: false,
    },
    {
      id: 4,
      produto: 'Produto 4',
      valor: 145.4,
      desconto: 30,
      disponivel: true,
    },
    {
      id: 5,
      produto: 'Produto 5',
      valor: 198.24,
      desconto: 0,
      disponivel: false,
    },
    {
      id: 6,
      produto: 'Produto 6',
      valor: 147.8,
      desconto: 0,
      disponivel: true,
    },
  ]
  return (
    <main>
      <Topo />

      <div className="flex justify-center gap-2">
        {produtos.map((p: any) => {
          if (p.disponivel) {
            return (
              <Card
                key={p.id}
                produto={p.produto}
                valor={p.valor}
                desconto={p.desconto}
                funcao={cDesc}
              >
                <div>Teste1</div>
                <div>Teste2</div>
              </Card>
            )
          }
        })}
      </div>
    </main>
  )
}
