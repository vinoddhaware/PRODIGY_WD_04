import React from 'react'


const Cards = ({title, img}) => {
  return (
    <div className='w-[300px] h-[140px] relative overflow-hidden group bg-gradient-to-tl bg-[#08101d] from-[#240f36] flex justify-center items-center shadow-[2px_2px_10px_black] rounded-lg hover:shadow-[2px_2px_20px_white] transition-all duration-700 cursor-pointer'>
        
        <h1 className='text-xl font-bold bg-gradient-to-l bg-blue-800 from-white bg-clip-text 
        text-transparent'> {title} </h1>
        
        <div className='h-[100%] absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-700'>
            <img src={img} alt="MERN LOGO" />
        </div>
   
    </div>
  )
}

export default Cards
