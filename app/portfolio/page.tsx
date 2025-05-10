import React from 'react'
import BlogHeroSection from '../blogs/components/BlogHeroSection'
import WorksMain from './components/WorksMain'
import FooterSection from '../../components/Footer/FooterSection'

const page = () => {
  return (
    <div className='min-h-screen'>
        <BlogHeroSection title='Our Works' />
        <WorksMain />
        <FooterSection />
    </div>
  )
}

export default page