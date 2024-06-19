import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
     
      const[toggleMenu, setToggleMenu]= useState(false);

  return <header className="flex justify-between px-5 py-3 bg-primary">
              <a className="text-xl font-bold text-black sriracha-regular" href='/#About'>RK Portfolio</a>
             <nav className="hidden md:block">
              <ul className="flex text-white">
                   <li><a href='/'>Home</a></li>
                   <li><a href='/#About'>About</a></li>
                   <li><a href='/#Projects'>projects</a></li>
                   <li><a href='/#Resume'>Resume</a></li>
                   <li><a href='/#Contact'>Contact</a></li> 
              </ul>
              </nav>
               {toggleMenu && <nav className="block md:hidden ">
              <ul onClick={() =>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav" >
                   <li><a href='/'>Home</a></li>
                   <li><a href='/#About'>About</a></li>
                   <li><a href='/#Projects'>projects</a></li>
                   <li><a href='/#Contact'>Contact</a></li> 
              </ul>
              </nav>}
          <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-7'/></button>
  </header>

    
}
