import CampForm from '@/components/CampForm'
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
    <div className="flex flex-col border border-zinc-900w-80 gap-5">
      <h1 className="w-full text-center bg-zinc-400 font-bold text-lg">
        Calculo IMC
      </h1>
      <CampForm label="peso" state={peso} funcState={setPeso} />
      <CampForm label="altura" state={altura} funcState={setAltura} />
      <button
        className="bg-emerald-500 text-zinc-50 p-2 rounded-md hover:bg-emerald-600 cursor-pointer"
        onClick={calcular}
      >
        Calcular
      </button>
      <p className="bg-zinc-100 p-1">Resultado:{imc}</p>
      <Table />
    </div>
  )
}
