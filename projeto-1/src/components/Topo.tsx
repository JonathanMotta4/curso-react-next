export default function Topo() {
  const n = "Amy Collier";
  let n2 = "Birdie Morales";

  return (
    <div className="flex  justify-between items-center bg-zinc-300 h-[100px]">
      <div>Topo</div>
      <div className="flex flex-col justify-center items-center mx-10">
        <div className="text-3xl font-semibold">{n}</div>
        <div className="text-sm font-semibold">{n2}</div>
      </div>
      <div className="subtitle">Cody Rodgers</div>
    </div>
  );
}
