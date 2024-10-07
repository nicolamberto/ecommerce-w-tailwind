'use client'

import Image from 'next/image'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoIosAdd } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";

/* import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules' */

import { motion } from 'framer-motion'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useCart } from '@/hooks/useCart'
import { useAlert } from '@/hooks/useAlert'
const ProductItem = ({ product }) => {

    const { addToCart } = useCart()
    const { handleAlertAddToCart } = useAlert()


    const [currentIndex, setCurrentIndex] = useState(product.thumbnails[0])

    const prevImg = () => {
        const isFirstImg = currentIndex === product.thumbnails[0]
        const isSecondImg = currentIndex === product.thumbnails[1]
        const isThirdImg = currentIndex === product.thumbnails[2]

        if (isFirstImg) {
            return setCurrentIndex(product.thumbnails[3])
        } else if (isSecondImg) {
            return setCurrentIndex(product.thumbnails[0])
        } else if (isThirdImg) {
            return setCurrentIndex(product.thumbnails[1])
        } else {
            return setCurrentIndex(product.thumbnails[2])
        }

    }

    const nextImg = () => {
        const isLastImg = currentIndex === product.thumbnails[3]
        const isSecondImg = currentIndex === product.thumbnails[1]
        const isThirdImg = currentIndex === product.thumbnails[2]

        if (isLastImg) {
            return setCurrentIndex(product.thumbnails[0])
        } else if (isSecondImg) {
            return setCurrentIndex(product.thumbnails[2])
        } else if (isThirdImg) {
            return setCurrentIndex(product.thumbnails[3])
        } else {
            return setCurrentIndex(product.thumbnails[1])
        }
    }


    return (
        <div key={product.name} className='w-full flex justify-center items-center flex-col mb-5'>

            <div

                className='relative group'>
                <Link href={`/product/${product.name.trim()}`}>
                    <Image
                        className=''
                        src={currentIndex}
                        alt='Product Images'
                        quality={95}
                    />
                </Link>


                <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-md rounded-full p-2 bg-black/10 text-white/30 cursor-pointer">
                    <IoIosArrowBack onClick={prevImg} />
                </div>

                <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-md rounded-full p-2 bg-black/10 text-white/30 cursor-pointer">
                    <IoIosArrowForward onClick={nextImg} />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{
                        opacity: 1
                    }}

                    className='absolute flex justify-center items-center bottom-0 gap-4 py-5 bg-opacity-25 bg-gray-400 text-white w-full text-center'>

                    {product.talle.map(i => (
                        <div className=" rounded-sm px-4 bg-gray-500 bg-opacity-40">
                            <p>{i}</p>
                        </div>

                    ))}

                </motion.div>

            </div>
            <div className='flex flex-col items-center justify-center gap-1 w-full relative'>
                <p className=' text-center text-xs font-extralight pt-1'>{product.name}</p>
                <div className='flex justify-around items-center flex-row w-full'>
                    <p className='font-semibold text-sm'>${product.price}</p>

                </div>
                <p className='text-xs text-gray-500'>Nueve cuotas sin interes de $6550</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animation={{duration:1000}}
                    onClick={() => addToCart(product)}
                    className='block lg:absolute top-5 xl:top-2 right-2'
                ><BsCartPlus size={23} onClick={handleAlertAddToCart} />
                </motion.button>
            </div>


        </div>
    )
}

export default ProductItem
