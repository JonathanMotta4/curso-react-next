import Form from '@/components/Form'
import Table from '@/components/Table'
import { useState } from 'react'

export default function CalcIMC() {
  const [peso, setPeso] = useState<number>(0)
  const [altura, setAltura] = useState<number>(0)
  const [imc, setIMC] = useState<number>(0)
  const calcular = () => {
    const res = peso / (altura * altura)
    setIMC(res)
  }
  return (
    <div>
      <h1>Calculo IMC</h1>
      <Form label="peso" state={peso} funcState={setPeso} />
      <Form label="altura" state={altura} funcState={setAltura} />
      <button onClick={calcular}>Calcular</button>
      <p>Resultado:{imc}</p>
      <Table />
    </div>
  )
}
