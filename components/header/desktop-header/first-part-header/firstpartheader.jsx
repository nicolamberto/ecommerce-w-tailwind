import { useCart } from "@/hooks/useCart";

import Image from "next/image";
import Link from "next/link";

import { useSearch } from "@/hooks/useSearch";

import ModalCart from "@/components/cart/modal-cart/modalcart";

import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

import logo from '@/public/logomacowens.webp'
import NonFuncionalModal from "@/components/non-funcional-component/nonfuncionalmodal";

const FirstPartHeader = () => {


    const { isCartModalOpen, openCartModal, cart } = useCart()
    const { search, setSearch, handleChange, ref, handleSubmit } = useSearch()


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
                <form onSubmit={handleSubmit} className="relative flex flex-row justify-center items-center">
                    <input ref={ref} value={search} onChange={handleChange} type="search" id="search" className="w-full h-9 border border-slate-300 placeholder:text-xs placeholder:pl-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                    <button type='submit' className="absolute right-1 text-gray-400 text-2xl">{<IoIosSearch />}</button>
                </form>
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