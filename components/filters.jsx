import React, { useState } from 'react'
import { useFilters } from '@/hooks/useFilters'


export default function Filters() {

    
    const [open, setOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return (
        <div className='text-xs flex flex-row justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center relative'>
                <div className='flex justify-center items-center flex-row'>
                    <p className='pr-1 font-light'>Ordenar por:</p><button onClick={() => setSecondOpen((prev) => !prev)} className='font-semibold'>Seleccionar</button>
                </div>

                {
                    secondOpen &&
                    <ul className='absolute flex justify-center items-center flex-col top-5 right-0 bg-gray-700 text-gray-200 p-2 rounded-md cursor-pointer w-3/4'>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>Mayor precio</li>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>Menor precio</li>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>Ascendente</li>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>Descendente</li>
                    </ul>

                }



            </div>
            <div className='flex flex-col justify-center items-center relative'>
                <div className='flex justify-center items-center flex-row'>
                    <p className='pr-1 font-light'>Mostrar:</p><button onClick={() => setOpen((prev) => !prev)} className='font-semibold'>Seleccionar</button>
                </div>

                {
                    open &&
                    <ul className='absolute flex justify-center items-center flex-col top-5 right-0 bg-gray-700 text-gray-200 p-2 rounded-md cursor-pointer w-2/4'>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>12</li>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>24</li>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>48</li>
                        <li className='hover:bg-gray-500 w-full py-1 text-center'>96</li>
                    </ul>

                }



            </div>
        </div>
    )
}
