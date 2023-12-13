/* eslint-disable @typescript-eslint/no-explicit-any */
interface CampFormProps {
  label: string
  state: number
  funcState: any
}
export default function CampForm({ funcState, label, state }: CampFormProps) {
  return (
    <div className="flex mx-2">
      <label className="w-16">{label}</label>
      <input
        className="border p-1 border-zinc-200 rounded-md w-full"
        type="number"
        value={state}
        onChange={(evt) => funcState(evt.target.value)}
      />
    </div>
  )
}
