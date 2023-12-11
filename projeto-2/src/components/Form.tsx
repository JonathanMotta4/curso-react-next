interface FormProps {
  label: string
  state: any
  funcState: any
}
export default function Form({ funcState, label, state }: FormProps) {
  return (
    <form action="" className="">
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        value={state}
        onChange={(evt) => funcState(evt.target.value)}
      />
    </form>
  )
}
