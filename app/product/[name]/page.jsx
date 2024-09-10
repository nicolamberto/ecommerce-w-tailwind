'use client'

import HeaderCollection from '@/components/headercollection'
import ProductsGrid from '@/components/products/product-grid/productsgrid'
import { collection } from '@/lib/data'
import { notFound } from 'next/navigation'
import React from 'react'


const dataProducts = collection


const page = ({ params }) => {

  const { name } = params
  
  const product = dataProducts.find(i => i.name.replace(/ /g, '%20') === name)
  
  if(!product){
    notFound()
  }

  return (
    <div className='flex justify-center items-center flex-col w-4/6 '>
      HOLA
    </div >
  )
}

export default page