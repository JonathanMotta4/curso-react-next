import { useState } from 'react'
import DisplayState from '@/components/DisplayState'
export default function PaginaState() {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5 bg-zinc-900 text-zinc-100">
      <DisplayState counter={counter} fCounter={setCounter}></DisplayState>
    </div>
  )
}
