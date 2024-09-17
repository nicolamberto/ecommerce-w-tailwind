'use client'

import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import React from 'react'

import { FaTrashCan } from "react-icons/fa6";


const CartPage = () => {

  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <div className='py-20 w-full flex flex-col items-center justify-center'>
      <p className=' text-3xl text-start w-3/4 pb-16'>Mi Carrito</p>
      <div className='flex flex-row items-start justify-between w-3/4 gap-20'>
        {/* tabla */}
        <table className=" table-auto pb-[100px] w-full">
          <thead>
            <tr className='text-xs text-gray-500'>
              <th className='text-start'>Producto</th>
              <th className='text-start'>Precio</th>
              <th className='text-start'>Cantidad</th>
              <th className='text-start'>Subtotal</th>
            </tr>
            
          </thead>
          
          <tbody>
            {cart.map(i => (

              <tr>
                <td>
                  <div className='flex flex-row items-center gap-4 pb-5'>
                    <Image src={i.thumbnails[0]} alt={i.name} width={60} />
                    <div className='text-xs'>
                      <p>{i.name}</p>
                      <p>Talle: S</p>
                    </div>
                  </div>
                </td>
                <td className='font-semibold'>${i.price}</td>
                <td>2</td>
                <td>${i.price}</td>
                <td><button onClick={()=>removeFromCart(i)}><FaTrashCan /></button></td>
              
              </tr>


            ))}
          </tbody>
        </table>

        {/* Resumen de compra */}
        <div>
          <div className='bg-gray-300 flex flex-col gap-5 w-[400px] p-10 shadow-lg rounded-sm'>
            <p className='text-2xl'>Resumen de compra</p>
            <hr />
            <div className=" flex flex-row justify-between text-xl">
              <p>Total</p>
              <p className='font-bold'>$115000</p>
            </div>

            <div>
              <button className='text-center bg-black text-gray-300 py-2 w-full'>INICIAR COMPRA</button>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default CartPage
