import { useState } from 'react'
import DisplayState from '@/components/DisplayState'
export default function PaginaState() {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div className='h-screen w-screen bg-zinc-900 text-zinc-100 flex justify-center items-center gap-5'>
      <DisplayState
        counter={counter}
        fCounter={setCounter}
      ></DisplayState>
    </div>
  )
}
