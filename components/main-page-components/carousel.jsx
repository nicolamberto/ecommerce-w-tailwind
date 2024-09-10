"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { carouselImgs } from '@/lib/data'

export default function Carousel() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
        autoplay: false,
    };

    return (
        <div className=" max-w-[1600px]">
            <div className="xl:w-[1250px] lg:w-full md:w-[750px] sm:hidden md:block">
                <Slider {...settings}>

                    {carouselImgs.map(i => (
                        <div className="grid grid-cols-1">
                            <Image src={i.url} />
                        </div>


                    ))}


                </Slider>
            </div>
        </div>


    )
}
