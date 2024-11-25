import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShoeMenu] = useState(true)
  
  return (
    <nav className='z-50 lg:flex justify-between items-center p-[40px] w-[100%] lg:h-[80px] font-poppin font-bold fixed top-0'>
      <h1 className='text-xl lg:text-3xl bg-gradient-to-l bg-blue-800 from-white bg-clip-text text-transparent'> VINOD DHAWARE </h1>
      <button onClick={() => setShoeMenu(!showMenu)} className='absolute right-14 top-9 text-4xl lg:hidden text-blue-800'> { showMenu ? <IoMenu /> : <IoClose />} </button>
      <ul className={`${showMenu ? 'right-[-1000px]  lg:right-12':''} duration-700 absolute right-6 lg:right-14 lg:top-0 top-28 lg:flex lg:justify-center lg:items-center lg:space-x-4 lg:text-lg text-white `}>
        <Link spy={true} activeClass='active' smooth={true} duration={1000} to='home'> <li className='hover:rounded-full rounded-lg lg:hover:rounded-lg text-center my-4 transition-all duration-500 hover:scale-105 ease-in-out lg:duration-700 hover:text-white/80 cursor-pointer' >Home</li> </Link>
        <Link spy={true} activeClass='active' smooth={true} duration={1000} to='about'> <li className='hover:rounded-full rounded-lg lg:hover:rounded-lg text-center my-4 transition-all duration-500 hover:scale-105 ease-in-out lg:duration-700 hover:text-white/80 cursor-pointer' >About</li> </Link>
        <Link spy={true} activeClass='active' smooth={true} duration={1000} to='projects'> <li className='hover:rounded-full rounded-lg lg:hover:rounded-lg text-center my-4 transition-all duration-500 hover:scale-105 ease-in-out lg:duration-700 hover:text-white/80 cursor-pointer' >Projects</li> </Link>
        <Link spy={true} activeClass='active' smooth={true} duration={1000} to='contact'> <li className='hover:rounded-full rounded-lg lg:hover:rounded-lg text-center my-4 transition-all duration-500 hover:scale-105 ease-in-out lg:duration-700 hover:text-white/80 cursor-pointer' >Contact</li> </Link>
      </ul>
    </nav>
  )
}

export default Navbar
