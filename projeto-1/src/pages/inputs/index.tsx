import Topo from '@/components/Topo'
import { useState } from 'react'
import Globals from '@/components/Globals'
export default function PaginaInputs() {
  const [nome, setNome] = useState<string>('')
  const [pais, setPais] = useState('')
  const paises = [
    '',
    'Western Sahara',
    'Palestinian Territories',
    'Chile',
    'Yemen',
    'Slovakia',
    'Congo - Brazzaville',
    'Equatorial Guinea',
    'Morocco',
    'Canary Islands',
    'Montenegro',
    'Sri Lanka',
    'Mauritania',
    'New Zealand',
    'Iran',
    'Argentina',
    'Albania',
    'South Sudan',
    'Anguilla',
    'Azerbaijan',
    'Pakistan',
    'Spain',
    'Namibia',
    'Nepal',
    'Philippines',
    'French Southern Territories',
    'Macau SAR China',
    'Venezuela',
    'Tajikistan',
    'Uzbekistan',
    'Suriname',
    'Liberia',
    'Botswana',
    'Vatican City',
  ]

  return (
    <>
      <Topo />
      <div>
        <div className="campoForm">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(evt) => setNome(evt.target.value)}
          />
        </div>
        <div className="campoForm">
          <label>Paises:</label>
          <select value={pais} onChange={(e) => setPais(e.target.value)}>
            {paises.map((p: string) => {
              return (
                <option key={p} value={p}>
                  {p}
                </option>
              )
            })}
          </select>
        </div>
        <span>{nome} </span>
        <span>{pais}</span>
      </div>
      <div className="flex flex-col">
        <span>{Globals.nome}</span>
        <span>{Globals.nome2}</span>
        <span>{Globals.ano}</span>
      </div>
    </>
  )
}
