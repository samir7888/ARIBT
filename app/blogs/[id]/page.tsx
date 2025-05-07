import React from 'react'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogDetails from './components/BlogDetails'
import FooterSection from '../../../components/Footer/FooterSection'

const page = () => {
  return (
    <div className='min-h-screen mx-auto'>
        <BlogHeroSection title='Blog Details' />
        <BlogDetails />
        <FooterSection />
    </div>
  )
}

export default page
