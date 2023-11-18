interface DisplayStateProps {
  counter: number
  fCounter: any
}
export default function DisplayState({
  counter,
  fCounter,
}: DisplayStateProps) {
  
  function op(valor: number) {
    let c = counter
    c += valor
    fCounter(c)
  }
  return (
    <div className='flex flex-col p-5 rounded-md bg-gray-200 text-3xl  gap-4 items-center shadow-md'>
      <span className='text-violet-600'>{counter}</span>
      <div className='flex gap-5'>
        <button
          className='py-2 px-4 text-zinc-100 bg-violet-600 font-bold text-3xl flex justify-center items-center rounded-lg'
          onClick={()=>op(10)}
        >
          +
        </button>
        <button
          className='py-2 px-4 text-zinc-100 bg-violet-600 font-bold text-3xl flex justify-center items-center rounded-lg'
          onClick={() => op(-10)}
        >
          -
        </button>
      </div>
    </div>
  )
}
