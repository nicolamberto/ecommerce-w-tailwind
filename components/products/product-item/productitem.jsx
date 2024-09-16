'use client'

import Image from 'next/image'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductItem = ({ product }) => {

    console.log(product.name.replace(/ /g, '%'));



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

            <div className='relative group'>
                <Link href={`/product/${product.name.trim()}`}>
                    <Image
                        className=' p-2'
                        src={currentIndex}
                        alt='Product Images'
                        quality={95}
                    />
                </Link>


                <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-white/30 cursor-pointer">
                    <IoIosArrowBack onClick={prevImg} />
                </div>

                <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-white/30 cursor-pointer">
                    <IoIosArrowForward onClick={nextImg} />
                </div>

            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
                <p className=' text-center text-xs font-extralight pt-1'>{product.name}</p>
                <div className='flex justify-around items-center flex-row w-full'>
                    <p className='font-semibold text-sm'>${product.price}</p>
                    {/* <button className='m-1 p-1 border border-blue rounded-xl text-sm text-center' onClick={() => addToCart(product)}>Choose</button> */}
                </div>
                <p className='text-xs text-gray-500'>Nueve cuotas sin interes de $6550</p>
            </div>


        </div>
    )
}

export default ProductItem
