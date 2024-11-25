import React from 'react'
import ProjectsCard from './ProjectsCard'
import POKEMON from '/images/pokemon-thumb.svg'
import TODO from '/images/todo-thumb.svg'
import HMS from '/images/hms-thumb.svg'
import WHEATHER from '/images/wheather-thumb.svg'
import STOPWATCH from '/images/stopwatch-thumb.svg'
// import TICTACTOE from '/images/tictactoe-thumb.svg'
import TICTACTOE from '/images/tictactoe-thumb.jpg'

const Projects = () => {
  return (
    <div id='projects' className='h-full bg-[#1d1d20] flex flex-col justify-center items-center py-20 px-10 space-y-7 font-poppin'>
        <h1 className='text-4xl text-center font-bold bg-gradient-to-tl bg-red-600 from-white bg-clip-text text-transparent'> 2+ Years of Experience in Projects </h1>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 md:space-y-0  space-y-4 md:gap-10 md:py-10 justify-center items-center'>
          <ProjectsCard img = {HMS} title = "HOSTEL MANAGMENT SYSTEM" />
          <ProjectsCard img = {TODO} title = "TO DO APP" />
          <ProjectsCard img = {POKEMON} title = "POKEMON PICKER" />
          <ProjectsCard img = {TICTACTOE} title = "TIC TAC TOE" />
          <ProjectsCard img = {STOPWATCH} title = "DIGITAL STOPWATCH" />
          <ProjectsCard img = {WHEATHER} title = "WEATHER API" />
        </div>
    </div>
  )
}

export default Projects
