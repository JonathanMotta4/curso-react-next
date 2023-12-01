import Topo from '@/components/Topo'
import { useState } from 'react'

export default function PageFiltragem() {
  const persons = [
    { id: 1, name: 'Martin Perez', money: 169.5, vehicle: 'car' },
    { id: 2, name: 'Terry Barrett', money: 852.23, vehicle: 'car' },
    { id: 3, name: 'Rosetta Horton', money: 438.49, vehicle: 'car' },
    { id: 4, name: 'Sean Blair', money: 575.48, vehicle: 'car' },
    { id: 5, name: 'Craig Bowman', money: 9982.9, vehicle: 'car' },
    { id: 6, name: 'Roy vehicleroll', money: 206.48, vehicle: 'motocycle' },
    { id: 7, name: 'Jordan Armstrong', money: 741.44, vehicle: 'motocycle' },
    { id: 8, name: 'Bernice Haynes', money: 926.52, vehicle: 'snake' },
    { id: 9, name: 'Ray Jefferson', money: 3636.82, vehicle: 'motocycle' },
    { id: 10, name: 'Julia Duncan', money: 644.83, vehicle: '' },
    { id: 11, name: 'Ethan Smith', money: 519.25, vehicle: 'car' },
    { id: 12, name: 'Russell Evans', money: 763.1, vehicle: '' },
  ]
  const [vehicle, setVehicle] = useState('')
  const [linhas, setLinhas] = useState<any[]>([])

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
