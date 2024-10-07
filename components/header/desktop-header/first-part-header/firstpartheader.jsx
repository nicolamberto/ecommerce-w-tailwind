import { useCart } from "@/hooks/useCart";

import Image from "next/image";
import Link from "next/link";

import ModalCart from "@/components/cart/modal-cart/modalcart";

import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

import logo from '@/public/logomacowens.webp'
import NonFuncionalModal from "@/components/non-funcional-component/nonfuncionalmodal";

const FirstPartHeader = () => {


    const { isCartModalOpen, openCartModal, cart } = useCart()

    return (
        <div className="flex justify-around items-center flex-row">
            <div className="flex flex-row justify-center items-center gap-5 text-sm font-medium">
                <div className="flex flex-col justify-center items-center gap-1 relative group">
                    <div className="flex justify-center items-center">
                        <FaLocationDot />
                        <p>LOCALES</p>
                    </div>
                    <NonFuncionalModal />
                </div>
                <div className="flex flex-row justify-center items-center gap-1 relative group">
                    <div className="flex justify-center items-center">
                        <BsFillCreditCard2BackFill />
                        <p>PROMOCIONES BANCARIAS</p>
                    </div>
                    <NonFuncionalModal />
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
                <div className="flex justify-center items-center relative group">
                    <button className=" text-2xl hover:scale-110 transition">{<IoPerson />}</button>
                    <NonFuncionalModal />
                </div>
                <button className="text-2xl hover:scale-110 transition relative" onClick={openCartModal}>
                    <FaCartShopping />
                    <p className='absolute text-sm bottom-3 -right-2'>{cart.length}</p>
                </button>
                {isCartModalOpen && (
                    <ModalCart />
                )}

            </div>
        </div>
    );
}

export default FirstPartHeader;