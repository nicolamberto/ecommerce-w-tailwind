import CartPage from '@/components/cart/cart-page/cartpage'
import React from 'react'

const page = () => {
  return (
    <div className='w-full border-2 border-black flex justify-center items-center flex-col'>
      <div className='bg-black w-full text-gray-300 py-3 text-center'>
        <p>TENES ENVIO GRATIS!</p>
      </div>

      <CartPage />
    </div>
  )
}

export default page
