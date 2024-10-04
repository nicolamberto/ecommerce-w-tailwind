import React from 'react'

import Link from 'next/link'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const EmptyModalCart = () => {


  return (
    <div className='flex flex-col gap-3'>
      <p className='text-2xl text-gray-500'>El carrito esta vacio</p>
      <Link href={'/products'} className='flex flex-row justify-center gap-3 text-gray-600 items-center text-center w-full'>
        <MdKeyboardArrowLeft />
        <button className='font-semibold'>Continuar comprando</button>
      </Link>
    </div>
  )
}

export default EmptyModalCart
