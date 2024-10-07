'use client'

import HeaderCollection from '@/components/main-page-components/headercollection'
import ProductsGrid from '@/components/products/product-grid/productsgrid'
import { collection } from '@/lib/data'
import React from 'react'


const dataProducts = collection


const page = ({ params }) => {

  const { slug } = params
  const products = dataProducts.filter(i => i.subcategory.toLowerCase().replace(/ /g, '') === slug)
  console.log(products);
  

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
