'use client'

import { links } from "../../lib/data";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import logo from '@/public/logomacowens.webp'
import Link from "next/link";
import ModalCart from "../cart/modal-cart/modalcart";
import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";
import DesktopHeader from "../header/desktop-header/desktopheader";
import MobileHeader from "../header/mobile-header/mobileheader";


export default function Header() {

    const { isCartModalOpen, openCartModal } = useCart()

    return (
        //promocion
        <div className="w-full">
            <div className="bg-blue-700 text-gray-300 text-xs w-full text-center py-2">
                <p>9 CUOTAS SIN INTERÉS EN TODAS TUS COMPRAS |  12 CUOTAS SIN INTERÉS A PARTIR DE $160.000 | ENVÍO GRATIS A TODO EL PAÍS A PARTIR DE $69.999  |  RETIRO EN TIENDA SIN CARGO  </p>
            </div>

            {/*desktop header */}
           <DesktopHeader/>

            {/* mobile header */}
            <MobileHeader/>
            <hr className="w-full" />
        </div>



    )
}
