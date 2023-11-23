interface DisplayStateProps {
  counter: number
  fCounter: any
}
export default function DisplayState({ counter, fCounter }: DisplayStateProps) {
  function op(valor: number) {
    let c = counter
    c += valor
    fCounter(c)
  }
  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-gray-200  p-5 text-3xl shadow-md">
      <span className="text-violet-600">{counter}</span>
      <div className="flex gap-5">
        <button
          className="flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-3xl font-bold text-zinc-100"
          onClick={() => op(10)}
        >
          +
        </button>
        <button
          className="flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-3xl font-bold text-zinc-100"
          onClick={() => op(-10)}
        >
          -
        </button>
      </div>
    </div>
  )
}
