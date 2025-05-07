import React from 'react'
import BlogHeroSection from '../blogs/components/BlogHeroSection'
import Teams from './components/Teams'
import FooterSection from '../../components/Footer/FooterSection'

const page = () => {
  return (
    <div className='min-h-screen mx-auto'>
        <BlogHeroSection title='Our Teams'/>
        <Teams />
        <FooterSection />
    </div>
  )
}

export default page