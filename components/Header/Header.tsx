import { FacebookIcon, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-full min-h-9 bg bg-linear-to-r from-[#04413D] to-[#069188] py-2 px-9 flex items-center justify-between z-1000'>
<div style={{fontFamily :"Aeonik"}} className='text-white flex   text-sm gap-2'>
    <p>Abhyam Robotics</p>
    <p>Butwal 10, Tinkune</p>
</div>
<div className='flex items-center gap-2'>
    <FacebookIcon className='text-white w-4' />
    <Linkedin className='text-white w-4' />
    <Mail className='text-white w-4' />
</div>
    </div>
  )
}

export default Header