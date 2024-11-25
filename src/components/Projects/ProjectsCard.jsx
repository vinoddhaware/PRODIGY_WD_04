import React from 'react'

const ProjectsCard = ({title, img}) => {
  return (
    <div className='flex justify-center relative overflow-hidden group items-center h-40 w-80 bg-[#151515] rounded-lg shadow-[4px_4px_20px_black] hover:shadow-[4px_4px_20px_white] hover:scale-110 transition-all duration-700 p-6'>
        <h1 className='text-center text-3xl font-bold bg-gradient-to-l bg-blue-800 from-white bg-clip-text 
        text-transparent'> {title} </h1>
        <div className='h-[100%] absolute translate-y-full group-hover:translate-y-3 transition-all duration-700'>
            <img src={img} alt="" className='h-[85%]' />
        </div>
    </div>
  )
}

export default ProjectsCard
