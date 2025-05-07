import React from 'react'
import BlogHeroSection from '../../blogs/components/BlogHeroSection'
import WorkDivider from './components/WorkDivider'
import OverflowCard from './components/OverflowCard'
import BlogPage from '../../blogs/[id]/components/Blog'
import FooterSection from '../../../components/Footer/FooterSection'

const page = () => {
  return (
    <div className='min-h-screen mx-auto'>
            <BlogHeroSection title='Our Products' />
            <WorkDivider />
            <OverflowCard />
            <BlogPage />
            <FooterSection />
    </div>
  )
}

export default page