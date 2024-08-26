"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import CardCarousel from "./cardcarousel";
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
        <div className=" max-w-[1450px]">
            <Slider {...settings} className="flex justify-center items-center">

                {carouselImgs.map(i=>(
                    <div>
                        <Image src={i.url}/>
                    </div>
                ))}

                
            </Slider>
        </div>

    )
}
