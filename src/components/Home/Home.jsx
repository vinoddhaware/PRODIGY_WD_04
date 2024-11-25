import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='md:flex h-screen bg-gradient-to-t bg-[#0d1b28] from-[#19151a] font-poppin'>
      <div className='md:w-1/2  md:h-full h-1/2 text-white flex flex-col justify-center items-center pt-28 pb-8'>
        <div className='md:space-y-6 space-y-4 px-20'>
        <p className='md:text-2xl text-sm font-semibold'> I'm </p>
        <p className='md:text-5xl text-3xl font-semibold bg-gradient-to-l bg-blue-800 from-white bg-clip-text text-transparent'> VINOD DHAWARE </p>
        <div className='md:text-2xl text-sm font-semibold'> 
            <ReactTypingEffect 
                  text={['WEB DEVELOPER', 'REACT DEVELOPER','FULL STACK DEVELOPER', 'SOFTWARE DEVELOPER', 'EDITOR']} 
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={1000}
                  typingDelay={500}
                  />
        </div>
        <Link smooth={true} duration={1000} to="about" className="relative inline-flex  items-center justify-center px-4 py-3 overflow-hidden text-white rounded-md shadow-2xl group cursor-pointer">
            <span className="absolute inset-0 w-full h-full transition duration-1000 ease-out  opacity-0 bg-gradient-to-l from-blue-500 to-blue-800 group-hover:opacity-100"></span>
            {/* <!-- Top glass gradient --> */}
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            {/* <!-- Bottom gradient --> */}
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            {/* <!-- Left gradient --> */}
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            {/* <!-- Right gradient --> */}
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span className="relative flex justify-center items-center"> About more <span className='pl-2 text-xl group-hover:translate-x-2 duration-1000'> <CgArrowLongRight /> </span> </span>
        </Link>
        </div>
      </div>
    
      <div className='md:w-1/2 md:h-full h-1/2 flex flex-col justify-center items-center md:flex md:justify-center md:items-center'>
      <video autoPlay loop muted  className='md:h-1/2 h-72 md:shadow-[0_0px_60px_#1a3581b3]'>
          <source src="https://static.rfstat.com/media/695/look/205d62fc-5eba-4905-b400-703a16da44e5.mp4" type="video/mp4" />
        </video>
      </div>
      
    </div>
  )
}

export default Home
