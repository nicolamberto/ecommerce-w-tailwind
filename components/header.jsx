import { links } from "../lib/data";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import logo from '@/public/logomacowens.webp'

{/* <div className="relative flex items-center justify-center gap-16 bg-gray-700 p-6 w-full h-[4rem] text-2xl text-gray-400">
            <h2 className="font-extrabold text-4xl">logo</h2>
            <div className="relative flex items-center justify-center gap-2">
                <input type="search" name="search" placeholder="Search items..." className=" w-[26rem] h-8 rounded-sm placeholder:text-sm placeholder:pl-2 bg-gray-200"/>
                <button>{<FaSearch className="w-5"/>}</button>
            </div>
            
           
            <button><FaCartShopping/></button>
            <ul className="flex flex-row justify-center items-center gap-2 absolute right-4">
                 {links.map((link) => (
                    <li key={link.name}>
                        {link.icon}
                    </li>
                ))} 
            </ul>
                
           
        </div> */}



export default function Header() {
    return (
        //promocion
        <div className="w-full pb-10">
            <div className="bg-blue-700 text-gray-300 text-xs w-full text-center py-2">
                <p>9 CUOTAS SIN INTERÉS EN TODAS TUS COMPRAS |  12 CUOTAS SIN INTERÉS A PARTIR DE $160.000 | ENVÍO GRATIS A TODO EL PAÍS A PARTIR DE $69.999  |  RETIRO EN TIENDA SIN CARGO  </p>
            </div>

            {/* header */}
            <div className="py-10">
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

                    <div className=" flex flex-row justify-center items-center gap-4">
                        <div className="relative flex flex-row justify-center items-center">
                            <input type="search" name="search" placeholder="¿Que estas buscando?" className="w-full h-9 border border-slate-300 placeholder:text-xs placeholder:pl-2" />
                            <button className="absolute right-1 text-gray-400 text-2xl">{<IoIosSearch />}</button>
                        </div>
                        <button className=" text-2xl">{<IoPerson/>}</button>
                        <button className="text-2xl">{<FaCartShopping/>}</button>

                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            {/* categorias */}
            <div className="flex justify-center items-center flex-row gap-5 font-medium text-sm">
                <p className="text-red-500 hover:underline hover:underline-offset-8">REBAJAS</p>
                <p className="hover:underline hover:underline-offset-8 ">NUEVOS INGRESOS</p>
                <p className="hover:underline hover:underline-offset-8">COLECCIÓN</p>
                <p className="hover:underline hover:underline-offset-8">CASUAL</p>
                <p className="hover:underline hover:underline-offset-8">SASTRERÍA</p>
                <p className="hover:underline hover:underline-offset-8">ACCESORIOS</p>
            </div>
        </div>



    )
}
