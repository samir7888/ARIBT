import React from 'react'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogDetails from './components/BlogDetails'

const page = () => {
  return (
    <div className='min-h-screen mx-auto'>
        <BlogHeroSection title='Blog Details' />
        <BlogDetails />
    </div>
  )
}

export default page
