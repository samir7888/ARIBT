import React from 'react'

const DivideSection = ({title}:{title:string}) => {
    
  return (
    <div  style={{ fontFamily: "Aeonik" }}  className='w-full hidden md:flex flex-col items-center bg bg-linear-to-r from-[#069188] to-[#04413D] space-y-14 py-16 text-white'>
        <h2 className='text-3xl tracking-wider'>{title}</h2>
        <div className='flex w-full container mx-auto justify-between items-center font-semibold text-2xl  tracking-wider'>
            <div>Circooles</div>
            <div>Command+R</div>
            <div>Hourglass</div>
            <div>Catalog</div>
        </div>
    </div>
  )
}

export default DivideSection