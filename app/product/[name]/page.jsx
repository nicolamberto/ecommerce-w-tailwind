'use client'

import React from 'react'

import { collection } from '@/lib/data'
import { useCart } from '@/hooks/useCart'
import { notFound } from 'next/navigation'

import ProductSlideShow from '@/components/product/slideshow/productslideshow'
import ProductSlideShowMobile from '@/components/product/slideshow/productslideshowmobile'
import InfoProduct from '@/components/product/infoproduct/infoproduct'

const dataProducts = collection

const page = ({ params }) => {

  const { addToCart } = useCart()
  const { name } = params
  const product = dataProducts.find(i => i.name.replace(/ /g, '%20') === name)

  if (!product) {
    notFound()
  }

  return (
    <div className='flex items-center md:items-start justify-center flex-col md:flex-row gap-0 lg:gap-0 w-4/6 md:w-full lg:w-full xl:w-4/6 my-16'>

      {/* parte de imagenes */}
      <ProductSlideShowMobile images={product.thumbnails} title={product.name} />
      <ProductSlideShow images={product.thumbnails} title={product.name} />

      {/* informacion de producto */}
      <InfoProduct product={product} addToCart={addToCart} />

    </div >
  )
}

export default page