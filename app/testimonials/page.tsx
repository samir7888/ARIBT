import React from 'react'
import BlogHeroSection from '../blogs/components/BlogHeroSection'
import { Testimonials } from '@/components/sections/testimonials-section'
import FooterSection from '../../components/Footer/FooterSection'

const page = () => {
  return (
    <div className='min-h-screen mx-auto'>
            <BlogHeroSection title='Testimonials'/>
            <div className='relative overflow-hidden py-10 bg-gray-50 space-y-10'>
                <h2 className='text-center font-aeonik text-2xl'>Hear what our client says ?</h2>
           <Testimonials />
            </div>
           <FooterSection />
    </div>
  )
}

export default page