import Topo from '@/components/Topo'
import { useEffect, useState } from 'react'

export default function PaginaUseEffect() {
  const [aux, setAux] = useState(0)
  useEffect(() => {
    console.log('useEffect disparado')
  }, [aux])
  function add() {
    let a = aux
    a++
    setAux(a)
  }
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
      </div>
    </div>
  )
}
