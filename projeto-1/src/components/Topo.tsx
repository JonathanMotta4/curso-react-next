import Link from "next/link";
export default function Topo() {
  const n = "Amy Collier";
  let n2 = "Birdie Morales";

  return (
    <div className="flex items-center justify-between h-8 px-5 py-8 bg-zinc-900 text-zinc-50">
      <h1 className="text-3xl">LOGO</h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/produtos"}>Produtos</Link>
          </li>
          <li>
            <Link href={"/teste"}>Teste</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
