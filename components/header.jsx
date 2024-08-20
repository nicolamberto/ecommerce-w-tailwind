import { links } from "../lib/data";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";




export default function Header() {
    return (

        <div className="relative flex items-center justify-center gap-16 bg-gray-700 p-6 w-full h-[4rem] text-2xl text-gray-400">
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
                
           
        </div>


    )
}
