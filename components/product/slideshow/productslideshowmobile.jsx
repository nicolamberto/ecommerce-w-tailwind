'use client'

import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';


const ProductSlideShowMobile = ({ images, title }) => {

 

    return (
        <div className='block md:hidden'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 max-w-[20rem] max-h-[30rem] sm:max-w-[37rem] sm:max-h-[50rem]"
            >
                {images.map(image => (

                    <SwiperSlide key={image}>
                        <Image
                            src={image}
                            alt={title}
                            height={1000}
                            width={1000}
                            className='object-fill'
                        />
                    </SwiperSlide>


                ))}

            </Swiper>

        </div>
    )
}

export default ProductSlideShowMobile
