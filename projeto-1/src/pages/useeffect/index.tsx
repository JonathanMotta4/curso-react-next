import Globals from '@/components/Globals'
import Topo from '@/components/Topo'
import { useEffect, useState } from 'react'

export default function PaginaUseEffect() {
  const [aux, setAux] = useState(0)

  function add() {
    let a = aux
    a++
    setAux(a)
  }
  useEffect(() => {
    Globals.nome = 'Edna Curry'
    Globals.nome2 = 'Ellen Collier'
    Globals.ano = 2075
  }, [])
  return (
    <div>
      <Topo />
      <div className="mx-auto mt-5 flex w-10 flex-col items-center">
        <p className="text-xl opacity-60">{aux}</p>

        <button
          className="rounded bg-emerald-500 px-4 py-2 font-semibold text-white"
          onClick={add}
        >
          Adicionar +1
        </button>
        <div className="flex flex-col">
          <p>{Globals.nome}</p>
          <p>{Globals.nome2}</p>
          <p>{Globals.ano}</p>
        </div>
      </div>
    </div>
  )
}
