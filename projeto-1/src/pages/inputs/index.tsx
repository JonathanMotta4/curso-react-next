import Topo from '@/components/Topo'
import { useState } from 'react'

export default function PaginaInputs() {
  const [nome, setNome] = useState<string>('')
  const [sobrenome, setSobrenome] = useState<string>('')
  return (
    <>
      <Topo />
      <div>
        <div className='campoForm'>
          <label>Nome:</label>
          <input
            type='text'
            value={nome}
            onChange={(evt) => setNome(evt.target.value)}
          />
        </div>
        <div className='campoForm'>
          <label>Sobrenome:</label>
          <input
            type='text'
            value={sobrenome}
            onChange={(evt) =>
              setSobrenome(evt.target.value)
            }
          />
        </div>
        <span>{nome} </span>
        <span>{sobrenome}</span>
      </div>
    </>
  )
}
