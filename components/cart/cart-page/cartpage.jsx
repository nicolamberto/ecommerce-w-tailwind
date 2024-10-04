'use client'

import React from 'react'

import { useCart } from '@/hooks/useCart'

import EmptyModalCart from '../empty/empty-modal-cart/emptymodalcart';
import ProductsCartTable from './products-cart-table/productscarttable';
import ResumeCart from './resume-cart/resumecart';


const CartPage = () => {

  const { cart } = useCart()

  return (
    <div className='py-20 w-full flex flex-col items-center justify-center'>
      <p className=' text-3xl text-start w-3/4 pb-16'>Mi Carrito</p>

      {/* componente a mostrar si cart esta vacio */}
      {cart.length === 0 &&
        <EmptyModalCart />
      }

      {cart.length !== 0 &&
        <div className='flex flex-col lg:flex-row items-center justify-between w-3/4 gap-20'>
          {/* tabla */}
          <ProductsCartTable />

          {/* Resumen de compra */}
          <ResumeCart />

        </div>
      }


    </div>

  )
}

export default CartPage
