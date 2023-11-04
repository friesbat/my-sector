import Image from 'next/image'
import Link from 'next/link'
import Add_sector from './components/add_sector';

export default function Home() {
  return (
    <main><h1>hello world</h1>
    <Link href='/users'>users</Link>
    <Add_sector />
    </main>
  )
}
