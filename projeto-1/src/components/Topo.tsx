import Link from 'next/link'
export default function Topo() {
  const n = 'Amy Collier'
  let n2 = 'Birdie Morales'

  return (
    <div className='flex items-center justify-between h-8 px-5 py-8 bg-zinc-900 text-zinc-50'>
      <Link href={'/'}>
        <h1 className='text-3xl'>LOGO</h1>
      </Link>
      <nav className='flex gap-5'>
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
      </nav>
    </div>
  )
}
