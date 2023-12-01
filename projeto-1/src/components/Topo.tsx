import Link from 'next/link'
export default function Topo() {
  return (
    <div className="flex h-8 items-center justify-between bg-zinc-900 px-5 py-8 text-zinc-50">
      <Link href={'/'}>
        <h1 className="text-3xl">LOGO</h1>
      </Link>
      <nav className="flex gap-5">
        <Link href={'/'}>Home</Link>

        <Link
          href={{
            pathname: '/produtos',
            query: {
              nome: 'Jonathan',
              sNome: 'Motta',
            },
          }}
        >
          Produtos
        </Link>

        <Link href={'/state'}>State</Link>

        <Link href={'/inputs'}>Inputs</Link>
        <Link href={'/useeffect'}>Use Effect</Link>
        <Link href={'/filtragem'}>Filtragem</Link>
      </nav>
    </div>
  )
}
