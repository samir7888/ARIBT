import { Productcard } from '@/components/cards/productCard'
import React from 'react'

const ProductsCards = () => {
  return (
    <div className='space-y-12 py-24 w-full'>
        <Productcard />
        <Productcard />
    </div>
  )
}

export default ProductsCards