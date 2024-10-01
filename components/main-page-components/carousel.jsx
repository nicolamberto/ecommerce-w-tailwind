"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { carouselImgs } from '@/lib/data'

import bannermobile from '@/public/mobile/bannermobile.jpg'
export default function Carousel() {

    /* 
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
        }; */

    return (
        //TODO: ACOMODAR LOS TAMAÑOS PARA DISEÑO RESPONSIVE
        <div className="">
            <div className="hidden md:flex justify-center w-full items-center">
                <Image src={carouselImgs[0].url} />
            </div>
            <div className="block relative md:hidden w-full">
                <Image src={bannermobile} alt='banner mobile' className="object-fill" />
                <div className="absolute left-5 bottom-20 text-white font-extrabold">
                    <p className="text-2xl">ESPECIAL SPORT</p>
                    <p className="text-sm text-gray-200">HASTA</p>
                    <p className="text-4xl">60% OFF</p>
                    <p className="text-sm text-gray-200">EN CHOMBAS Y REMERAS</p>
                    <p className="text-xl">9 cuotas sin interes</p>
                </div>
            </div>
        </div>





    )
}
