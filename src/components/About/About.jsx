import React from 'react'
import Cards from '../Cards/Cards'
import MERN from '/images/mern-thumb.avif'
import PYTHON from '/images/python-thumb.jpg'
import WEB from '/images/webdeveloper-thumb.png'

const About = () => {
  return (
    <div id='about' className='h-full bg-[#1d1d20] md:flex font-poppin'>
      <div className='md:w-1/2 md:h-screen py-20 flex justify-center items-center gap-8'>
        <div className='mt-16 flex flex-col justify-center items-center'>
          <p className='circle h-12 shadow-[2px_2px_10px_white] w-12 bg-gradient-to-l bg-blue-800 from-white rounded-full'></p>
          <p className='line h-32 w-[2px] bg-gradient-to-l bg-blue-800 from-white'></p>
          <p className='circle h-12 shadow-[2px_2px_10px_white] w-12 bg-gradient-to-l bg-blue-800 from-white rounded-full'></p>
          <p className='line h-28 w-[2px] bg-gradient-to-l bg-blue-800 from-white'></p>
          <p className='circle h-12 shadow-[2px_2px_10px_white] w-12 bg-gradient-to-l bg-blue-800 from-white rounded-full'></p>
          <p className='line h-20 w-[2px] bg-gradient-to-l bg-blue-800 from-white'></p>
        </div>
        <div className='space-y-5'>
            <h1 className='mt-16 text-3xl text-wrap font-bold bg-gradient-to-tl bg-red-600 from-white bg-clip-text text-transparent'> Personal Info </h1>
            <ul className='font-semibold text-white'>
              <li> <span className='text-blue-300'> Name: </span> Vinod Dhaware </li>
              <li> <span className='text-blue-300'> Age: </span>  25 Year </li>
              <li> <span className='text-blue-300'> Gender: </span> Male </li>
              <li> <span className='text-blue-300'> Language: </span> Hindi{', '}Marathi{', '} English </li>
            </ul>
          <div>
            <h1 className='mt-7 text-3xl text-wrap font-bold bg-gradient-to-tl bg-red-600 from-white bg-clip-text text-transparent'> Education Detail </h1>
            <ul className='font-semibold text-white'>
              <li> <span className='text-blue-300'> DEGREE:</span> Bachelor of Engineering </li>
              <li> <span className='text-blue-300'> BRANCH: </span> Information Technology </li>
              <li> <span className='text-blue-300'> CGPA:</span> 8.8 </li>
            </ul>
          </div>
          <div>
            <h1 className='mt-8 text-3xl text-wrap font-bold bg-gradient-to-tl bg-red-600 from-white bg-clip-text text-transparent'> Skills </h1>
            <ul className='font-semibold text-white w-60'>
            <li> C (Programming Language) | C++ | Core Java | Advance Java | PHP | Node.js | 
                    React.js | Redux | Bootstrap | Tailwind CSS | MySQL | Linux  
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 md:h-screen py-20 md:pt-20 space-y-4 flex flex-col justify-center items-center'>
          <Cards img = {MERN} title = "MERN STACK DEVELOPER" />
          <Cards img = {PYTHON} title = "PYTHON DEVELOPER" />
          <Cards img = {WEB} title = "WEB DEVELOPER" />
      </div>
      
    </div>
  )
}

export default About
