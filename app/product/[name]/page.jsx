'use client'

import HeaderCollection from '@/components/headercollection'
import ProductsGrid from '@/components/products/product-grid/productsgrid'
import { collection } from '@/lib/data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { infoproductlogistic } from '@/lib/data'
import ProductSlideShow from '@/components/product/slideshow/productslideshow'


const dataProducts = collection


const page = ({ params }) => {

  const { name } = params

  const product = dataProducts.find(i => i.name.replace(/ /g, '%20') === name)

  if (!product) {
    notFound()
  }

  return (
    <div className='flex items-start justify-center flex-row w-4/6 gap-20 my-16'>

      {/* parte de imagenes */}
      <div className=''>
        {/* <Image
          src={product.thumbnails[0]}
          width={800}
          height={800}

        /> */}
        <ProductSlideShow images={product.thumbnails} title={product.name}/>
      </div>

      {/* informacion de producto */}
      <div className='flex flex-col items-start justify-between w-full gap-5'>
        {/* primera parte de texto hasta la linea */}
        <div className='flex gap-5 flex-col'>
          <p className='font-bold text-xl'>{product.name}</p>
          <p className='text-gray-700 text-sm'>{product.description}</p>
          <p className='font-bold text-2xl'>${product.price}</p>
          <p className='text-gray-500'>9 cuotas sin interes de $4444</p>
          <hr className='h-2 w-full' />
        </div>


        {/* talles */}
        <div className='flex flex-col gap-2'>
          <p className='text-xs font-semibold'>Talle:</p>
          <div className='flex flex-row gap-2 pb-3'>
            {product.talle.map(i => (
              <div>
                <p className='border border-gray-700 px-2 text-base'>{i}</p>
              </div>
            ))}
          </div>

          <div>
            <p className='text-sm text-gray-500'>Tabla de talle</p>
          </div>
        </div>

        {/* boton de agregar al carrito */}
        <div>
          <button className='bg-gray-900 text-gray-200 p-3'>AGREGAR AL CARRITO</button>
        </div>

        {/* sliders de informacion */}
        <div className='flex gap-5 flex-col pt-10 w-full'>
          {infoproductlogistic.map(i => (
            <div className='flex gap-3 flex-col'>
              <div key={i.name} className='flex justify-start items-center flex-row gap-3'>
                <div className='text-2xl'>{i.logo}</div>
                <p>{i.name}</p>
              </div>
              <hr className='h-2 w-full' />
            </div>

          ))}
        </div>


      </div>

    </div >
  )
}

export default page