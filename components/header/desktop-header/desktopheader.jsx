import ModalCart from '@/components/cart/modal-cart/modalcart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { FaCartShopping, FaLocationDot } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import { motion } from 'framer-motion'
import logo from '@/public/logomacowens.webp'
import { useCart } from '@/hooks/useCart'

const DesktopHeader = () => {


    
    const { isCartModalOpen, openCartModal } = useCart()

    return (
        <div className="py-10 hidden md:flex flex-col justify-between gap-16">
            <div className="flex justify-around items-center flex-row">
                <div className="flex flex-row justify-center items-center gap-5 text-sm font-medium">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <FaLocationDot />
                        <p>LOCALES</p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-1">
                        <BsFillCreditCard2BackFill />
                        <p>PROMOCIONES BANCARIAS</p>
                    </div>
                </div>

                <div className="w-[16rem]">
                    <Image src={logo} alt="logo" />
                </div>

                <div className="relative flex flex-row justify-center items-center gap-4">
                    <div className="relative flex flex-row justify-center items-center">
                        <input type="search" name="search" placeholder="¿Que estas buscando?" className="w-full h-9 border border-slate-300 placeholder:text-xs placeholder:pl-2" />
                        <button className="absolute right-1 text-gray-400 text-2xl">{<IoIosSearch />}</button>
                    </div>
                    <button className=" text-2xl hover:scale-110 transition">{<IoPerson />}</button>
                    <button className="text-2xl hover:scale-110 transition" onClick={openCartModal}>{<FaCartShopping />}</button>
                    {isCartModalOpen && (
                        <ModalCart />
                    )}

                </div>
            </div>

            {/* CATEGORIAS */}
            <div className="flex relative justify-center items-center flex-row gap-5 font-medium text-sm">
                <p className="text-red-500 hover:underline hover:underline-offset-8">REBAJAS</p>
                <p className="hover:underline hover:underline-offset-8 ">NUEVOS INGRESOS</p>
                <div className="group flex justify-center items-center">
                    <Link href={'/products'} className="hover:underline hover:underline-offset-8 z-40 hover:font-semibold transition">COLECCION</Link>


                    {/* MODAL DE COLECCION */}
                    <motion.div className="hidden group-hover:flex group-hover:justify-center group-hover:items-center w-full bg-white">
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
                    </motion.div>

                </div>





                <p className="hover:underline hover:underline-offset-8">CASUAL</p>
                <p className="hover:underline hover:underline-offset-8">SASTRERÍA</p>
                <p className="hover:underline hover:underline-offset-8">ACCESORIOS</p>
            </div>
        </div>
    )
}

export default DesktopHeader
