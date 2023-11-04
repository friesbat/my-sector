import link from 'next/link'
import Link from 'next/link'
import React from 'react'
import { AiFillBug }  from 'react-icons/ai'
const NavBar = () => {
    const links=[
        {label:'Dashboard', href:'/'},
        {label:'Users', href:'/users'},
        {label:'Sectors', href:'/sectors'},
        {label:'Letters', href:'/letters'},
        {label:'Contacts', href:'/contact'},
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-10 items-center'>
        <Link href="/"><AiFillBug /> </Link>
        <ul className='flex space-x-4'>
            {links.map(link=><Link key={link.href} className='text-zinc-500 hover:text-zinc-800 transition-color' href="/">{link.label} </Link>)};
           
           </ul>

    </nav>
  )
}

export default NavBar