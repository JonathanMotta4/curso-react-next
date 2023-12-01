/* eslint-disable @typescript-eslint/no-explicit-any */
import Topo from '@/components/Topo'
import { useEffect, useState } from 'react'

let persons: any
export default function PageFiltragem() {
  const [vehicle, setVehicle] = useState('')
  const [linhas, setLinhas] = useState<any[]>([])
  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then((res) => res.json())
      .then((data) => (persons = data))
  }, [])
  function criarLinhas(veh: string) {
    setVehicle(veh)
    const l: any[] = []
    persons.forEach((p: any) => {
      if (p.vehicle === veh) {
        l.push(
          <div className="flex w-full flex-row " key={p.id}>
            <div className="w-full">{p.name}</div>
            <div className="w-full">{p.money}</div>
            <div className="w-full">{p.vehicle}</div>
          </div>,
        )
      }
    })
    setLinhas(l)
  }
  return (
    <div>
      <Topo />
      <div className="mx-auto my-5 w-3/4 gap-3 text-center">
        <label htmlFor="">Selecione o veiculo:</label>
        <select
          value={vehicle}
          onChange={(evt) => criarLinhas(evt.target.value)}
        >
          <option value="">Não possui</option>
          <option value="car">Carro</option>
          <option value="motocycle">Moto</option>
        </select>
        <div className="flex flex-col">
          <div className="flex w-full flex-row">
            <div className="w-full">Nome</div>
            <div className="w-full">Dinheiro</div>
            <div className="w-full">Veiculo</div>
          </div>
          {linhas}
        </div>
      </div>
    </div>
  )
}
