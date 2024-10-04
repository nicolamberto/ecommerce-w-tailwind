'use client'

import { useCart } from "@/hooks/useCart";

import Image from "next/image";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaTrashCan } from "react-icons/fa6";

const ProductsCartTable = () => {

    const { cart, addToCart, removeOneItem, removeFromCart } = useCart()


    return (
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
                            <div className='flex flex-row items-center justify-start gap-4 pb-5'>
                                <Image src={i.thumbnails[0]} alt={i.name} width={60} />
                                <div className='text-xs'>
                                    <p>{i.name}</p>
                                    <p>Talle: S</p>
                                </div>
                            </div>
                        </td>
                        <td className='font-semibold text-sm md:text-base'>${i.price}</td>
                        <td className='text-sm md:text-base'>
                            <div className="flex items-center gap-1">
                                <CiSquareMinus onClick={() => removeOneItem(i)} className='text-xl text-gray-600 cursor-pointer' />
                                <p>{i.quantity}</p>
                                <CiSquarePlus onClick={() => addToCart(i)} className='text-xl text-gray-600 cursor-pointer' />
                            </div>
                        </td>
                        <td className='text-sm md:text-base'>${i.price}</td>
                        <td><button onClick={() => removeFromCart(i)}><FaTrashCan /></button></td>

                    </tr>


                ))}
            </tbody>
        </table>

    );
}


export default ProductsCartTable;