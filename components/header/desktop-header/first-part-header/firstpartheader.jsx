import { useCart } from "@/hooks/useCart";

import Image from "next/image";
import Link from "next/link";

import ModalCart from "@/components/cart/modal-cart/modalcart";

import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

import logo from '@/public/logomacowens.webp'

const FirstPartHeader = () => {

    const { isCartModalOpen, openCartModal } = useCart()

    return (
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

            <Link href={'/'} className="w-[16rem]">
                <Image src={logo} alt="logo" />
            </Link>

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
    );
}

export default FirstPartHeader;