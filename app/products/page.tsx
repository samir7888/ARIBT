import React from 'react'
import BlogHeroSection from '../blogs/components/BlogHeroSection'
import ProductBody from './components/ProductBody'
import ProductsCards from './components/ProductsCards'
import FooterSection from '../../components/Footer/FooterSection'

const page = () => {
  return (
    <div className='min-h-screen'>
        <BlogHeroSection title="Our Products" />
        <ProductBody />
        <ProductsCards />
        <FooterSection/>
    </div>
  )
}

export default page