'use client'

import HeaderCollection from '@/components/main-page-components/headercollection'
import ProductsGrid from '@/components/products/product-grid/productsgrid'
import { collection } from '@/lib/data'
import React from 'react'


const dataProducts = collection


const page = ({ params }) => {

  const { id } = params
  const products = dataProducts.filter(i => i.category.toLowerCase() === id)


  return (
    <div className='flex justify-center items-center flex-col w-4/6 '>
      <HeaderCollection products={products}/>
      <div className=' flex justify-center items-center w-full'>
        <ProductsGrid products={products} />
      </div>
    </div >
  )
}

export default page
