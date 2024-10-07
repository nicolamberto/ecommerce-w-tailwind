import React from 'react'

import { RiMenuLine } from "react-icons/ri";
import logo from '@/public/logomacowens.webp'
import { FaCartShopping } from 'react-icons/fa6'
import { IoIosSearch } from 'react-icons/io'
import Image from 'next/image';
import { useResponsive } from '@/hooks/useResponsive';
import ModalCart from '@/components/cart/modal-cart/modalcart';
import MenuMobile from './menu-mobile/menumobile';
import { RxCross2 } from "react-icons/rx";
import { useCart } from '@/hooks/useCart';

const MobileHeader = () => {

    const { isMenuOpen, openMenu } = useResponsive()
    const {cart, openCartModal, isCartModalOpen} = useCart()

    return (
        <div className="">
            <div className='relative flex md:hidden py-5 flex-row justify-around items-center'>

                {/* Menu hamburguesa */}
                <div onClick={openMenu}>
                    <RiMenuLine size={20} />
                </div>

                {/* logo */}
                <div className="w-[8rem]">
                    <Image src={logo} alt="logo" />
                </div>

                {/* carrito y search */}
                <div className='flex flex-row items-center gap-3'>
                    <IoIosSearch size={23} />
                    <button className='relative' onClick={openCartModal}>
                        <FaCartShopping size={20} />
                        <p className='absolute text-sm bottom-3 -right-2'>{cart.length}</p>
                    </button>
                    {isCartModalOpen && (
                    <ModalCart />
                )}
                </div>

                {/* menu mobile */}

            </div>
            {isMenuOpen && (
                <MenuMobile />
            )}
        </div>

    )
}

export default MobileHeader
