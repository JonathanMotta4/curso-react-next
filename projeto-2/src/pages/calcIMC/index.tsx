import { useState } from 'react'

export default function CalcIMC() {
  const [peso, setPeso] = useState<string>('')
  const [altura, setAltura] = useState<string>('')
  return <div>Calculo IMC</div>
}
