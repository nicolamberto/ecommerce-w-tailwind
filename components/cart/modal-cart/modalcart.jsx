'use client'

import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';


const ModalCart = () => {

    const { closeCartModal, cart, removeFromCart } = useCart()


    return (
        <div className=' absolute w-[400px] top-10 right-0 shadow-2xl z-30 p-6 bg-white'>

            <div className='flex flex-col gap-4'>
                {/* titulo y boton de cerrar carrito */}
                <div className="flex flex-row justify-between items-center text-xl">
                    <p>Mi carrito</p>
                    <button onClick={closeCartModal}>
                        <RxCross2 />
                    </button>

                </div>

                {/* mock de producto */}
                <hr />
                {cart.map(i => (
                    <div className=' flex flex-row gap-3 justify-between items-start'>
                        <div className="flex flex-row gap-3">

                            {/* imagen */}
                            <div>
                                <Image src={i.thumbnails[0]} alt={i.name} width={60} />
                            </div>

                            {/* info y precio */}
                            <div className="flex flex-col gap-2">
                                <p className='text-sm'>{i.name}</p>
                                <p className='text-xs text-gray-400'>Talle: 40</p>
                                <p className='font-bold'>${i.price}</p>
                            </div>

                        </div>


                        {/* cantidad y borrar producto */}
                        <button onClick={()=>removeFromCart(i)} className="\">
                            <FaTrashCan />
                        </button>

                    </div>
                ))}
                <hr className='w-full' />

                {/* parte final del carrito, boton para seguir comprando, boton para finalizar compra y total del monto a abonar */}
                <div className="flex flex-col gap-4">


                    <div className="flex flex-col gap-2">
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-xl'>Subtotal</p>
                            <p className='text-xl font-semibold'>$145000</p>
                        </div>
                        <p className='text-xs text-gray-400'>Los descuentos y promociones se aplicarán en el carrito.</p>
                    </div>


                    <Link href={'/cart'} onClick={closeCartModal}>
                        <button className='w-full text-white bg-black py-2'>IR AL CARRITO</button>
                    </Link>


                    <Link href={'/products'} onClick={closeCartModal} className='flex flex-row justify-center gap-3 text-gray-600 items-center text-center w-full'>
                        <MdKeyboardArrowLeft />
                        <button>Continuar comprando</button>
                    </Link>

                </div>


            </div>

        </div>
    )
}

export default ModalCart
