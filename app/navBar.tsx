'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug }  from 'react-icons/ai'
import classnames from 'classnames'
const NavBar = () => {
    const currentPath= usePathname();
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
            {links.map(link=>
            <Link
             key={link.href} 
             className= {classnames({
                'text-zinc-1000':link.href===currentPath,
                'text-zinc-500':link.href!==currentPath,
                'hover:text-zinc-800 transion-colots':true  
             })}
             href={link.href}>{link.label} </Link>)}
           
           </ul>

    </nav>
  )
}

export default NavBar