'use client'

import React from 'react'

import { FaTrashCan } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ModalCart = () => {

    const { closeCartModal, cart, removeFromCart, totalPrice } = useCart()

    return (



        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.100 }}
            className=' absolute w-full sm:w-[400px] top-10 right-0 shadow-2xl z-50 p-6 bg-white transition ease-in duration'>

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
                {cart.length === 0 && <p className='text-center font-semibold'>El carrito esta vacio</p>}
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
                                <div className="">
                                    <p className='text-xs text-gray-400'>Talle: 40</p>
                                    <p className='text-xs text-gray-400'>Cantidad: {i.quantity}</p>
                                </div>
                                <p className='font-bold'>${i.price}</p>
                            </div>
                        </div>

                        {/* cantidad y borrar producto */}
                        <button onClick={() => removeFromCart(i)} className="\">
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
                            <p className='text-xl font-semibold'>${totalPrice}</p>
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
        </motion.div>





    )
}

export default ModalCart
