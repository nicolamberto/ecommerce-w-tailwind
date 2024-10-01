import Link from 'next/link'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from 'react-icons/rx';
import logo from '@/public/logomacowens.webp'
import Image from 'next/image';
import { useResponsive } from '@/hooks/useResponsive';
import { motion } from 'framer-motion';

const MenuMobile = () => {

    const { closeMenu, isMenuOpen, collectionOpen, openCollection } = useResponsive()
    console.log(isMenuOpen);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            
            >
            {/* menu content */}
            

            <div

                className='absolute top-0 left-0 bg-white shadow-xl w-full z-50'>
                <div>
                    <div className="flex flex-row justify-between items-center py-5">
                        <Image src={logo} width={150} alt="logo" />
                        <button className='pointer mr-10' onClick={closeMenu}>
                            <RxCross2 size={20} />
                        </button>


                    </div>
                    <hr className='pb-2' />
                </div>
                <div className="flex flex-col relative justify-center items-start gap-7 font-medium text-sm px-2 py-5">

                    <div className='w-full flex flex-row justify-between items-center'>
                        <p className="hover:underline hover:underline-offset-8">REBAJAS</p>
                        <RiArrowDropDownLine size={20} />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <p className=" hover:underline hover:underline-offset-8">NUEVOS INGRESOS</p>
                        <RiArrowDropDownLine size={20} />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <p className=" hover:underline hover:underline-offset-8">REBAJAS</p>
                        <RiArrowDropDownLine size={20} />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <p className=" hover:underline hover:underline-offset-8">CASUAL</p>
                        <RiArrowDropDownLine size={20} />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <p className=" hover:underline hover:underline-offset-8">SASTRERIA</p>
                        <RiArrowDropDownLine size={20} />
                    </div>
                    <div className="w-full">
                        <div className='w-full flex flex-row justify-between items-center' onClick={openCollection}>
                            <p className="">COLLECCION</p>
                            <RiArrowDropDownLine size={20} />
                        </div>
                        {collectionOpen && (
                            <motion.div 
                            initial={{opacity:0}}
                            animate={{ opacity:1}}
                            transition={{duration:0.2}}
                            className='flex flex-col justify-center items-start gap-4 pt-5 px-5'>
                                <p>ABRIGOS</p>
                                <p>BERMUDAS</p>
                                <p>BUZOS</p>
                                <p>CAMISAS</p>
                                <p>JEANS</p>
                                <p>PANTALONES</p>
                                <p>REMERAS</p>
                                <p>SACOS</p>
                            </motion.div>
                        )}
                        
                    </div>




                    <div className="group flex justify-center items-center">
                        <Link href={'/products'} onClick={closeMenu} className="hover:underline hover:underline-offset-8 z-40 hover:font-semibold transition">COLECCION</Link>
                        {/* MODAL DE COLECCION */}
                        <div className="hidden group-hover:flex group-hover:justify-center group-hover:items-center w-full bg-white">
                            <div className="absolute top-5 flex justify-center items-center bg-white gap-4 w-full z-10">
                                <div className="grid grid-cols-5 w-4/6 gap-10 py-14">
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/abrigos'} className="text-base font-semibold">ABRIGOS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Camperas</li>
                                            <li>Sobresacos</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/jeans'} className="text-base font-semibold">JEANS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Regular</li>
                                            <li>Fit</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/sacos'} className="text-base font-semibold">SACOS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Sacos</li>
                                            <li>Trajes</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/remeras'} className="text-base font-semibold">REMERAS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Manga Corta</li>
                                            <li>Manga Larga</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/buzos'} className="text-base font-semibold">SWEATERS Y BUZOS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Sweaters</li>
                                            <li>Buzos</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/chombas'} className="text-base font-semibold">CHOMBAS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Manga Corta</li>
                                            <li>Manga Larga</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/camisas'} className="text-base font-semibold">CAMISAS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Sport</li>
                                            <li>Vestir</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/bermudas'} className="text-base font-semibold">BERMUDAS</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Bermudas</li>
                                            <li>Shorts de Baño</li>
                                        </ul>
                                    </div>
                                    <div className="w-full flex justify-center items-start flex-col gap-3">
                                        <Link href={'/products/category/pantalones'} className="text-base font-semibold">PANTALONES</Link>
                                        <ul className="flex justify-center items-start flex-col gap-1 text-base text-gray-400">
                                            <li>Cargo</li>
                                            <li>Vestir</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* TODO: blur div */}
        </motion.div>


    )
}

export default MenuMobile
