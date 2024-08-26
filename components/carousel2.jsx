"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { carouselImgs } from '@/lib/data'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export default function Carousel2() {
    console.log(carouselImgs.length);
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevImg = () => {
        const isFirstImg = currentIndex === 0
        const newIndex = isFirstImg ? carouselImgs.length -1 : currentIndex-1
        setCurrentIndex(newIndex)
    }

    const nextImg =()=>{
        const isLastImg = currentIndex === carouselImgs.length-1 
        const newIndex = isLastImg ? 0: currentIndex+1
        setCurrentIndex(newIndex)
    }



    return (
        <div className='w-full relative group'>
            <Image src={carouselImgs[currentIndex].url} quality={95} alt='carousel img' priority/>
            <div data-carousel='slide' className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-white/30 cursor-pointer'>
                <FaArrowLeft onClick={prevImg}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-white/30 cursor-pointer'>
                <FaArrowRight onClick={nextImg}/>
            </div>
        </div>
    )
}
