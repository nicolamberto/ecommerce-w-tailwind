
import Link from 'next/link';
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


export default function NavBar() {
    return (
        /* todo va a ir dentro de un componente separado */
        <div className='flex relative justify-center items-center gap-7 h-[3rem] bg-gray-200 w-full z-10'>
            <div className='flex  flex-row justify-between items-center w-4/6 h-full'>
                <Link href={'#'} className='group h-full'>
                    <div className=' flex flex-row justify-center items-center font-bond border-2 h-full text-sm cursor-pointer'>
                        <button className=''>CATEGORIAS</button>
                        <span><IoIosArrowDown /></span>
                    </div>
                    {/* DROPDOWN , va a ir en un componente separado */}
                    <div className='hidden absolute group-hover:flex justify-center items-start flex-col top-[100%] w-[15rem] rounded-sm  border-[1px] shadow-md border-slate-400 bg-white text-gray-500 text-xs '>

                        <div className=' hover:group relative border-2 hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>
                            <p className=''>Componentes de PC</p>
                            <div className='hidden hover:group-hover:flex'>
                                <p>HOLAAAAAAAAAAAAAA</p>
                            </div>
                        </div>


                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Notebooks</p>
                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Perifericos</p>
                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Monitores</p>
                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Impresion 3D</p>
                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Conectividad y Redes</p>
                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Hogar</p>
                        <p className='hover:bg-gray-200 hover:font-semibold w-full px-6 py-2'>Almacenamiento Portátil</p>
                        <p className='hover:bg-gray-200 hover:font-semibold23 w-full px-6 py-2'>Scanners</p>
                    </div>

                </Link>

                <div className='flex flex-row justify-center items-center gap-5 text-sm text-slate-500'>
                    <button>
                        PCs de Escritorio
                    </button>
                    <button>
                        Notebooks
                    </button>
                    <button>
                        Placas de Video
                    </button>
                    <button>
                        Monitores
                    </button>
                    <button>
                        Micros
                    </button>
                    <button>
                        ¡Imperdibles!
                    </button>
                    <button>
                        Arma tu PC
                    </button>

                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-sm font-bold'>
                    <p>LG</p>
                    <p>CORPORATIVO</p>
                </div>
            </div>

        </div>
    )
}
