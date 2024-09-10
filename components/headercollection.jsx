import React from 'react'
import { MdFilterList } from "react-icons/md";
import { collection } from '@/lib/data';

export default function HeaderCollection() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 w-full pt-2'>
        <div className="text-xs justify-start w-full">
            <p>Home / Coleccion</p>
        </div>
      <div className="text-3xl font-bold">
        <h2>COLECCION</h2>
      </div>
      <div className="text-xs">
        <p>Conocé las prendas de la Colección 2024. Encontrá tu favorito entre Abrigos, Sweaters, Buzos, Trajes, Sacos, Camisas, Pantalones, Jeans, Remeras, y Chombas.</p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-center items-center">
            <MdFilterList className="text-xl"/>
            <p>FILTRAR</p>
        </div>
        <div className="text-gray-400">
            <p>{collection.length} productos</p>
        </div>
        <div className="">
            Ordenar por:
        </div>
      </div>
    </div>
  )
}
