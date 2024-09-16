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


const ProductSlideShow = ({ images, title }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className=''>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 max-w-[30rem] max-h-[46rem]"
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
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper max-w-[40rem] max-h-[10rem]"
            >
                {images.map(image => (

                    <SwiperSlide key={image}>
                        <Image
                            src={image}
                            alt={title}
                            height={300}
                            width={300}
                            className='object-fill'
                        />
                    </SwiperSlide>




                ))}
            </Swiper>
        </div>
    )
}

export default ProductSlideShow
