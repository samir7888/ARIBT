
import React from 'react'
import TeamsCard from '../../../components/TeamsCard'
import ButtonEffect1 from '../../../components/Buttons/ButtonEffect1'

const Teams = () => {
  return (
    <div className='flex flex-col p-8 w-3/4 justify-start mx-auto '>
        <h2 className='text-center text-2xl  font-aeonik'>Meet the strongest team</h2>
        <TeamsCard />
        <ButtonEffect1 word='Explore All'/>
    </div>
  )
}

export default Teams